// задание 1

export const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
};

export function orderByProps(char, [name, level]) {
    const card = [];
    const sortArray = [];

    for (const prop in char) {
        if (char[prop] === name) {
            card.push({ key: 'name', value: name });
        }
        if (char[prop] === Number(level)) {
            card.push({ key: 'level', value: level });
        }
        if (char[prop] !== name & char[prop] !== Number(level)) {
            sortArray.push({ key: prop, value: char[prop] });

            sortArray.sort((x, y) => x.key.localeCompare(y.key));
        }
    }
    card.push(...sortArray);
    return card;
}

orderByProps(obj, ['мечник', '2']);

// задание 2

export const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [{
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон',
        },
        {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...',
            // <- обратите внимание, описание "засекречено"
        },
    ],
};

export function cardAttack(char) {
    const card = [];

    const { special } = char;

    for (const e in special) {
        const { id, name, description = "Описание отсутствует", icon } = special[e];
        card.push({
            id,
            name,
            description,
            icon,
        });
    }
    return card;
}

cardAttack(character);