import { healthIndicator } from './js/health.js';

// Пример использования функции
const characters = [
  { name: 'Маг', health: 90 },
  { name: 'Лучник', health: 40 },
  { name: 'Воин', health: 10 },
];

characters.forEach((character) => {
  const status = healthIndicator(character);
  console.log(`${character.name}: ${character.health} HP - ${status}`);
});
