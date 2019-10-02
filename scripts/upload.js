const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/ogcodes/upload";
const CLOUDINARY_UPLOAD_PRESET = "i4hpnx9j";
const CLOUD_NAME = "ogcodes";

let Tutorusername = sessionStorage.getItem("adminUsername");

let imgPreview = document.getElementById("img-preview");
let fileUpload = document.getElementById("file-upload");
let page = document.getElementById("whole");

let date;
let duration;
let format;
let tag;

// console.log(Tutorusername);

fileUpload.addEventListener("change", event => {
  let courseDescription = document.getElementById("courseDescription").value;
  let courseTitle = document.getElementById("courseTitle").value;
  let courseLevel = document.getElementById("courseLevel").value;
  // console.log("insdie", courseDescription);
  let file = event.target.files[0];
  let formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
  console.log(file);
  const html = `
      <div class="preloader">
        <div class="sk-double-bounce">
            <div class="sk-child sk-double-bounce1"></div>
            <div class="sk-child sk-double-bounce2"></div>
        </div>
      </div>
      `;
  page.innerHTML = html;
  axios({
    url: CLOUDINARY_URL,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    data: formData
  })
    .then(res => {
      const html = `
      <!DOCTYPE html>
<html lang="en" dir="ltr">


<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Edit Course</title>

    <!-- Prevent the demo from appearing in search engines -->
    <meta name="robots" content="noindex">

    <!-- Perfect Scrollbar -->
    <link type="text/css" href="assets/vendor/perfect-scrollbar.css" rel="stylesheet">

    <!-- Fix Footer CSS -->
    <link type="text/css" href="assets/vendor/fix-footer.css" rel="stylesheet">

    <!-- Material Design Icons -->
    <link type="text/css" href="assets/css/material-icons.css" rel="stylesheet">
    <link type="text/css" href="assets/css/material-icons.rtl.css" rel="stylesheet">

    <!-- Font Awesome Icons -->
    <link type="text/css" href="assets/css/fontawesome.css" rel="stylesheet">
    <link type="text/css" href="assets/css/fontawesome.rtl.css" rel="stylesheet">

    <!-- Preloader -->
    <link type="text/css" href="assets/css/preloader.css" rel="stylesheet">
    <link type="text/css" href="assets/css/preloader.rtl.css" rel="stylesheet">

    <!-- App CSS -->
    <link type="text/css" href="assets/css/app.css" rel="stylesheet">
    <link type="text/css" href="assets/css/app.rtl.css" rel="stylesheet">

    <!-- cloudinary -->

    <link href="https://unpkg.com/cloudinary-video-player/dist/cld-video-player.css" rel="stylesheet">




</head>

<body class="layout-navbar-mini-fixed-bottom" id="whole"> 
    

    <!-- Header Layout -->
    <div class="mdk-header-layout js-mdk-header-layout">

        <!-- Header -->

        <div id="header" class="mdk-header bg-dark js-mdk-header mb-0" data-effects="waterfall blend-background" data-fixed data-condenses>
            <div class="mdk-header__content">

                <div class="navbar navbar-expand-sm navbar-dark bg-dark pr-0 pr-md-16pt" id="default-navbar" data-primary>

                    <!-- Navbar toggler -->
                    <button class="navbar-toggler navbar-toggler-right d-block d-md-none" type="button" data-toggle="sidebar">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <!-- Navbar Brand -->
                    <a href="index.html" class="navbar-brand">
                        <img class="navbar-brand-icon mr-0 mr-md-8pt" src="assets/images/logo/white-100%402x.png" width="30" alt="Tutorio">
                        <span class="d-none d-md-block">Tutorio</span>
                    </a>

                   
                    <!-- Main Navigation -->



                    <nav class="nav navbar-nav ml-auto flex-nowrap">
                        <div class="nav-item dropdown d-none d-sm-flex ml-16pt">
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
                                <img width="32" height="32" class="rounded-circle" src="assets/images/illustration/teacher/128/white.svg" alt="student" />
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">


                                <div class="dropdown-header"><strong>Instructor</strong></div>
                                <a class="dropdown-item" href="instructor-dashboard.html">Dashboard</a>
                                <a class="dropdown-item" href="instructor-courses.html">Courses</a>
                                <!-- <a class="dropdown-item" href="instructor-quizzes.html">Quizzes</a> -->
                                <div class="dropdown-divider"></div>
                                <div class="dropdown-header"><strong>Account</strong></div>
                                <!-- <a class="dropdown-item" href="student-edit-account.html">Edit Account</a> -->
                                <a class="dropdown-item" href="index.html">Home</a>
                                <a class="dropdown-item" onclick="logout()" href="#">Logout</a>

                            </div>
                        </div>




                    
                    </nav>

                    <!-- // END Main Navigation -->

                </div>

            </div>
        </div>

        <!-- // END Header -->

        <!-- Header Layout Content -->
        <div class="mdk-header-layout__content page-content ">

            <div class="bg-gradient-primary border-bottom-white py-32pt">
                <div class="container d-flex flex-column flex-md-row align-items-center text-center text-md-left">
                    <img src="assets/images/illustration/teacher/128/white.svg" width="104" class="mr-md-32pt mb-32pt mb-md-0" alt="instructor">
                    <div class="flex mb-32pt mb-md-0">
                        <h2 class="text-white mb-0">Instructor</h2>
                        <p class="lead text-white-50 d-flex align-items-center admin-details">Unknown User</p>
                    </div>
                    <!-- <a href="student-edit-account.html" class="btn btn-outline-white">Edit account</a> -->
                </div>
            </div>

            <div class="navbar navbar-expand-sm navbar-dark-white bg-gradient-primary p-sm-0 ">
                <div class="container page__container">

                    <!-- Navbar toggler -->
                    <button class="navbar-toggler ml-n16pt" type="button" data-toggle="collapse" data-target="#navbar-submenu2">
                        <span class="material-icons">people_outline</span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbar-submenu2">
                        <div class="navbar-collapse__content pb-16pt pb-sm-0">
                            <ul class="nav navbar-nav">

                                <li class="nav-item">
                                    <a href="instructor-dashboard.html" class="nav-link">Dashboard</a>
                                </li>
                                <li class="nav-item dropdown active">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Manage</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="instructor-courses.html">Courses</a>
                                        <!-- <a class="dropdown-item" href="instructor-quizzes.html">Quizzes</a> -->
                                        <a class="dropdown-item active" href="instructor-edit-course.html">Edit Course</a>
                                        <!-- <a class="dropdown-item" href="instructor-edit-quiz.html">Edit Quiz</a> -->
                                    </div>
                                </li>
                              
                            </ul>
                            <ul class="nav navbar-nav ml-auto">
                                <li class="nav-item">
                                    <!-- <a href="instructor-profile.html" class="nav-link">Profile</a> -->
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div class="page-section bg-white border-bottom-2">
                <div class="container page__container">
                    <div class="row align-items-center">
                        <div class="col-md-8">
                            <form >
                                <h4>Course title</h4>
                                
                                <div class="form-group">
                                    <input type="text " id="courseTitle" class="form-control form-control-lg" placeholder="Course title" >
                                </div>
                            
                                
                                <h4>Description</h4>
                                <textarea  id="courseDescription" class="form-control" rows="3" placeholder="Course description goes here.."></textarea>
                                <br>
                                <div class="form-group">
                                    <input type="number " id="courseLevel" class="form-control form-control-lg" placeholder="100, 200, 300, 400">
                                </div>
                                <br>
                               
                                <div class="col-md-4">
                                    <div class="card m-0">
                                        <div class="card-header text-center">
                                        <div class="form-group">
                                        <div class="card">
                                            <label class="file-upload-container btn btn-accent" for="file-upload">
                                                <input id="file-upload" action="submit" class="btn btn-accent" type="file" style="display:none;">
                                               Select Course
                                            </label>
                                        </div>
                                        </div>

                                        </div>                                   
                                    </div>

                                
                                </div>
                            </form>
                        </div>
                        <div class="col-md-4">
                            <!-- <div class="card m-0"> -->
                                <div class="mb-heading d-flex align-items-center">
                                    <!--<h4 class="flex mb-0">Main Video</h4>-->
                                    <!-- <a href="#" class="text-underline">Edit</a> -->
                                </div>
                                
                                <!--<div class="card">
                                    <div class="embed-responsive embed-responsive-16by9">
                                
                                        <video id="img-preview" controls 
                                            src="${video}"
                                            class="cld-video-player cld-video-player-skin-light embed-responsive-item"
                                            data-cld-transformation='{ "width": 500, "crop": "limit" }'>
                                        </video>
                                    </div>
                                </div> -->
                                <div class="card-header text-center">

                                    
                                    <a href="#" onclick="Next()" class="btn btn-accent">Done</a>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="container page__container page-section">
                <div class="row">
                    <div class="col-md-12">

                        <div class="mb-heading d-flex align-items-center">
                            <h4 class="flex mb-0">Order of Sections</h4>
                            <!-- <a href="#" class="text-underline">Change order</a> -->
                        </div>
                        <div class="card stack">
                            <div class="card-header">
                                <h4 class="card-title mb-0">Overview</h4>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Quick Overview</li>
                                <li class="list-group-item">Basic Setup</li>
                                <li class="list-group-item">Main Activity</li>
                                <li class="list-group-item">Summary & Conclusion</li>

                            </ul>
                        </div>
                      
                    </div>
                   
                    </div>
                </div>
            </div>



            <div class="js-fix-footer bg-white border-top-2">
                <div class="container page-section py-lg-48pt">
                    <div class="row">
                        
                        <div class="col-md-12 text-md-right">
                            <p class="text-70 brand justify-content-md-end">
                                <img class="brand-icon" src="assets/images/logo/black-70%402x.png" width="30" alt="Tutorio"> Tutorio
                            </p>
                            <p class="text-muted mb-0 mb-lg-16pt">Tutorio is an online learning platform that helps anyone achieve their personal and professional goals.</p>
                        </div>
                    </div>
                </div>
                <div class="bg-footer page-section py-lg-32pt">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-2 col-sm-4 mb-24pt mb-md-0">
                                <p class="text-white-70 mb-8pt"><strong>Follow us</strong></p>
                                <nav class="nav nav-links nav--flush">
                                    <a href="#" class="nav-link mr-8pt"><img src="assets/images/icon/footer/facebook-square%402x.png" width="24" height="24" alt="Facebook"></a>
                                    <a href="#" class="nav-link mr-8pt"><img src="assets/images/icon/footer/twitter-square%402x.png" width="24" height="24" alt="Twitter"></a>
                                    <a href="#" class="nav-link mr-8pt"><img src="assets/images/icon/footer/vimeo-square%402x.png" width="24" height="24" alt="Vimeo"></a>
                                    <a href="#" class="nav-link"><img src="assets/images/icon/footer/youtube-square%402x.png" width="24" height="24" alt="YouTube"></a>
                                </nav>
                            </div>
                            <!-- <div class="col-md-6 col-sm-4 mb-24pt mb-md-0 d-flex align-items-center">
                                <a href="#" class="btn btn-outline-white">English <span class="icon--right material-icons">arrow_drop_down</span></a>
                            </div> -->
                            <div class="col-md-4 text-md-right">
                                <p class="mb-8pt d-flex align-items-md-center justify-content-md-end">
                                    <a href="#" class="text-white-70 text-underline mr-16pt">Terms</a>
                                    <a href="#" class="text-white-70 text-underline">Privacy policy</a>
                                </p>
                                <p class="text-white-50 mb-0">Copyright 2019 &copy; All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!-- // END Header Layout Content -->

    </div>
    <!-- // END Header Layout -->

    <!-- Modal -->
   
    <script src="https://www.gstatic.com/firebasejs/5.8.3/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/5.8.3/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/5.8.3/firebase-firestore.js"></script>
    <script src="https://www.gstatic.com/firebasejs/5.8.3/firebase-functions.js"></script>
    <script>
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyC-1WdIpSC7e79uQgq1pzKFArp3y_ykyD4",
            authDomain: "mini-udemy.firebaseapp.com",
            databaseURL: "https://mini-udemy.firebaseio.com",
            projectId: "mini-udemy",
            storageBucket: "mini-udemy.appspot.com",
            messagingSenderId: "658193953356"
        };
        firebase.initializeApp(config);
        // make auth and firestore refrences
        const auth = firebase.auth();
        const db = firebase.firestore();
        const functions = firebase.functions();

    </script>
    <script src="scripts/authAdmin.js"></script>
    <script src="scripts/indexAdmin.js"></script>
    <script src="scripts/upload.js"></script>
     <!-- Cloudinary Video Player Dependencies -->
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/cloudinary-core/2.3.0/cloudinary-core-shrinkwrap.js"></script>
  <script type="text/javascript" src="https://unpkg.com/cloudinary-video-player/dist/cld-video-player.js"></script>

    <!-- jQuery -->
    <script src="assets/vendor/jquery.min.js"></script>

    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <!-- Bootstrap -->
    <script src="assets/vendor/popper.min.js"></script>
    <script src="assets/vendor/bootstrap.min.js"></script>

    <!-- Perfect Scrollbar -->
    <script src="assets/vendor/perfect-scrollbar.min.js"></script>

    <!-- DOM Factory -->
    <script src="assets/vendor/dom-factory.js"></script>

    <!-- MDK -->
    <script src="assets/vendor/material-design-kit.js"></script>

    <!-- Fix Footer -->
    <script src="assets/vendor/fix-footer.js"></script>

    <!-- Chart.js -->
    <script src="assets/vendor/Chart.min.js"></script>

    <!-- App JS -->
    <script src="assets/js/app.js"></script>

    <!-- Highlight.js -->
    <script src="assets/js/hljs.js"></script>

    <!-- App Settings (safe to remove) -->
    <script src="assets/js/app-settings.js"></script>




</body>


</html>
      `;
      page.innerHTML = html;
      // console.log(res);
      imgPreview.src = res.data.secure_url;
      let video = res.data.secure_url;
      date = res.data.created_at;
      duration = res.data.duration;
      // console.log(courseTitle);
      // console.log(courseDescription);

      return db
        .collection("class")
        .doc()
        .set({
          lesson: imgPreview.src,
          courseTitle,
          courseDescription,
          date,
          duration,
          courseLevel,
          Tutorusername
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
function Next() {
  location.href = "instructor-courses.html";
}
function Reload() {
  location.href = "instructor-edit-course.html";
}
