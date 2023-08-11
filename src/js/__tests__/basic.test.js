import {
  cardAttack, character, obj, orderByProps,
} from '../skills.js';

test('cardAttack', () => {
  const skills = cardAttack(character);
  const expected = [{
    description: 'Двойной выстрел наносит двойной урон',
    icon: 'http://...',
    id: 8,
    name: 'Двойной выстрел',
  }, {
    description: 'Описание отсутствует',
    icon: 'http://...',
    id: 9,
    name: 'Нокаутирующий удар',
  }];
  expect(skills).toEqual(expected);
});

test('cardHero', () => {
  const orders = orderByProps(obj, ['мечник', '2']);
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: '2' },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(orders).toEqual(expected);
});
