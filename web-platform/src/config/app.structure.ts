export const breadcrumb = {
    home: [
        { flag: 'Home', active: true }
    ],
    series: [
        { flag: 'Home', route: '/' },
        { flag: 'Series', active: true }
    ],
    infoSerie: [
        { flag: 'Home', route: '/', active: false },
        { flag: 'Series', route: '/series', active: false }
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
    }
]

export const menuUnlogged = [
    {
        flag: 'Home',
        link: '/'
    },
    {
        flag: 'Login',
        link: '/login'
    }
]