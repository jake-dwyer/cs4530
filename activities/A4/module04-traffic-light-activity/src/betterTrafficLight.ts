/**
 * Generalizes traffic light states (e.g., "green", "yellow", "red") into broader categories.
 */
export interface TrafficLightState {
  color: string;
  duration: number;
}

/** Keep backward compatibility with tests */
export type Color = 'red' | 'green' | 'yellow';

/**
 * TrafficLight class that handles cycling through the various states.
 */
export class TrafficLight {
  private _color: string;

  public timeLeft: number;

  private _states: TrafficLightState[];
  
  private _currentIndex: number;

  constructor(
    states: TrafficLightState[] = [
      { color: "red", duration: 20 },
      { color: "green", duration: 15 },
      { color: "yellow", duration: 5 },
    ]
  ) {
    if (states.length === 0) {
      throw new Error("Traffic light must have a state.");
    }
    this._states = states;
    this._currentIndex = 0;
    this._color = states[0].color;
    this.timeLeft = states[0].duration;
  }

  /** Getter for color */
  public get color(): string {
    return this._color;
  }

  /**
   * Setter for color, updates the current index and timeLeft accordingly.
   */
  public set color(c: string) {
    const index = this._states.findIndex(s => s.color === c);
    if (index === -1) {
      throw new Error(`Invalid color: ${c}`);
    }
    this._currentIndex = index;
    this._color = this._states[index].color;
  }

  /** Simulate a second passing. */
  public tick() {
    if (this.timeLeft === 1) {
      this._currentIndex = (this._currentIndex + 1) % this._states.length;
      const next = this._states[this._currentIndex];
      this._color = next.color;
      this.timeLeft = next.duration;
    } else {
      this.timeLeft -= 1;
    }
  }

  /** Return the whole object (color & duration). */
  public getCurrentState(): TrafficLightState {
    return this._states[this._currentIndex];
  }

  /** Get the color of the traffic light based on the current state. */
  public getColor(): string {
    return this._color;
  }

  /** Get the remaining time in the current state. */
  public getTimeLeft(): number {
    return this.timeLeft;
  }

  /** Override the timer for the current state. */
  public setTime(t: number) {
    this.timeLeft = t;
  }
}

/**
 * Default traffic light (red:20, green:15, yellow:5)
 * Old tests should work as is.
 */
export const defaultTrafficLight = new TrafficLight();
