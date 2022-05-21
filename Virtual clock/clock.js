let clock = document.getElementById('clockdisplay');
let calendar = document.getElementById('calendar');
let ses = document.getElementById('sessions');
let sec = document.getElementById('sec');

let imagedisplay = document.querySelector('.container');


let images = ['../img/1.jpg', '../img/2.jpg', '../img/3.png']
let imgcount = images.length;



function Time(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        // h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;


    var fulltime = h + ':' + m;

    clock.innerText = fulltime;
    ses.innerText = session;
    sec.innerText = s;

    setTimeout(Time, 1000);
    Month()
    imagebackground(h);
}

function Month(){
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var date = new Date();

    var day = days[date.getDay()];
    var month = months[date.getMonth()];

    var getdate = date.getDate();

    var getyear = date.getFullYear();
  
    
    calendar.textContent = day + '  ' + month + ' ' + getdate + ', ' + getyear;
}

function imagebackground(hours){
    if(hours >= 1 && hours <= 6){
        imagedisplay.style.backgroundImage = "url('img/1.jpg')";
    }
    else if(hours >= 6 && hours < 12){
        imagedisplay.style.backgroundImage = "url('img/2.jpg')";
    }else if(hours >= 13 && hours <= 18){
        imagedisplay.style.backgroundImage = "url('img/3.jpg')";
    }else{
        imagedisplay.style.backgroundImage = "url('img/4.png')";
    }
}


Time();