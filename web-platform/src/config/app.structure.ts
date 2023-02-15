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
        link: '/series'
    },
    {
        flag: 'Movies',
        link: '/movies'
    },
    {
        flag: 'Games',
        link: '/games'
    }
]

export const menuUnlogged = [
    {
        flag: 'Home',
        link: '/'
    },
    {
        flag: 'Series',
        link: '/series'
    },
    {
        flag: 'Movies',
        link: '/movies'
    },
    {
        flag: 'Games',
        link: '/games'
    },
    {
        flag: 'Login',
        link: '/login'
    }
]