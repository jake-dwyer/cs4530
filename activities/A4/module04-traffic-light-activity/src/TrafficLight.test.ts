import { TrafficLight, Color } from './betterTrafficLight';

describe('tests for timer', () => {
  test('after 17, time should be 16', () => {
    const light = new TrafficLight();
    light.setTime(17);
    light.tick();
    expect(light.timeLeft).toBe(16);
  });

  test('after 1, time should be 15', () => {
    const light = new TrafficLight();
    light.setTime(1);
    light.tick();
    expect(light.timeLeft).toBe(15);
  });
});

function testcolor(color: Color, time: number, expectedColor: Color) {
  test(`after ${time}, ${color} should change to ${expectedColor}`, () => {
    const light = new TrafficLight();
    light.setTime(time);
    light.color = color;
    light.tick();
    expect(light.getColor()).toEqual(expectedColor);
  });
}

describe('tests for colors', () => {
  testcolor('red', 7, 'red');
  testcolor('red', 1, 'green');
  testcolor('green', 1, 'yellow');
  testcolor('yellow', 1, 'red');
});

describe('extra tests for coverage', () => {
  test('constructor throws if no states are provided', () => {
    expect(() => new TrafficLight([])).toThrow("Traffic light must have a state.");
  });

  test('invalid color assignment throws', () => {
    const light = new TrafficLight();
    expect(() => {
      light.color = 'blue';
    }).toThrow("Invalid color: blue");
  });

  test('getters return expected values', () => {
    const light = new TrafficLight();
    expect(light.color).toBe('red'); // getter for color
    expect(light.getCurrentState().color).toBe('red'); // state object
    expect(light.getTimeLeft()).toBe(20); // default timeLeft
  });
});
