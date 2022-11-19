// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
modules:[
    '@nuxtjs/tailwindcss',

    //'@nuxtjs/axios'
    ],
    app: {
        head: {
            charset: 'utf-16',
            viewport:'width=500, initial-scale=1',
            title: 'Verified Transport',
            meta: [
                {
                    name: 'description', content: 'My amazing site.'
                }
            ],
            link: [
                {rel: 'icon', type: "image/x-icon", href: '/favicon.ico'}
            ]

},
        pageTransition: {name: 'page', mode: 'out-in'}

    }

})
