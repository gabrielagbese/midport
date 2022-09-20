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

        <div className="nav">
          <h2 className="text">ABOUT</h2>
          <h2 className="text">WORK</h2>
          <h2 className="text">CONTA</h2>
        </div>

        <div className="content">

          <div className="grad_left"></div>
          <div className="box_wrapper">
            {/* <div className="inner"><p className="text">- ===  =---3</p></div> */}
            <div className="inner2"><p className="text"><button>button</button></p></div>
            <div className="inner3"></div>
          </div>
          <div className="grad_right"></div>

        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
