const functions = require('firebase-functions');
const admin=require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

const createNotification=(notification=>{
    return admin.firestore().collection('notifications').add(notification)
            .then(doc=>console.log("bildirim eklendi",doc))
})

exports.projectCreated=functions.firestore
.document('projects/{projectId}')
.onCreate(doc=>{
        const project=doc.data();
        const bildirim={
            icerik:'Yeni proje eklendi',
            uye:`${project.isim} ${project.soyisim}`,
            zaman:admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(bildirim)
});

exports.uyeKatildi=functions.auth.user()
    .onCreate(user=>{
        return admin.firestore().collection('users')
                .doc(user.uid).get().then(doc=>{
                    const yeniUye=doc.data();
                    const bildirim={
                        icerik:'Yeni üye katıldı',
                        uye:`${yeniUye.isim} ${yeniUye.soyisim}`,
                        zaman:admin.firestore.FieldValue.serverTimestamp()
                    }

                    return createNotification(bildirim)

                })
    })
