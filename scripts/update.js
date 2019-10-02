const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/ogcodes/upload";
const CLOUDINARY_UPLOAD_PRESET = "i4hpnx9j";
const CLOUD_NAME = "ogcodes";

let imgPreview = document.getElementById("img-preview");
let fileUpload = document.getElementById("file-upload");
let page = document.getElementById("whole");

let date;
let duration;
let format;
let tag;

// console.log(Tutorusername);
fileUpload.addEventListener("change", event => {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let level = document.getElementById("level").value;
  let userLevel = sessionStorage.setItem("userLevel", level);
  sessionStorage.setItem("firstName", firstName);
  sessionStorage.setItem("lastName", lastName);

  let file = event.target.files[0];
  let formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
  console.log(file);
  axios({
    url: CLOUDINARY_URL,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    data: formData
  })
    .then(res => {
      console.log(res);

      let url = res.data.secure_url;

      date = res.data.created_at;
      sessionStorage.setItem("url", url);
      let photo = sessionStorage.getItem("url", url);
      console.log(photo);

      return db
        .collection("profile")
        .doc()
        .set({
          displayPic: res.data.secure_url,
          firstName,
          lastName,
          level,
          date
        })
        .catch(err => {
          console.error(err);
        });
    })
    .catch(err => {
      console.error(err);
    });
});

// console.log(courseTitle);
// console.log(courseDescription);
function save() {
  location.href = "student-dashboard.html";
}
function Reload() {
  location.href = "instructor-edit-course.html";
}
