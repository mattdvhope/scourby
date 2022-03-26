require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { SITE_URL, API_URL, COSMIC_BUCKET, COSMIC_READ_KEY, PIXEL_ID, GTM_ID } = process.env;


module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    siteUrl: SITE_URL
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: GTM_ID,
        includeInDevelopment: false,
        enableWebVitalsTracking: true,
      }
    },
    {
      resolve: 'gatsby-source-cosmicjs',
      options: {
        bucketSlug: COSMIC_BUCKET,
        objectTypes: ['categories', 'posts', 'products-with-subproducts', 'global'],
        apiAccess: {
          read_key: COSMIC_READ_KEY
        },
        localMedia: true
      }
    },
    {
      resolve: `@hutsoninc/gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: PIXEL_ID,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-postcss",
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#B6895D`,
        theme_color: `#B6895D`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // You can have multiple instances of this plugin to create indexes with
    // different names or engines. For example, multi-lingual sites could create
    // an index for each language.
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: "pages",
        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: "flexsearch",
        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        //
        // Note: Only the flexsearch engine supports options.
        engineOptions: {
          profile: "speed",
          // Partial search moving forward
          tokenize: "forward",
        },
        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
          query CPosts {
            allCosmicjsPosts {
              edges {
                node {
                  id
                  title
                  slug
                  content
                  metadata {
                    image {
                      local {
                        childImageSharp {
                          gatsbyImageData(
                            layout: FULL_WIDTH,
                            placeholder: BLURRED,
                            aspectRatio: 1.3
                          )
                        }
                      }
                    }
                    subtitle
                    youtubeurl
                  }
                }
              }
            }
          }
        `,
        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: "slug",
        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ["title", "subtitle", "content"],
        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: ["slug", "title", "subtitle", "content", "image", "id"],
        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.allCosmicjsPosts.edges.map(({ node }) => {
            return {
              title: node.title,
              content: node.content,
              slug: node.slug,
              image: node.metadata.image,
              id: node.id,
              subtitle: node.metadata.subtitle,
            }
          }),
      },
    }, // "gatsby-plugin-local-search"
  ],
}
