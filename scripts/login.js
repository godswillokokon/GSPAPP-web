const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  //get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;
  try {
    const response = axios.post(`https://gspapi.herokuapp.com/api/login`, { phoneNumber: email, password: password });
    console.log(response)
  } catch (e) {

    console.log(e)
  }
}
)

