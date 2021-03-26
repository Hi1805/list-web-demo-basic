// const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
console.log("functions",functions.https);
exports.addAdminRole = functions.https.onCall((data, context) => { // return 1 data

  if(context.auth.token.admin !==true){// 
        return {message:"You Are is not Admin",
              //   context:context.auth.token.email,
              //  context2 : context.auth.uid,
              //  context3 : context.auth.token.name,
              //  context4 : context.auth.token,
              //  data1 : data
              context : context//eror Port https://us-central1-fir-auth-c83e1.cloudfunctions.net/addAdminRole 500
          };
  }
  // get user and add admin custom claim
     return admin.auth().getUserByEmail(data.email).then(user => {
            return admin.auth().setCustomUserClaims(user.uid, {
                admin: true
    })
  }).then(() => {
    return {
      message: `Success! ${data.email} has been made an admin`
    }
  }).catch(err => {
    return err+"da loi";//promise value
  });
});

// const admin = require("firebase-admin");
// admin.initializeApp();
// exports.addAdminRole =functions.https.onCall((data,context)=>{
//     //get user and  custom claim (admin)
//     return admin.auth().getUserByEmail(data.email).then((user)=>{
//         return admin.auth().setCustomUserClaims(user.uid,{
//             admin : true
//         });
//     }).then(()=>{
//         return {
//             message  : `Success !${data.email} has been  made an admin `
//         }
//     }).catch((err)=>{
//         console.log(err);
//         return err;
//     });

// });
