// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAbjp4UUIzWjRC2Q2ku6d6NbzinVF7coaw",
    authDomain: "ng-fbpush.firebaseapp.com",
    databaseURL: "https://ng-fbpush.firebaseio.com",
    projectId: "ng-fbpush",
    storageBucket: "ng-fbpush.appspot.com",
    messagingSenderId: "266757645561"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
