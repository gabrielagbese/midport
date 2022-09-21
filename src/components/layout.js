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
          <div className="content_with_bottom">
            <div className="grad_left"></div>
            <div className="box_wrapper">
              <div className="four box">test</div>
              <div className="three box"></div>
              <div className="top-left box text">tl</div>
              <div className="top-right box">tr</div>
            </div>
            <div className="grad_right"></div>
          </div>
          <div className="bottom">a</div>
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
