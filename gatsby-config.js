module.exports = {
  siteMetadata: {
    title: `Gatsby starter site with Kentico Cloud`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-kentico-cloud`,
      options: {
        deliveryClientConfig: {
          projectId: process.env.KENTICO_API,
        },
        languageCodenames: [
          `default`,
          `de-DE`,
          `cs-CZ`,
        ]
      }
    }
  ]
};
