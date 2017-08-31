module.exports = {
	/*
  	** Headers of the page
  	*/
  	head: {
		title: 'rmjuncosa.com',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: ' ' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fira+Mono|Montserrat:200,300,300i,400,400i,600,600i,700,700i' }
		]
	},
	/*
	** Customize the progress-bar color
 	*/
	loading: { 
		color: '#4CAF50',
		height: '4px'
	},
	css: [
		{ src: 'tinyreset/tinyreset.css', lang: 'css' },
		{ src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' }
	],
	/*
	** Build configuration
	*/
	build: {
		/*
		** Run ESLINT on save
		*/
		extend (config, ctx) {
			if (ctx.dev && ctx.isClient) {
				config.module.rules.push({
			  		enforce: 'pre',
			  		test: /\.(js|vue)$/,
			  		loader: 'eslint-loader',
			  		exclude: /(node_modules)/
				})
		  	}
		}
  	}
}
