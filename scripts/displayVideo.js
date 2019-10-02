
let docplayer = document.getElementById("docplayer");

let title = document.getElementById("title");
let intro = document.getElementById("intro");
let description = document.getElementById("description");
let timeframe = document.getElementById("timeframe");
let level = document.getElementById("level");
let tutor = document.getElementById("tutor");
let tutorsec = document.getElementById("tutorsec");
let dateCreated = document.getElementById("date");

let id = window.location.search.split("?")[1];
db.collection("class")
  .doc(id)
  .get()
  .then(doc => {
    lesson = doc.data().lesson;
    // console.log(docplayer);
    docplayer.src = lesson;
    courseTitle = doc.data().courseTitle;
    courseDescription = doc.data().courseDescription;
    date = doc.data().date;
    duration = doc.data().duration;
    let mainDuration = duration / 60;
    username = doc.data().username;
    console.log("lesson : ", lesson);
    console.log("Course Title : ", courseTitle);
    console.log("Course Description", courseDescription);
    console.log("date", date);
    console.log("duration", mainDuration);
    const htmlTitle = `
        <span id="title" class="card-title text-body mb-0">${
          doc.data().courseTitle
        }</span>
      `;
    title.innerHTML = htmlTitle;

    const htmlIntro = `
      <h1 id="intro" class="text-white flex m-0" >${doc.data().courseTitle}</h1>
      `;
    intro.innerHTML = htmlIntro;

    const htmlDescription = `
      <p id="description" class="hero__lead measure-hero-lead text-white-50 mb-24pt">
        ${doc.data().courseDescription}
      </p>
      `;
    description.innerHTML = htmlDescription;
    const htmlTime = `
       <p id="timeframe" class="h2 text-white-50 font-weight-light m-0">Video length : ${Math.ceil(
         mainDuration
       )} Minutes</p>
      `;
    timeframe.innerHTML = htmlTime;
    const htmlLevel = `
        <li id="level" class="nav-item navbar-list__item">
          <i  class="material-icons text-muted icon--left">assessment</i>
         Level : ${doc.data().courseLevel}
        </li>
      `;
    level.innerHTML = htmlLevel;
    const htmltutor = `
        <span id="tutor" class="text-50 small font-weight-bold mr-8pt"> ${
          doc.data().Tutorusername
        }</span>
      `;
    tutor.innerHTML = htmltutor;
    const htmltutorsec = `
        <div class="media-body" id="tutorsec">
          <a class="card-title m-0" >${doc.data().Tutorusername}</a>
          <p class="text-50 lh-1 mb-0">Instructor</p>
        </div>
      `;
    tutorsec.innerHTML = htmltutorsec;
    const htmlDate = `
        <li class="nav-item navbar-list__item" id="date">
          <i class="material-icons text-muted icon--left">schedule</i>
           Date Created:  ${new Date(doc.data().date).toDateString()}
        </li>
      `;
    dateCreated.innerHTML = htmlDate;
  })
  .catch(err => {
    console.error(err);
  });
