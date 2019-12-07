import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const Head = ({title}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (<Helmet 
    title={`${title} | ${data.site.siteMetadata.title}`} >
    <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css"></link>
    </Helmet>)
}

export default Head
