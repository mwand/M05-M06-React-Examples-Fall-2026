export interface IClock {
  addListener(listener: () => void): void;
  removeListener(listener: () => void): void;
  start(): void;
  stop(): void;
  nListeners: number;
  id: string;
}
