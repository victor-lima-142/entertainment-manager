export const breadcrumb = {
    home: [
        { flag: 'Home', active: true }
    ],
    series: [
        { flag: 'Home', route: '/' },
        { flag: 'Series', active: true }
    ],
    games: [
        { flag: 'Home', route: '/' },
        { flag: 'Games', active: true }
    ],
    movies: [
        { flag: 'Home', route: '/' },
        { flag: 'Movies', active: true }
    ]
}

export const menuLogged = [
    {
        flag: 'Home',
        link: '/'
    },
    {
        flag: 'Series',
        link: '/list/series/'
    },
    {
        flag: 'Movies',
        link: '/list/movies/'
    },
    {
        flag: 'Games',
        link: '/list/games/'
    }
]

export const menuUnlogged = [
    {
        flag: 'Home',
        link: '/'
    },
    {
        flag: 'Series',
        link: '/list/series/'
    },
    {
        flag: 'Movies',
        link: '/list/movies/'
    },
    {
        flag: 'Games',
        link: '/list/games/'
    },
    {
        flag: 'Login',
        link: '/login'
    }
]