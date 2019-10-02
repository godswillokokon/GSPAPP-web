function getTopic() {
  axios.get('https://gspapi.herokuapp.com/api/admin/course', {
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

};

function login(num, pass) {
  //login
  const loginForm = document.querySelector("#login-form");
  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    //get user info
    const email = loginForm["login-email"].value;
    const password = loginForm["login-password"].value;
    axios.post({
      url: "https://gspapi.herokuapp.com/api/login",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        phoneNumber: email,
        password: password
      }
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  )
};

axios.post('/user', {
  params: {
    ID: 12345
  }
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })