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
                    name: 'Verified Transport', content: "San Bernardino's first choice for same-day, cargo van delivery."
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
