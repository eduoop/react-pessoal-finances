import { Item } from "../types/Item"

export const items: Item[] = [
    {
        date: new Date(2022, 9, 15),
        category: 'food',
        title: 'McDonalds',
        value: 32.12
    },
    {
        date: new Date(2022, 5, 15),
        category: 'food',
        title: 'Burguer King',
        value: 42.15
    },
    {
        date: new Date(2022, 6, 15),
        category: 'rent',
        title: 'Aluguel apt',
        value: 2300
    },
    {
        date: new Date(2022, 6, 18),
        category: 'salary',
        title: 'Salário ClickSoft',
        value: 4500
    },
]