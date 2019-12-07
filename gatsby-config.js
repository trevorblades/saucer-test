module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'WPGraphQL',
        fieldName: 'wpgraphql',
        url: 'https://psychiatric-chinchilla-lthqtt.saucer.dev/graphql'
      }
    }
  ]
};
