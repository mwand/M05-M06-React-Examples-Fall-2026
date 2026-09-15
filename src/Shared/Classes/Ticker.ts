import { type ITicker } from "../types.ts";
import { nanoid } from "nanoid";

/** Ticker With Listeners (delegates)
 * This is a singleton class that creates a clock that ticks at a regular interval.
 * It has a list of listeners that it notifies on each tick.
 */

type Listener = () => void;

export default class Ticker implements ITicker {
  private _listeners: Listener[] = [];
  private _notifyAll() {
    this._listeners.forEach((eachListener) => {
      eachListener();
    });
  }

  public addListener(listener: Listener) {
    this._listeners.push(listener);
  }
  public removeListener(listener: Listener) {
    this._listeners = this._listeners.filter((eachListener) => eachListener !== listener);
  }

  get nListeners() {
    return this._listeners.length;
  }

  private _timer: number | undefined;
  private _interval: number;
  public id: string;

  public constructor(interval: number) {
    this.id = nanoid(4);
    this._interval = interval;
    // console.log(`Clock ${this.id} created; interval = ${this._interval}`);
    // the timer does NOT start itself 
    // this.start();
  }

  public start() {
    console.log(`Clock ${this.id} starting`);
    if (this._timer !== undefined) {
      clearInterval(this._timer);
    }
    this._timer = setInterval(() => {
      this._tick();
    }, this._interval);
  }

  private _tick() {
    this._notifyAll();
  }

  public stop() {
    console.log(`Clock ${this.id} stopping`);
    if (this._timer !== undefined) {
      clearInterval(this._timer);
      this._timer = undefined;
    }
  }
}
