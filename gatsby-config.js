module.exports = {
  siteMetadata: {
    title: 'RanolP Wiki',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-preact',
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: './posts/',
      },
      __key: 'posts',
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: './posts',
      },
    },
    'gatsby-plugin-mdx-frontmatter',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/PostLayout.tsx')
        },
        remarkPlugins: []
      }
    },
  ],
};