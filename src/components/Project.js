import React from 'react';

export default function Template({data}) {
  // Object deconstruction
  const {markdownRemark: contactInfo} = data;
  // Same as:
  // const contactInfo = data.markdownRemark;
  return (
    <div>
     <h1>{post.frontmatter.title}</h1>
    </div>
  )
}

export const contactInfoQuery = graphql`
  query ContactInfoByPath($path: String!) {
    markdownRemark(frontmatter: { path: {eq: $path} }) {
      html
      frontmatter {
        title,
        path
      }
    }
  }
`