const accountDetails = document.querySelector(".admin-details");

let username = sessionStorage.getItem("adminUsername");
// console.log(regnum);
const html = `
        <h2>Logged in as ${username}</h2>

      `;
accountDetails.innerHTML = html;

// const accountDetailsView = document.querySelector(".tutor");

// let username = sessionStorage.getItem("adminUsername");
// // console.log(regnum);
// const html = `

//          <span  class="text-50 small font-weight-bold mr-8pt tutor">${username}</span>

//       `;
// accountDetailsView.innerHTML = html;
