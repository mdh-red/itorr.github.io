
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
            hashover()
            ]
            
    
});



function hashover () {
    return function (context) {
        context.event.on('content:updated', function () {
            console.log('content:updated');
            for (let i = 0; i < document.querySelectorAll('#comment').length; i++) {
                document.querySelectorAll('#comment')[i].addEventListener('click', function () {
                    var pl=document.getElementById('comment').innerHTML;
                    pl='<script src="https://api.menhood.wang/hashover/comments.php"></script><noscript>请允许Javascript运行以加载评论</noscript>';
                });
            }
        });
    };
}





