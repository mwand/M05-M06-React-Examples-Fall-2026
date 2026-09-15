// An ITicker is like a clock, but it doesn't keep track of the time.
// It just calls each of its listeners at regular intervals.
// The interval is a constructor argument

export interface ITicker {
  addListener(listener: () => void): void;
  removeListener(listener: () => void): void;
  start(): void;
  stop(): void;
  nListeners: number;
  id: string;
}
