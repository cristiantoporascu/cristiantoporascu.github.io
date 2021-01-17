const path = require('path');

exports.createPages = ({graphql, actions}) => {
    const { createPage } = actions;
    const indexTemplate = path.resolve('src/templates/index-page.js');

    return graphql (`
            query {
                allMarkdownRemark {
                    edges {
                        node {
                            frontmatter {
                                path
                            }
                        }
                    }
                }
            }
        `).then(res => {
        if(res.errors) {
            res.errors.forEach((e) => console.errors(e.toString()));
            return Promise.reject(res.errors);
        }

        res.data.allMarkdownRemark.edges.forEach( ({node}) => {
            createPage({
                path: node.frontmatter.path,
                component: indexTemplate
            })
        })
    })
}