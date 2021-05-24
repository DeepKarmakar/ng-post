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
            timeStamp: 'Mon May 24 2021 08:26:52 GMT+0530',
            comment: 'Some dummy comment',
            vote: {
                upVote: 1,
                downVote: 0,
                isUpvote: null
            }
        },
        {
            userId: 1,
            name: 'name 2',
            image: 'https://place-hold.it/70x70/',
            timeStamp: 'Mon May 24 2021 08:26:52 GMT+0530',
            comment: 'Lorem ipsum',
            vote: {
                upVote: 10,
                downVote: 2,
                isUpvote: null
            },
            childComments: [
                {
                    userId: 1,
                    name: 'name 3',
                    image: 'https://place-hold.it/70x70/',
                    timeStamp: 'Mon May 24 2021 08:26:52 GMT+0530',
                    comment: 'Lorem ipsum dolor sit amet consectetur',
                    vote: {
                        upVote: 5,
                        downVote: 40,
                        isUpvote: null
                    }
                },
                {
                    userId: 1,
                    name: 'name 4',
                    image: 'https://place-hold.it/70x70/',
                    timeStamp: 'Mon May 24 2021 08:26:52 GMT+0530',
                    comment: 'Dummy content',
                    vote: {
                        upVote: 14,
                        downVote: 1,
                        isUpvote: null
                    }
                }
            ]
        }
    ]
}