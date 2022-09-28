/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import gsap from "gsap"
import "pace-js"
import "pace-js/themes/yellow/pace-theme-minimal.css"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="external">
      <div className="container">
        
      </div>
    </div>
  )
}

// var topRight = gsap.timeline();
// var topLeft = gsap.timeline();


// function heroAbout(){
//   topRight.to(".top-right",{ x: 45+'vw',});
//   console.log("rightMoved")
//   topLeft.to(".top-left", { y: -35+'vh',});
//   topLeft.to(".top-left", { x: -50+'vw',});
  
  
// }

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
