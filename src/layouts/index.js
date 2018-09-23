import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// import Header from '../components/Header'
import './index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Hi, I\'m Liana Birke. I\'m a Front-End Web Developer based in the East Coast. I do art on rare occasions.' },
        { name: 'keywords', content: 'front-end, web, development, developer, frontend, front-end web developer, web developer, frontend web developer, freelance, graphic, design' },
      ]}
    />
    {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
