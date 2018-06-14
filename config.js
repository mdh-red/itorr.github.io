
docute.init({
    home: 'home.md',
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
            evanyou(),

            disqus({
              shortname: 'mdh-red' // 把这个替换为你的 disqus 站点缩略名
                })
            ]
            
    
});