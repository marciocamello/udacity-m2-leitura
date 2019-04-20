module.exports = {
    dest: './build/static/docs',
    base: process.env.NODE_ENV === 'development' ? '/' : '/udacity-m2-readable/',
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Readable',
            description: 'A Shelf book area, to read your prefer books'
        },
        '/br/': {
            lang: 'pt-BR',
            title: 'Leitura',
            description: 'Uma estante de livros, para ler seus livros preferidos'
        }
    },
    themeConfig: {
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                sidebar: [
                    '/',
                    '/main',
                    '/features',
                    '/structure',
                    '/run',
                    '/test',
                    '/docs',
                ]
            },
            '/br/': {
                selectText: 'Idiomas',
                label: 'Português',
                sidebar: [
                    '/',
                    '/br/main',
                    '/br/features',
                    '/br/structure',
                    '/br/run',
                    '/br/test',
                    '/br/docs',
                ]
            }
        },
    }
}
