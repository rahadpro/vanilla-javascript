"use strict";

// Function: $ (selector function for  single or multiple elements )
const $ = (
  selector: string,
  areAll: boolean = false
): Element | NodeListOf<Element> | null => {
  return areAll
    ? document.querySelectorAll(selector)
    : document.querySelector(selector);
};

// Function: Clock
function Clock(this: {
  date: Date;
  hours: string | number;
  minutes: string | number;
  seconds:  string | number;
  ampm: string;
}) {
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

// Interface for Digital Clock
interface ClockProperties {
  ampmDOM: HTMLSpanElement;
  hoursDOM: HTMLSpanElement;
  minutesDOM: HTMLSpanElement;
  secondsDOM: HTMLSpanElement;
  updateTime: Function;
  clock: {
    ampm: string,
    hours: string,
    minutes: string,
    seconds: string
  }
}
// Function Digital Clock 
function DigitalClock(this: ClockProperties): void {
  this.ampmDOM =  $(".ampm span") as HTMLSpanElement;
  this.hoursDOM = $(".hours span:first-child") as HTMLSpanElement;
  this.minutesDOM =  $(".minutes span:first-child") as HTMLSpanElement;
  this.secondsDOM =  $(".seconds span:first-child") as HTMLSpanElement;

  this.updateTime = (): void => {
    this.clock = new Clock();
    this.ampmDOM.textContent = this.clock.ampm;
    this.hoursDOM.textContent = this.clock.hours;
    this.minutesDOM.textContent = this.clock.minutes;
    this.secondsDOM.textContent = this.clock.seconds;
  };
}

// Function: App 
function App() {
  // Setup Clock
  const digitalClock = new DigitalClock();
  digitalClock.updateTime();
  setInterval(function () {
    digitalClock.updateTime();
  }, 1000);
}

// Document load event
document.addEventListener("DOMContentLoaded", function () {
  new App();
});

