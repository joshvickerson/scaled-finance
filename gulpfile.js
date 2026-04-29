import { watch as gulpWatch } from 'gulp';
import sass from './gulp-tasks/sass.js';

// Set each directory and contents that we want to watch and
// assign the relevant task. `ignoreInitial` set to true will
// prevent the task being run when we run `gulp watch`, but it
// will run when a file changes.
const watcher = () => {
  gulpWatch('./src/scss/**/*.scss', {ignoreInitial: true}, sass);
};

export default sass;
export const watch = watcher;
