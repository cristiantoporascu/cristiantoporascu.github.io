module.exports = {
    siteMetadata: { 
        title: 'Cristian Toporascu\'s portfolio'
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-remark',

        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages`,
            }
        }
    ]
}