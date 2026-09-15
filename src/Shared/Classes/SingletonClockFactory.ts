import { type IClock } from "../types";
import { nanoid } from "nanoid";

/** Clock With Listeners (delegates)
 * This is a singleton class that creates a clock that ticks at a regular interval.
 * It has a list of listeners that it notifies on each tick.
 */

type Listener = () => void;

class Clock implements IClock {
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

  private _timer: NodeJS.Timeout;
  private _interval: number;
  public id: string;

  public constructor(interval: number) {
    this.id = nanoid(4);
    this._interval = interval;
    console.log(`Clock ${this.id} created; interval = ${this._interval}`);
    this.start();
  }

  public start() {
    console.log(`Clock ${this.id} starting`);
    this._timer = setInterval(() => {
      this._tick();
    }, this._interval);
  }

  private _tick() {
    // this.time++;
    this._notifyAll();
  }

  public stop() {
    console.log(`Clock ${this.id} stopping`);
    // console.log('Clock stopped, this._interval', this._interval)
    clearInterval(this._timer);
  }
}

export default class SingletonClockFactory {
  private static _instance: Clock | null = null;
  public static getInstance(interval: number) {
    if (SingletonClockFactory._instance === null) {
      SingletonClockFactory._instance = new Clock(interval);
    }
    return SingletonClockFactory._instance;
  }
}
