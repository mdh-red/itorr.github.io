const langs = [
    { title: '简体中文', path: '/home', matchPath: /^\/(home|resources|support)/ },
];

docute.init({
    landing: 'landing.html',
    title: 'M Nav',
    twitter: 'MenhoodT',
    nav: {
        default: [
            {
                title: '首页', path: '/home'
            },
            {
                title: '资源', path: '/resources'
            },
            {
                title: '问答', path: '/support'
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


