/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `ml5.js`,
		siteUrl: `https://ml5js.org`,
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-remark',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'markdown',
				path: `${__dirname}/src/markdown/`,
			},
		},
	],
};
