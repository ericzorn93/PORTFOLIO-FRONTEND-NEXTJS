const dotenv = require('dotenv');
const fetch = require(`isomorphic-unfetch`);
const { createHttpLink } = require(`apollo-link-http`);

dotenv.config();

module.exports = {
  siteMetadata: {
    title: `Eric Zorn Portfolio`,
    description: `Gatsby, TypeScript, Node, NestJS, GraphQL, and React portfolio.`,
    author: `@zornwebdev`,
  },
  plugins: [
    // BEGINNING OF GRAPHQL PLUGINS
    {
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: `github`,
        typeName: `GitHub`,
        createLink: () =>
          createHttpLink({
            uri: `https://api.github.com/graphql`,
            headers: {
              Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            },
            fetch,
          }),
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    // END OF GRAPHQL PLUGINS
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
