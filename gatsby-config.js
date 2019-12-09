module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'WPGraphQL',
        fieldName: 'wpgraphql',
        url: process.env.WORDPRESS_URL + '/graphql'
      }
    }
  ]
};
