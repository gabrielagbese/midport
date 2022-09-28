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
        <div className="hero text" onClick={() => {heroEx()}}>HELLO, WORLD</div>
        <div className="about" onClick={() => {aboutEx()}}></div>
        <div className="other">
          <div className="projects" onClick={() => {projectsEx()}}></div>
          <div className="contact" onClick={() => {contactEx()}}></div>
        </div>
      </div>
    </div>
  )
}

//hero timelines
var hero1 = gsap.timeline();
var hero2 = gsap.timeline();
var hero3 = gsap.timeline();
//about timelines
var about1 = gsap.timeline();
var about2 = gsap.timeline();
var about3 = gsap.timeline();
//other timelines
var other1 = gsap.timeline();
var other2 = gsap.timeline();
var other3 = gsap.timeline();
var projects = gsap.timeline();
var contact = gsap.timeline();



function heroEx(){
  hero3.to(".other", { width: 25+"%",})
  hero1.to(".hero", { width: 40+"%",})
  hero2.to(".about", { width: 30+"%",})
  othersReset()
}

function aboutEx(){
  about2.to(".other", { width: 25+"%",})
  about1.to(".hero", { width: 15+"%",})
  about1.to(".about", { width: 55+"%",})

  
}

function otherEx(){
  other1.to(".about", { width: 10+"%",})
  other1.to(".hero", { width: 15+"%",})
  other1.to(".other", { width: 70+"%",})
}

function projectsEx(){
  otherEx()
  projects.to(".projects", { height: 90+"%",})
  contact.to(".contact", { height: 10+"%",})
}

function contactEx(){
  otherEx()
  contact.to(".contact", { height: 90+"%",})
  projects.to(".projects", { height: 10+"%",})
}

function othersReset(){
  projects.to(".projects", {height: 50+"%", width: 100+"%"})
  contact.to(".contact", {height: 50+"%", width: 100+"%"})
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
