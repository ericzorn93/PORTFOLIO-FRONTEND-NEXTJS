const path = require(`path`);
// const { createFilePath } = require(`gatsby-source-filesystem`);

// Create Gatsby Pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve(`src/templates/project-template.tsx`);

  return graphql(`
    query githubAndContentful {
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
      allContentfulProject(limit: 100) {
        nodes {
          name
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // GitHub Data
    const githubData = result.data.github;

    // Contentful data
    const contentfulData = result.data.allContentfulProject;

    // Create blog post pages from github
    githubData.viewer.repositories.nodes.forEach(repo => {
      const combinedName = combineSplitName(repo.name);

      createPage({
        // Path for this page — required
        path: `${combinedName}`,
        component: projectTemplate,
        context: {
          project: repo,
        },
      });
    });

    // Create Contentful Pages
    contentfulData.nodes.forEach(contentfulProject => {
      const combinedName = combineSplitName(contentfulProject.name);

      createPage({
        // Path for this page — required
        path: `${combinedName}`,
        component: projectTemplate,
        context: {
          project: contentfulProject,
        },
      });
    });
  });
};

/**
 * @param {String} name
 * @description Returns a split form of the combined page name
 */
function combineSplitName(name) {
  if (!name) {
    name = '';
  }

  const combinedName = name
    .split(' ')
    .join('-')
    .split('.')
    .join('')
    .toLowerCase();

  return combinedName;
}
