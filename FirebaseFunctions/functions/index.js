const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// lắng nghe sự kiện
// exports.randomNumber = functions.https.onRequest((req, res) => { //request is never read
//     const number = Math.round(Math.random() * 100);
//     res.send(number.toString());
// })
// exports.toTheDojo = functions.https.onRequest((req, res) => {
//     res.redirect("https://www.facebook.com/Ripker1805"); // kick vao link functions chay qua link fb

// })

// exports.sayHello = functions.https.onCall((data, context) => {
//     return "Huy dep trai" + data.name;
// })
// Nếu tạo 1 nick mới 

// auth trigger (new user signup)
exports.newUserSignUp = functions.auth.user().onCreate(user => {
    // for background triggers you must return a value/promise
    return admin.firestore().collection('users').doc(user.uid).set({
        email: user.email,
        upvotedOn: [],
    });
});

// auth trigger (user deleted)
exports.userDeleted = functions.auth.user().onDelete(user => {
    const doc = admin.firestore().collection('users').doc(user.uid);
    return doc.delete();
});

// http callable functions
exports.addRequest = functions.https.onCall((data, context) => {

    // neu tai khoan khong ton tai
    console.log("abc");
    if (!context.auth) {
        return 'unauthenticated ,only authenticated users can add requests';
    }

    //   chi chua 30 ki tu thoi 
    if (data.text.length > 30) {
        return 'invalid-argument ,request must be no more than 30 characters long';
    }
    if (data.text.trim() == "") {
        return "Can't read null";
    }

    const text = data.text;
    return admin.firestore().collection('requests').add({
        text: text,
        upvotes: data.upvotes
    });

});


//export callable function
exports.upvote = functions.https.onCall(async(data, context) => {
    // check auth state
    if (!context.auth) {
        throw new functions.https.HttpsError(
            'unauthenticated',
            'only authenticated users can vote up requests'
        );
    }
    // get refs for user doc & request doc
    const user = admin.firestore().collection('users').doc(context.auth.uid);
    const request = admin.firestore().collection('requests').doc(data.id);

    let doc = await user.get();
    // check thew user hasn't already upvoted
    if (doc.data().upvotedOn.includes(data.id)) { // neu email da bau chon id roi thi thong bao loi
        // kiem tra se trong mang upvote co phan tu data.id hay khong

        //upvoteOn = [ 

        //]
        throw new functions.https.HttpsError(
            'failed-precondition',
            'You can only vote something up once'
        );
    }

    // update the array in user document
    await user.update({
            // upvotedOn: [...doc.data().upvotedOn, data.id] // luc dau binh chon = 0
            upvotedOn: doc.data().upvotedOn.push(data.id)

            // ripker => vo binh chon 
            // upvotedOn :[
            //"0":"1233563636"
            //  ]
            //huy2 binh chon
            //
            // upvotedOn :[
            //"0":"1233563636"
            // "1":xcđfdfdfdf ]
            //huy3 
            //
            //...doc.data().upvotedOn cai mang
        })
        .then(() => {
            // update the votes on the request
            return request.update({
                upvotes: admin.firestore.FieldValue.increment(1) // upvotes se tang 1
            });
        });

});