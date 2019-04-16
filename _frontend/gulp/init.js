const chalk = require('chalk');
const del = require('del');
const fs = require('fs');
const gulp = require('gulp');
const inquirer = require('inquirer');
const kebabCase = require('lodash/kebabCase');
const log = require('fancy-log');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

const paths = {
  vanilla: 'src/js/vanilla',
  vue: 'src/js/vue',
};

const questions = [
  {
    message: 'Which JavaScript approach would you like to use?',
    name: 'javascript',
    type: 'list',
    choices: ['Vue.js', 'Vanilla JavaScript'],
    filter(val) {
      return kebabCase(val);
    },
  },
];

function initTask(done) {
  // if both javascript approach still exist ...
  if (fs.existsSync(paths.vanilla) && fs.existsSync(paths.vue)) {
    if (isDev) {
      inquirer.prompt(questions).then((answers) => {
        const folder = answers.javascript === 'vue-js' ? paths.vanilla : paths.vue;
        log(`Deleting ${chalk.blue(`${path.relative(process.cwd(), folder)}`)}`);
        del.sync(folder);
        done();
      });
    } else {
      done(new Error(chalk.red('No JavaScript approach selected. Run `npm run dev` command first.')));
    }
  } else {
    done();
  }
}

gulp.task('init', initTask);
