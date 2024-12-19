"use strict";
// Function: $ (selector function for  single or multiple elements )
var $ = function (selector, areAll) {
    if (areAll === void 0) { areAll = false; }
    return areAll
        ? document.querySelectorAll(selector)
        : document.querySelector(selector);
};
// Function: Clock
function Clock() {
    this.date = new Date();
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    this.ampm = this.hours > 11 ? "pm" : "am";
    this.hours =
        this.hours > 12 ? this.hours - 12 : !this.hours ? 12 : this.hours;
    this.hours = this.hours < 10 ? "0" + this.hours : this.hours.toString();
    this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes.toString();
    this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds.toString();
}
// Function Digital Clock 
function DigitalClock() {
    var _this = this;
    this.ampmDOM = $(".ampm span");
    this.hoursDOM = $(".hours span:first-child");
    this.minutesDOM = $(".minutes span:first-child");
    this.secondsDOM = $(".seconds span:first-child");
    this.updateTime = function () {
        _this.clock = new Clock();
        _this.ampmDOM.textContent = _this.clock.ampm;
        _this.hoursDOM.textContent = _this.clock.hours;
        _this.minutesDOM.textContent = _this.clock.minutes;
        _this.secondsDOM.textContent = _this.clock.seconds;
    };
}
// Function: App 
function App() {
    // Setup Clock
    var digitalClock = new DigitalClock();
    digitalClock.updateTime();
    setInterval(function () {
        digitalClock.updateTime();
    }, 1000);
}
// Document load event
document.addEventListener("DOMContentLoaded", function () {
    new App();
});
