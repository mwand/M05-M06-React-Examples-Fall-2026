import { Clock } from "./SingletonClockFactory";

function main() {
  const ticker = new Clock(1000);
  let time = 0;
  ticker.addListener(() => {
    time++;
    console.log("Tick", time);
  });

  ticker.start();
  // after 5 seconds, go to step2
  setTimeout(() => {
    ticker.stop();
    step2(ticker, time);
  }, 5000);
}

function step2(ticker, time) {
  console.log("starting step2");
  // start again
  ticker.start();
  // after 5 seconds, stop the Ticker
  setTimeout(() => {
    step3(ticker, time);
  }, 5000);
}

function step3(ticker, time) {
  ticker.stop();
  console.log("reached end of step3");
}
main();
