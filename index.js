//initially hiding the content
document.querySelector(".link").style.visibility = "hidden"

//applying eventlistener to element
document.querySelector("span").addEventListener('click', action())

// toggle function run when clicked
function action() {
    return () => {
        document.querySelector(".link").style.visibility = "visible"
        document.querySelector(".font").remove()
        var ele1 = document.createElement("i")
        document.querySelector("#plus").appendChild(ele1)
        ele1.classList.add("font", "fas", "fa-minus", "fa-2x")

        document.querySelector("span").addEventListener("click", () => {
            document.querySelector(".link").style.visibility = "hidden"
            document.querySelector(".font").remove()
            var ele = document.createElement("i")
            document.querySelector("#plus").appendChild(ele)
            ele.classList.add("font", "fas", "fa-plus", "fa-2x")

            document.querySelector("span").addEventListener('click', action())
        })

    }
}

const age = document.querySelector('.age');
age.addEventListener('click', () => {
    let date = prompt("enter your birth date")
    let birthDate = new Date(date)
    let todayDate = new Date()
    let year = todayDate.getFullYear() - birthDate.getFullYear()

    if (todayDate.getMonth() < birthDate.getMonth()) {
        year--
        month = 12 - birthDate.getMonth()
    } else {
        month = todayDate.getMonth() - birthDate.getMonth()
    }

    if (todayDate.getDate() < birthDate.getDate()) {
        month--
        dating = 30 - birthDate.getDate()
    } else {
        dating = todayDate.getDate() - birthDate.getDate()
    }

    if (todayDate.getHours() < birthDate.getHours()) {
        dating--
        hours = 24 + (todayDate.getHours() - birthDate.getHours())
    } else {
        hours = todayDate.getHours() - birthDate.getHours()
    }

    if (todayDate.getMinutes() < birthDate.getMinutes()) {
        hours--
        minute = 60 + (todayDate.getMinutes() - birthDate.getMinutes())
    } else {
        minute = todayDate.getMinutes() - birthDate.getMinutes()
    }

    //this will show day and month of particular date.
    var Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]
    var nameOfMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var day = Days[birthDate.getDay()]
    var currentMonth = nameOfMonth[birthDate.getMonth()]
    document.querySelector(".footer1").innerHTML = ("DAY :" + day + "<br>" + " MONTH :" + currentMonth)

// this will show time seconds
    var seconds = 0;
    setInterval(function () {
        document.querySelector(".footer").innerHTML = ("your age till today is " + year + " years, " + month + " months, and " + dating + " days,"
            + hours + " hours," + minute + " minutes " + (seconds++) + " seconds")

        if (seconds == 60) {
            minute++
            seconds = 0
        }
        if (minute == 60) {
            hour++
            minute = 0
        }
    }, 1000);

});

// number to abbreviation string.
document.querySelector(".num2str").addEventListener("click", function convert(n) {
    n = parseInt(prompt("enter the number"))
        if (n < 1e3) {return n}
        if (n > 1e3 && n < 1e6) {return document.querySelector(".footer").innerHTML = (n/1e3).toFixed(1) + "k"}
        if (n > 1e6 && n < 1e9) {return document.querySelector(".footer").innerHTML = (n/1e6).toFixed(1) + "M"}
        if (n > 1e9 && n < 1e12) {return document.querySelector(".footer").innerHTML = (n/1e9).toFixed(1) + "B"}
        if (n > 1e12) {return document.querySelector(".footer").innerHTML = (n/1.e12).toFixed(1) + "T"}
    })




// function timeDiff(inpDate) {
//     var inputDate = new Date(inpDate).getTime()
//     var currDate = new Date().getTime()
//     if (inputDate > currDate) {
//         var diff1 = inputDate - currDate
//         console.log(Math.ceil(diff1 / 60000) + " minutes left.")
//     }
//     else if (inputDate < currDate) {
//         var diff2 = currDate - inputDate
//         console.log(Math.ceil(diff2 / 60000) + " minutes spend.")
//     }
// }
// timeDiff("2022-1-7 10:14:00")


// function checker(date) {
//     var enterDate = new Date(date)
//     var currentDate = new Date()
//     if (enterDate.setHours(0, 0, 0, 0) == currentDate.setHours(0, 0, 0, 0)) { return console.log("both dates " + enterDate + " & " + currentDate + " are same") }
//     else { return console.log("both dates " + enterDate + " & " + currentDate + " are not same") }
// }
// checker("2022-1-5")


// function daysInNextChristmas() {
//     let date = prompt("year,month,day")
//     let today = new Date(date)
//     var christmasYear = today.getFullYear()
//     if (today.getMonth() === 11 && today.getDate() > 25) {
//         christmasYear++
//     }
//     let christmasDate = new Date(christmasYear, 11, 25)
//     let daysInMillisec = 1000 * 60 * 60 * 24
//     const numberOfDays = Math.ceil((christmasDate.getTime() - today.getTime()) / daysInMillisec)
//     return alert("there are " + numberOfDays + " days left to next christmas")
// }




// //YYYY/MM/DD  HH:MM:SS
// function format() {
//     date = new Date()
//     return console.log(date.getFullYear() + "/" + ("00" + (date.getMonth() + 1)).slice(-2) + "/" + ("00" + date.getDate()).slice(-2) +
//         ":" + ("00" + date.getHours()).slice(-2) + ":" + ("00" + date.getMinutes()).slice(-2) + ":" + ("00" + date.getSeconds()).slice(-2))
// }
// format()


// var date1 = new Date("2022-1-12")
// var date2 = new Date("2021-1-12")
// if (date1 > date2) {
//     return console.log(date1 + " is later than " + date2)
// } else if (date1 < date2) {
//     return console.log(date2 + " is earlier than " + date1)
// }
// else { console.log("hello") }

// function task(given_Seconds) {
//     var date = new Date(given_Seconds*1000)
//     var hours = date.getUTCHours()
//     var minutes = date.getUTCMinutes()
//     var seconds = date.getUTCSeconds()
//     var timeString = hours.toString().padStart(2,"0") + ":" + minutes.toString().padStart(2,"0") + ":" + seconds.toString().padStart(2,"0")
//     return console.log(timeString)
// }
// task(186400)


// function format(date) {
//     date = new Date(date)
//     var hours = date.getHours()
//     var minute = date.getMinutes()
//     var seconds =  date.getSeconds()

//     if (hours > 12) {
//         return console.log((hours % 12).toString().padStart(2, "0") + ":" + minute.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0") + " P.M.")
//     } else {
//         return console.log((hours).toString().padStart(2, "0") + ":" + minute.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0") + " A.M.")
//     }
// }
// format("2020-3-4 14:30:12")

// function firstLastDate(date) {
//     var date = new Date(date)
//     var firstDate = new Date(date.getFullYear(), date.getMonth(),0)
//     var lastDate = new Date(date.getFullYear(), date.getMonth()+1,0)
    
//     console.log("first date is " + firstDate + " & last date is " + lastDate)
//     }
//     firstLastDate("2022-2-4")
