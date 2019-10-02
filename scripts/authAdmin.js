// // auth.onAuthStateChanged(user => {
// //   if (user) {
// //     user.getIdTokenResult().then(idTokenResult => {
// //       let admin = (user.admin = idTokenResult.claims.admin);
// //       if (admin) {
// //         let currentUser = sessionStorage.setItem(
// //           "admin",
// //           firebase.auth().currentUser.admin
// //         );
// //         console.log("admin logged in");
// //       }
// //     });
// //   } else {
// //     err => console.log(err.message);
// //     console.log("admin not logged in");
// //   }
// // });
// let currentUser = sessionStorage.getItem("admin");

// if (currentUser) {
//   console.log("admin logged in from auth");

//   // user.getIdTokenResult().then(idTokenResult => {
//   //   user.admin = idTokenResult.claims.admin;
//   //   setupUI(user);
//   // });
//   // db.collection("guides").onSnapshot(
//   //   snapshot => {
//   //     setupGuides(snapshot.docs);
//   //   },
// } else {
//   location.href = "index.html";
//   err => console.log(err.message);
//   console.log("admin not logged in from auth");
// }
// function logout() {
//   //  e.preventDefault();
//   // clearCookie();
//   auth.signOut().then(() => {
//     console.log("user is logged out");
//     let currentUser = sessionStorage.removeItem("admin");
//     let usernameSession = sessionStorage.removeItem("adminUsername");
//     location.href = "loginAdmin.html";
//   });
//   console.log("am logging out");
// }
