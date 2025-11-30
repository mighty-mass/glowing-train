module.exports = {
	globDirectory: 'static/',
	globPatterns: [
		'**/*.{css,woff2,png,svg,json,js}'
	],
	swDest: 'static/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	runtimeCaching: [
		{
			urlPattern: ({ request }) => request.mode === 'navigate',
			handler: 'NetworkFirst',
			options: {
				cacheName: 'pages',
				expiration: {
					maxEntries: 50,
				},
			},
		},
	],
};