
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


