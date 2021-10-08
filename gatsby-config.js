require("dotenv").config({
        path: `.env.${
        process.env.NODE_ENV
    }`
})

module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [`gatsby-plugin-styled-components`, `gatsby-plugin-material-ui`]
}
