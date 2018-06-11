const langs = [
    { title: 'English', path: '/home', matchPath: /^\/(home|resources|support)/ },
    { title: '简体中文', path: '/zh-Hans/', matchPath: /^\/zh-Hans/ },
];

docute.init({
    landing: 'landing.html',
    title: 'M Nav',
    repo: 'mdh-red/mdh.github.io',
    twitter: 'MenhoodT',
    'edit-link': '#',
    nav: {
        default: [
            {
                title: 'Home', path: '/home'
            },
            {
                title: 'Resources', path: '/resources'
            },
            {
                title: 'Q A', path: '/support'
            },
            {
                title: 'Languages', type: 'dropdown', items: langs
            }
        ],
        'zh-Hans': [
            {
                title: '首页', path: '/zh-Hans/'
            },
            {
                title: '资源', path: '/zh-Hans/resources'
            },
            {
                title: '问答', path: '/zh-Hans/support'
            },
            {
                title: '选择语言', type: 'dropdown', items: langs
            }
        ],
    },
    plugins: [
        docsearch({
            apiKey: '',
            indexName: 'M nav',
            tags: ['english', 'zh-Hans'],
            url: 'https://mdh.red'
        }),
        evanyou()
    ]
});


