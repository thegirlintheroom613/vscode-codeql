import * as gulp from 'gulp';
import * as replace from 'gulp-replace';

/** Inject the application insights key into the telemetry file */
export function injectAppInsightsKey() {
  if (!process.env.APP_INSIGHTS_KEY) {
    // noop
    console.log('APP_INSIGHTS_KEY environment variable is not set. So, cannot inject it into the application.');
    return Promise.resolve();
  }

  // replace the key
  return gulp.src(['out/telemetry.js'])
    .pipe(replace(/REPLACE-APP-INSIGHTS-KEY/, process.env.APP_INSIGHTS_KEY))
    .pipe(gulp.dest('out/'));
}
