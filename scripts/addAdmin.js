auth.onAuthStateChanged(user => {
  if (user) {
    console.log("user logged in");
  } else {
    console.log("user not logged in");
  }
});
//login
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  //get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;
  // const displayName = signupForm["login-name"].value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then(cred => {
      firebase
        .auth()
        .currentUser.getIdToken(true)
        .then(function(idToken) {
          // Send token to your backend via HTTPS
          let currentUsers = firebase.auth().currentUser;
          console.log(currentUsers, "user");

          console.log(idToken, "token");
          console.log(currentUser, "session");
        })
        .catch(function(error) {
          console.log(error);
        });
      let currentUser = sessionStorage.setItem(
        "user",
        firebase.auth().currentUser
      );
      // console.log(cred.user);
      // location.href = "student-dashboard.html";
    })
    .catch(err => {
      console.log(err);
      alert(err);
    });
});

function logout() {
  //  e.preventDefault();
  // clearCookie();
  auth.signOut().then(() => {
    let currentUser = sessionStorage.removeItem("user");
    console.log("user is logging out");
    // location.href = "index.html";
  });
  // console.log("am logging out");
}

const adminForm = document.querySelector("#admin-actions");
adminForm.addEventListener("submit", e => {
  const adminEmail = document.querySelector("#admin-email").value;
  const addAdminRole = functions.httpsCallable("addAdminRole");
  addAdminRole({ email: adminEmail })
    .then(result => {
      console.log(result);

      location.href = "instructor-dashboard.html";
      console.log("admin added");
    })
    .catch(err => {
      console.log(err);
    });
});
// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    user.getIdTokenResult().then(idTokenResult => {
      let admin = (user.admin = idTokenResult.claims.admin);
      if (admin) {
        let currentUser = sessionStorage.setItem(
          "admin",
          firebase.auth().currentUser.admin
        );
        console.log("admin logged in");
      }
    });
  } else {
    err => console.log(err.message);
    console.log("admin not logged in");
  }
});
let currentUser = sessionStorage.getItem("admin");

if (currentUser) {
  console.log("admin logged in from auth");

  // user.getIdTokenResult().then(idTokenResult => {
  //   user.admin = idTokenResult.claims.admin;
  //   setupUI(user);
  // });
  // db.collection("guides").onSnapshot(
  //   snapshot => {
  //     setupGuides(snapshot.docs);
  //   },
} else {
  location.href = "index.html";
  err => console.log(err.message);
  console.log("admin not logged in from auth");
}

auth.onAuthStateChanged(user => {
  if (user) {
    console.log(user.admin);

    // user.getIdTokenResult().then(idTokenResult => {
    //   user.admin = idTokenResult.claims.admin;
    //   setupUI(user);
    // });
    // db.collection("guides").onSnapshot(
    //   snapshot => {
    //     setupGuides(snapshot.docs);
    //   },
    console.log("admin added");
  } else {
    // location.href = "index.html";
    err => console.log(err.message);
  }
});
function logout() {
  //  e.preventDefault();
  // clearCookie();
  auth.signOut().then(() => {
    console.log("user is logged out");
    let currentUser = sessionStorage.removeItem("admin");
  });
  console.log("am logging out");
}
