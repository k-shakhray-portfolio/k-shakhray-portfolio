let list = document.querySelector('.track-list'),
    listAdd = document.querySelector('.track-list-add'),
    input = document.querySelector('.input-add'),
    btnPlay = document.querySelectorAll('.btn-play'),
    btnDelete = document.querySelectorAll('.btn-delete'),
    runningTimer = document.querySelectorAll('.running'),
    IDofInterval = '';


listAdd.addEventListener('submit', function (e) {
    e.preventDefault();

    let date = Date.now();

    if (input.value == 0) {
        list.innerHTML += '<li class="track-item"> ' +
            '<span>New Item</span> ' +
            '<div>' +
            '<span class="timer running" data-time="' + date + '" data-stop="">00 : 00 : 00</span>' +
            '<button class="btn-play"><i class="fa fa-pause-circle-o" aria-hidden="true"></i></button>' +
            '<button class="btn-delete"><i class="fa fa-times-circle-o" aria-hidden="true"></i></button>' +
            '</div>' +
            '</li>';
        btnLoad();
        loadTimer();
        store();
        input.value = "";
    } else {
        list.innerHTML += '<li class="track-item"> ' +
            '<span>' + input.value + '</span> ' +
            '<div>' +
            '<span class="timer running" data-time="' + date + '" data-stop="">00 : 00 : 00</span>' +
            '<button class="btn-play"><i class="fa fa-pause-circle-o" aria-hidden="true"></i></button>' +
            '<button class="btn-delete"><i class="fa fa-times-circle-o" aria-hidden="true"></i></button>' +
            '</div>' +
            '</li>';
        btnLoad();
        loadTimer();
        store();
        input.value = "";
    }
}, false)

function btnLoad() {
    btnDelete = document.querySelectorAll('.btn-delete');
    btnPlay = document.querySelectorAll('.btn-play');

    addStopTimer()
    addNewDeleteBtn()
}

function addStopTimer() {
    btnPlay.forEach(e => e.removeEventListener('click', stopTimer, false));

    btnPlay.forEach(e => e.addEventListener('click', stopTimer, false))
}

function addNewDeleteBtn() {

    btnDelete.forEach(e => e.removeEventListener('click', deleteFunc, false));

    btnDelete.forEach(e => e.addEventListener('click', deleteFunc, false))
}

function stopTimer(e) {

    let elem = e.currentTarget;

    let timer = elem.parentNode.querySelector('.timer')
    let btn = elem.querySelector('.fa')

    btn.classList.toggle('fa-pause-circle-o')
    btn.classList.toggle('fa-play-circle-o')

    if (timer.classList.contains('running')) {
        let stopDate = Number(timer.dataset.stop)
        stopDate = stopDate + (Date.now() - Number(timer.dataset.time));
        timer.dataset.stop = stopDate.toString()
    } else {
        timer.dataset.time = Date.now().toString();
    }

    timer.classList.toggle('running')

    loadTimer();
    store();
}

function deleteFunc(e) {

    console.log(e.currentTarget);

    let target = e.currentTarget;

    target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);

    store();
}

function loadTimer() {

    runningTimer = document.querySelectorAll('.running');

    let t = window.setTimeout(function () {
        let idMax = t;
        // console.log('Должно работать')
        for (let i = 0; i < idMax; i++) {
            window.clearInterval(i);
            window.clearTimeout(i);
        }
    }, 0);

    runningTimer.forEach(function (e) {

        let date = Number(Date.now()) - Number(e.dataset.time) + Number(e.dataset.stop);

        let generalSec = Math.floor(date / 1000);
        let sec = generalSec % 60;
        if (sec < 10) {
            sec = "0" + sec;
        }

        let generalMin = Math.floor(generalSec / 60);
        let min = generalMin % 60;
        if (min < 10) {
            min = '0' + min;
        }

        let hour = Math.floor(generalMin / 60);
        if (hour < 10) {
            hour = "0" + hour;
        }

        calcTimer(e, hour, min, sec);

    });
}

function calcTimer(e, hour, min, sec) {


    IDofInterval = setInterval(function () {
        e.innerText = hour + " : " + min + " : " + sec;
        if (sec > 58) {
            if (min > 58) {
                hour++
                min = '0';
                sec = '00';
                if (hour < 10) {
                    hour = "0" + hour;
                }
                if (min < 10) {
                    min = "0" + min;
                }
            } else {
                min++;
                sec = '00'
                if (min < 10) {
                    min = "0" + min;
                }
            }
        } else {
            sec++;
            if (sec < 10) {
                sec = "0" + sec;
            }
        }
        store();
    }, 1000);
}

function store() {
    window.localStorage.myitems = list.innerHTML;
}

function getValues() {
    let storedValues = window.localStorage.myitems;
    if (storedValues) {
        list.innerHTML = storedValues;
    }
}

getValues();
btnLoad();
loadTimer();