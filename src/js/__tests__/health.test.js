import { healthIndicator } from '../health.js';

test('health > 50 should return "healthy"', () => {
  const character = { name: 'Маг', health: 90 };
  expect(healthIndicator(character)).toBe('healthy');
});

test('health exactly 50 should return "wounded"', () => {
  const character = { name: 'Маг', health: 50 };
  expect(healthIndicator(character)).toBe('wounded');
});

test('health between 15 and 50 should return "wounded"', () => {
  const character = { name: 'Маг', health: 30 };
  expect(healthIndicator(character)).toBe('wounded');
});

test('health exactly 15 should return "wounded"', () => {
  const character = { name: 'Маг', health: 15 };
  expect(healthIndicator(character)).toBe('wounded');
});

test('health less than 15 should return "critical"', () => {
  const character = { name: 'Маг', health: 10 };
  expect(healthIndicator(character)).toBe('critical');
});

test('health 0 should return "critical"', () => {
  const character = { name: 'Маг', health: 0 };
  expect(healthIndicator(character)).toBe('critical');
});

test('health 14 should return "critical"', () => {
  const character = { name: 'Маг', health: 14 };
  expect(healthIndicator(character)).toBe('critical');
});

test('health 51 should return "healthy"', () => {
  const character = { name: 'Маг', health: 51 };
  expect(healthIndicator(character)).toBe('healthy');
});

test('health 100 should return "healthy"', () => {
  const character = { name: 'Маг', health: 100 };
  expect(healthIndicator(character)).toBe('healthy');
});
