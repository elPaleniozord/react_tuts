import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBFUufpwREVLMB5sSsU9e-u1zK8avfV1rc",
    authDomain: "expensify-ab082.firebaseapp.com",
    databaseURL: "https://expensify-ab082.firebaseio.com",
    projectId: "expensify-ab082",
    storageBucket: "expensify-ab082.appspot.com",
    messagingSenderId: "1044679855550"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref('expenses').on('child_removed', (snapshot)=>{
    console.log(snapshot.key, snapshot.val())
})

database.ref('expenses').on('child_changed', (snapshot)=>{
    console.log(snapshot.key, snapshot.val())
})

database.ref('expenses').on('child_added', (snapshot)=>{
    console.log(snapshot.key, snapshot.val())
})


// database.ref('expenses')
//     .once('value')
//     .then((snapshot)=>{
//         const expenses = [];
//         snapshot.forEach((item)=>{
//             expenses.push({
//                 id: item.key,
//                 ...item.val()
//             })
//         }) 
//         console.log(expenses)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })

// database.ref('expenses').on('value', (snapshot)=>{
//     const expenses = []
//     snapshot.forEach((item)=>{
//         expenses.push({
//             id: item.key,
//             ...item.val()
//         }) 
//     })
//     console.log(expenses)
// })


database.ref('expenses').push({
    description: 'rent',
    note: 'hajs za baze',
    amount: 850,
    createdAt: 1
})

//database.ref('notes/-LTxpDSHI1ucNdtEwGqg').remove()

// database.ref('notes').push({
//     title: 'Course Topic',
//     body: 'JavaScript, Python, C++'
// })



// database.ref().on('value', (snapshot)=>{
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// database.ref().set({
//     name: 'Jacek Walasik',
//     age: 29,
//     stressLevel: 6,
//     job: {
//         title: 'Web-Developer',
//         company: 'Hemm'
//     },
//     isSingle: false,
//     location: {
//         city: 'Wrocław',
//         country: 'Poland'
//     }
// }).then(()=>{
//     console.log('Data is saved')
// }).catch((error)=>{
//     console.log(error)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })

// // database.ref('isSingle').set(null).then(()=>{
// //     console.log('item removed')
// // }).catch((error)=>{
// //     console.log(error)
// // })