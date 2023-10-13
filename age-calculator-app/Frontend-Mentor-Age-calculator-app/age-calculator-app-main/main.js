let day = document.querySelector(`[id="day"]`)
let month = document.querySelector(`[id="month"]`)
let years = document.querySelector(`[id="year"]`)
let form = document.getElementsByTagName("form")[0]

console.log(form);

let outDay = document.querySelector(`[class="out-days"]`)
let outmonth = document.querySelector(`[class="out-months"]`)
let outyears = document.querySelector(`[class="out-year"]`)

let dateNow = new Date();
let myyears;
let mydays;
let mymonth;
function clcAge(day, month, years) {
    let barthDay = new Date(`${month}/${day}/${years}`)
    let diff = new Date(dateNow - barthDay);

    myyears = parseInt(diff.getTime() / 1000 / 60 / 60 / 24 / 365);
    mydays = parseInt(diff.getTime() / 1000 / 60 / 60 / 24);
    mymonth = parseInt(diff.getTime() / 1000 / 60 / 60 / 24 / 12);
    outDay.innerHTML = mydays;
    outmonth.innerHTML = mymonth;
    outyears.innerHTML = myyears;
}


form.onsubmit = function (e) {
    e.preventDefault();
    clcAge(day.value, month.value, years.value);
}

