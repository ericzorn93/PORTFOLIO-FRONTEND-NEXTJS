const path = require(`path`);
const {
    createFilePath
} = require(`gatsby-source-filesystem`);

// Create Gatsby Pages
exports.createPages = ({
    graphql,
    actions
}) => {
    const {
        createPage
    } = actions
    const projectTemplate = path.resolve(`src/templates/project-template.tsx`)
    // Query for markdown nodes to use in creating pages.
    // You can query for whatever data you want to create pages for e.g.
    // products, portfolio items, landing pages, etc.
    // Variables can be added as the second function parameter
    return graphql(`
    query allUsers {
      zornwebdev {
        allProjects {
            id
            name
            description
            tags {
                id
                name
            }
        }
      }
    }
  `).then(result => {
        if (result.errors) {
            throw result.errors
        }

        // Create blog post pages.
        result.data.zornwebdev.allProjects.forEach(project => {
            const combinedName = project.name.split(' ').join('-').split('.').join('').toLowerCase();

            createPage({
                // Path for this page — required
                path: `${combinedName}`,
                component: projectTemplate,
                context: {
                    project: project,
                    // Add optional context data to be inserted
                    // as props into the page component..
                    //
                    // The context data can also be used as
                    // arguments to the page GraphQL query.
                    //
                    // The page "path" is always available as a GraphQL
                    // argument.
                },
            })
        })
    })
}