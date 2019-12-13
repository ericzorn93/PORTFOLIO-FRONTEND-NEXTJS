const path = require(`path`);
// const { createFilePath } = require(`gatsby-source-filesystem`);

// Create Gatsby Pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const githubProjectTemplate = path.resolve(
    `src/templates/github-project-template.tsx`
  );
  const contentfulProjectTemplate = path.resolve(
    `src/templates/contentful-project-template.tsx`
  );

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
          about {
            json
          }
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
      const regularName = generateRegularName(repo.name);

      createPage({
        // Path for this page — required
        path: `/github/${combinedName}`,
        component: githubProjectTemplate,
        context: {
          project: {
            ...repo,
            regularName,
          },
        },
      });
    });

    // Create Contentful Pages
    contentfulData.nodes.forEach(contentfulProject => {
      const combinedName = combineSplitName(contentfulProject.name);

      createPage({
        // Path for this page — required
        path: `/contentful/${combinedName}`,
        component: contentfulProjectTemplate,
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

/**
 * @param {String} name
 * @description
 * Splits the name on a hyphen and then generates a string with spaces.
 * Also splits on the capital letter.
 */
function generateRegularName(name) {
  if (!name) {
    name = '';
  }

  let spacedName = name.split('-').join(' ');
  spacedName = spacedName
    .replace(/([A-Z]+)/g, ',$1')
    .replace(/^,/, ' ')
    .replace(/,/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();

  return spacedName;
}
