require("dotenv").config({
        path: `.env.${
        process.env.NODE_ENV
    }`
})

module.exports = {
    siteMetadata: {
        title: 'e-commerce',
        description: 'fannys e-commerce project',
        siteUrl: 'https://fanny-e-commerce-project.herokuapp.com/',
        author: 'fanny Örte',
        menuLinks: [
            {
                label: 'Facial Products',
                linkPath: '/facial-products',
                key: 'facial-products'
            }, {
                label: 'Body Products',
                linkPath: '/body-products',
                key: 'body-products'
            }
        ]
    },
    plugins: [
        `gatsby-plugin-top-layout`, `gatsby-plugin-styled-components`, `gatsby-plugin-material-ui`, {
            resolve: '@chec/gatsby-source-chec',
            options: {
                publicKey: process.env.GATSBY_API_KEY

            }
        }
    ]
}
