document.querySelector('h2').style.textDecoration = "underline";

function currentTime() {
  var milTime;
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let day = date.getDay();

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;

  let time = parseInt(hh, 10) + ":" + mm;
  if (parseInt(hh, 10) > 12) {
    time = parseInt((parseInt(hh, 10) - 12), 10) + ":" + mm;
  }
  if (parseInt(hh, 10) > 11) {
    time = time + "PM";
  }
  else {
    time = time + "AM";
  }
  //wednesday:

  milTime = parseInt((hh * 100), 10) + parseInt(mm, 10);
  console.log(milTime);
  if (milTime > 830 && milTime < 855) {
    document.getElementById('band').innerText = "Breakfast";
  }
  else if (milTime > 900 && milTime < 925) {
    document.getElementById('band').innerText = "Introductions";
  }
  else if (milTime > 930 && milTime < 1055) {
    document.getElementById('band').innerText = "Session 1";
  }
  else if (milTime > 1100 && milTime < 1225) {
    document.getElementById('band').innerText = "Session 2";
  }
  else if (milTime > 1230 && milTime < 1310) {
    document.getElementById('band').innerText = "Lunch";
  }
  else if (milTime > 1315 && milTime < 1340) {
    document.getElementById('band').innerText = "STEAM Presentation";
  }
  else if (milTime > 1345 && milTime < 1525) {
    document.getElementById('band').innerText = "Session 3";
  }
  else if (milTime > 1530 && milTime < 1655) {
    document.getElementById('band').innerText = "Session 4";
  }
  else if (milTime > 1700 && milTime < 1730) {
    document.getElementById('band').innerText = "Reflection";
  }
  else if (milTime > 1730) {
    document.getElementById('band').innerText = "Event Over";
  }
  else {
    document.getElementById('band').innerText = "Passing Period";
  }

  document.getElementById("clock").innerText = time;
  let t = setTimeout(function() { currentTime() }, 1000);
}

currentTime();