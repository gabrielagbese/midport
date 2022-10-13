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
import About from "./About"
import Hero from "./Hero"
import "./layout.css"

const componento = <Hero />

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
      {/* shape */}
      <div className="container">
        <div className="hero" onClick={() => {heroEx()}}>
          
        </div>
        <div className="about" onClick={() => {aboutEx()}}></div>
        <div className="other">
          <div className="projects" onClick={() => {projectsEx()}}></div>
          <div className="contact" onClick={() => {contactEx()}}></div>
        </div>
      </div>

      {/* content */}
      <div className="content">
        <div className="internal" onClick={() => {textgo()}}>
        {/* setup react router */}
          {componento}
        </div>
      </div>
    </div>
  )
}

//content timelines
// var heroParent = document.querySelectorAll('.hero')
// var heroContent = heroParent.children

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
var contentDisappear = gsap.timeline();

//content modification animation
 function textgo(){
  
  contentDisappear.to(".text", {opacity: 0,})
  //componento  = <About />
  contentDisappear.to(".text", {opacity: 100,})
 }


function heroEx(){
  contentDisappear.to(".text", {opacity: 0, duration: 1})
  hero1.to(".hero", { width: 40+"%",})
  hero2.to(".about", { width: 32+"%",})
  hero3.to(".other", { width: 25+"%",})
  //othersReset()
}

function aboutEx(){
  textgo();
  about2.to({}, {duration: 1});
  about1.to({}, {duration: 1});
  about3.to({}, {duration: 1});
  about2.to(".other", { width: 25+"%",})
  about1.to(".hero", { width: 15+"%", backgroundColor: "#85826c",})
  about3.to(".about", { width: 57+"%",})
  //othersReset()
  
}

function otherEx(){
  other1.to(".about", { width: 12+"%",})
  other2.to(".hero", { width: 15+"%",})
  other3.to(".other", { width: 70+"%",})
}

function projectsEx(){
  otherEx()
  projects.to(".projects", { height: 88.5+"%", })
  contact.to(".contact", { height: 10+"%", borderRadius: 20+"px"})
}

function contactEx(){
  otherEx()
  contact.to(".contact", { height: 88.5+"%",})
  projects.to(".projects", { height: 10+"%", borderRadius: 20+"px",})
}

function othersReset(){
  projects.to(".projects", {height: 49.5+"%", width: 100+"%"})
  contact.to(".contact", {height: 49.5+"%", width: 100+"%" })
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
