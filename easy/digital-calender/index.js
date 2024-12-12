document.addEventListener("DOMContentLoaded", function () {
    var monthDOM = document.getElementById("month-name");
    var dayDOM = document.getElementById("day-name");
    var dateDOM = document.getElementById("day-number");
    var yearDOM = document.getElementById("year");
    var date = new Date();
    monthDOM.textContent = date.toLocaleString("en", {
        month: "long",
    });
    dayDOM.textContent = date.toLocaleString("en", {
        weekday: "long",
    });
    dateDOM.textContent = String(date.getDate());
    yearDOM.textContent = String(date.getFullYear());
});
