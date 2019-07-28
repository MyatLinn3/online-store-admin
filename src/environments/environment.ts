// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
      apiKey: "AIzaSyCyfC2Jf2fiIQhM_oJwO9ZwTns1PxeFYQE",
      authDomain: "online-shop-db.firebaseapp.com",
      databaseURL: "https://online-shop-db.firebaseio.com",
      projectId: "online-shop-db",
      storageBucket: "gs://online-shop-db.appspot.com",
      messagingSenderId: "682836620874",
      appId: "1:682836620874:web:a7a424000b88c92e"
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
