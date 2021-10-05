import * as functions from 'firebase-functions';

const universal = require(`${process.cwd()}/dist/angular-12-ssr-firebase-starter/server/main`).app();
exports.ssr = functions.https.onRequest(universal);
