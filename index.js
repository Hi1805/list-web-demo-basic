const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const admin = require("firebase-admin");
admin.initializeApp();

exports.addAdminRole =functions.https.onCall((data,context)=>{
    //get user and  custom claim (admin)
    return admin.auth().getUserEmail(data.email).then((user)=>{
        return admin.auth.setCustomUserClaims(user.id,{
            admin : true
        });
    }).then(()=>{
        return {
            message  : `Success !${data.email} has been  made an admin `
        }
    }).catch((err)=>{
        console.log(err);
        return err;
    })

})