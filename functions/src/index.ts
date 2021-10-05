import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const universal = require(`${process.cwd()}/dist/angular-12-ssr-firebase-starter/server/main`).app();
exports.ssr = functions.https.onRequest(universal);
