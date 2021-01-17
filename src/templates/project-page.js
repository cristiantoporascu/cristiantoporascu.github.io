import React from 'react';
import Helmet from 'react-helmet'

const IndexmPageTemplate = ({data}) => {
    const {markdownRemark: dataMD} = data;

    return (
        <div>
            <h1>{dataMD.frontmatter.title}</h1>
            <div>Hello cichita</div>
        </div>
    )
}

export default Template;

export const pageQuery = graphql `
    query ProjectPageTemplate($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
            }
        }
    }
`