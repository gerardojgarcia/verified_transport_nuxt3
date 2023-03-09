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
                    name: 'Verified Transport', content: "Local, last-minute package and specialty item delivery. When fulfillment has to be same day"
                }
            ],
            link: [
                {rel: 'icon', type: "image/x-icon", href: '/favicon.ico'}
            ],
            htmlAttrs: {
				lang: 'en',
			  },

},

    
       

    },
    nitro: {
		compressPublicAssets: true,
		prerender: {
			crawlLinks: true,
		}
	},

})
