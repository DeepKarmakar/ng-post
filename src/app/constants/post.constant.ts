export const posts = [
    {
        id: 1,
        title: 'post 1',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae quod eaque reiciendis quo, laudantium nihil vel. Tempora corporis debitis minima necessitatibus odit culpa pariatur asperiores iusto! Quae quia provident doloribus.'
    },
    {
        id: 2,
        title: 'post 2',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae quod eaque reiciendis quo, laudantium nihil vel. Tempora corporis debitis minima necessitatibus odit culpa pariatur asperiores iusto! Quae quia provident doloribus.'
    }
];

export const post:any = {
    id: 1,
    title: 'post 1',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae quod eaque reiciendis quo, laudantium nihil vel. Tempora corporis debitis minima necessitatibus odit culpa pariatur asperiores iusto! Quae quia provident doloribus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae quod eaque reiciendis quo, laudantium nihil vel. Tempora corporis debitis minima necessitatibus odit culpa pariatur asperiores iusto! Quae quia provident doloribus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae quod eaque reiciendis quo, laudantium nihil vel. Tempora corporis debitis minima necessitatibus odit culpa pariatur asperiores iusto! Quae quia provident doloribus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae quod eaque reiciendis quo, laudantium nihil vel. Tempora corporis debitis minima necessitatibus odit culpa pariatur asperiores iusto! Quae quia provident doloribus.',
    comments: [
        {
            userId: 1,
            name: 'name 1',
            image: 'https://place-hold.it/70x70/',
            timeStamp: 12,
            comment: 'laudantium nihil vel',
        },
        {
            userId: 1,
            name: 'name 2',
            image: 'https://place-hold.it/70x70/',
            timeStamp: 12,
            comment: 'laudantium nihil vel',
            childComments: [
                {
                    userId: 1,
                    name: 'name 3',
                    image: 'https://place-hold.it/70x70/',
                    timeStamp: 12,
                    comment: 'laudantium nihil vel',
                },
                {
                    userId: 1,
                    name: 'name 4',
                    image: 'https://place-hold.it/70x70/',
                    timeStamp: 12,
                    comment: 'laudantium nihil vel',
                }
            ]
        }
    ]
}