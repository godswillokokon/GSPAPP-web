let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let level = document.getElementById("level");
let regnumId = document.getElementById("regnum");
let profileImg = document.getElementById("profileImg");
let upImg = document.getElementById("upImg");

let userLevelS = sessionStorage.getItem("userLevel");
let firstNameS = sessionStorage.getItem("firstName");
let lastNameS = sessionStorage.getItem("lastName");
let photoS = sessionStorage.getItem("url");
let photoSS = sessionStorage.getItem("url");
let regnumS = sessionStorage.getItem("regnum");

const htmlUpImg = `
         <img width="32" height="32" class="rounded-circle" src="${photoSS}" alt="student" style= "object-fit: contain;"/> 
      `;
upImg.innerHTML = htmlUpImg;

const htmlImg = `
         <img src="${photoS}" class="img-responsive" alt="image" style= "max-width:20%; height: 20%; object-fit: contain; "  /> 
      `;
profileImg.innerHTML = htmlImg;

const htmlFirst = `
        <th scope="row">#</th>
        <td class="active">First name</td>
        <td>${firstNameS}</td>
      `;
firstName.innerHTML = htmlFirst;

const htmlLast = `
        <th scope="row">#</th>
        <td class="active">Last name</td>
        <td>${lastNameS}</td>
      `;
lastName.innerHTML = htmlLast;

const htmlLevel = `
        <th scope="row">#</th>
        <td class="active">Level</td>
        <td>${userLevelS}</td>
      `;
level.innerHTML = htmlLevel;

const htmlReg = `
        <th scope="row">#</th>
        <td class="active">Reg number</td>
        <td>${regnumS}</td>
      `;
regnumId.innerHTML = htmlReg;
