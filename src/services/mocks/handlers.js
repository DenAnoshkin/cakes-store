import { delay, http, HttpResponse } from 'msw';

export const handlers = [
    http.get( '/api/posts', async () => {
        await delay( 1500 );
        return HttpResponse.json( [
            {
                id: 1,
                name: "Кремовый замок",
                description: "Нежный крем любого цвета на выбор, вафельная основа",
                price: 150,
                count: 0,
            },
            {
                id: 2,
                name: "Малиновый рай",
                description: "Воздушный крем, темная основа и ягода малины",
                price: 150,
                count: 0,
            },
            {
                id: 3,
                name: "Фейерверк",
                description: "Разноцветные крем, с бисквитной основой",
                price: 150,
                count: 0,
            },
            {
                id: 4,
                name: "Шоколадный мир",
                description: "Ореховая стружка, нежный крем и шоколадная основа",
                price: 150,
                count: 0,
            },
            {
                id: 5,
                name: "Слезы дракона",
                description: "Нежный крем любого цвета на выбор, вафельная основа",
                price: 150,
                count: 0,
            },
            {
                id: 6,
                name: "Летняя фантазия",
                description: "Украшения в форме сердец, для любимого человека",
                price: 150,
                count: 0,
            },
        ] );
    } ),
];
