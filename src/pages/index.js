import React from 'react'
import Link from 'gatsby-link'
import ContactBlock from '../components/ContactBlock';

const IndexPage = () => (
  <div>
    <ContactBlock />
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
