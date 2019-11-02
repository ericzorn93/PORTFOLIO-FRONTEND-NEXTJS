const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// Create Gatsby Pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve(`src/templates/project-template.tsx`);
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
    query github {
      github {
        viewer {
          name
          repositories(last: 100) {
            nodes {
              id
              name
              description
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog post pages.
    result.data.github.viewer.repositories.nodes.forEach(repo => {
      const combinedName = repo.name
        .split(' ')
        .join('-')
        .split('.')
        .join('')
        .toLowerCase();

      createPage({
        // Path for this page — required
        path: `${combinedName}`,
        component: projectTemplate,
        context: {
          project: repo,
        },
      });
    });
  });
};
