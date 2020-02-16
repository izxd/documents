module.exports = {
    base: '/documents/',
    title: '他山之东',
    description: 'itdong',
    head: [
        ['link', { rel: 'icon', href: '/avator.png' }]
    ],
    themeConfig: {
        repo: 'izxd/documents',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about/' },
            { text: 'External', link: 'https://www.baidu.com' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Asia', items: [
                        { text: 'Chinese', link: '/language/chinese/' },
                        { text: 'Japanese', link: '/language/japanese/' }
                    ]}
                ]
            },
        ],
        sidebar: {
            '/css/': [
                '',     /* /foo/ */
                'css1',  /* /foo/one.html */
                'css2'   /* /foo/two.html */
            ],

            '/javascript/': [
                '',      /* /bar/ */
                'js1', /* /bar/three.html */
                'js2'   /* /bar/four.html */
            ],
            // fallback
            '/': [
                '',        /* / */
                '/about/',
                '/css/',
                '/javascript/'
            ]
        },
        sidebarDepth: 2,
        displayAllHeaders: true,
        activeHeaderLinks: false,
        lastUpdated: 'Last Updated',
    }
}