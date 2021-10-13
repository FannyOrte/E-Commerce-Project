exports.createPages = async function ({actions, graphql}) {
    const {data} = await graphql(`
      query {
        allChecCategory {
            nodes {
              slug
              products {
                id
                name
                price {
                  formatted_with_code
                }
                image {
                  url
                }
              }
            }
          }
      }
    `)
    data.allChecCategory.nodes.forEach(node => {
        actions.createPage({path: node.slug, component: require.resolve(`./src/components/ProductPage/ProductPage.component.tsx`), context: node})
    })
}
