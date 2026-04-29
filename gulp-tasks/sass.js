import {dest, src} from 'gulp';
import cleanCSS from '@aptuitiv/gulp-clean-css';
import * as sass from 'sass';
import gulpSass from 'gulp-sass';
const sassProcessor = gulpSass(sass);

// Flags whether we compress the output etc
const isProduction = process.env.NODE_ENV === 'production';

// The main Sass method grabs all root Sass files,
// processes them, then sends them to the output calculator
export default () => {
  const outputDest = './dist/css';
  // TODO: compile all stylesheets to allow per-page sheets
  return src(['./src/scss/*.scss', './src/scss/page_styles/*.scss'])
    .pipe(sassProcessor().on('error', sassProcessor.logError))
    .pipe(
      cleanCSS(
        isProduction
          ? {
              level: 2
            }
          : {}
      )
    )
    .pipe(dest(outputDest, {sourceMaps: !isProduction}));
};
