const path = require("path")

exports.onCreateWebpackConfig = ({ actions, plugins, stage }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src"),
        path: require.resolve("path-browserify"),
      },
      fallback: {
        fs: false,
      },
    },
  })
  if (stage === "build-javascript" || stage === "develop") {
    actions.setWebpackConfig({
      plugins: [plugins.provide({ process: "process/browser" })],
    })
  }
}

// exports.createSchemaCustomization = ({ actions: { createTypes, printTypeDefinitions } }) => {
//   printTypeDefinitions({ path: './typeDefs.txt' })
//   const typeDefs = `
//     type StrapiPost implements Node @derivedTypes @dontInfer {
//       title: String
//       slug: String
//       category: StrapiPostCategory
//       description: String
//       price: Int
//       dealerUrl: String
//       published_at: Date @dateformat
//       created_at: Date @dateformat
//       updated_at: Date @dateformat
//       specifications: [StrapiPostSpecifications]
//       image: StrapiPostImage
//       relatedProducts: [StrapiPostRelatedProducts]
//       strapiId: Int
//     }

//   `
//   createTypes(typeDefs)
// }
