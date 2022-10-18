import * as React from "react"
import { useState } from "react"
import PropTypes, { bool } from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import gsap from "gsap"
import "pace-js"
import eyeLogo from "../images/eyeLogo.png"
import "pace-js/themes/yellow/pace-theme-minimal.css"

//page components
import About from "./About"
import Hero from "./Hero"
import Projects from "./Projects"
import Contact from "./Contact"
import "./layout.css"

const Layout = ({ children }) => {
  const [active, setActive]  = useState("heroCard")

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // const Styled = {
  //   paddingLeft: '-50%',
  // }

  function aboutTest(){
    textgo()
    setTimeout(() => {
      aboutEx()
    }, 1000);
    setTimeout(() => {
      setActive("aboutCard")
    }, 2000);
  }

  function heroTest(){
    textgo()
    setTimeout(() => {
      heroEx()
    }, 1000);
    setTimeout(() => {
      setActive("heroCard")
    }, 2000);
  }

  function projectsTest(){
    textgo()
    setTimeout(() => {
      projectsEx()
    }, 1000);
    setTimeout(() => {
      setActive("projectsCard")
    }, 2000);
  }

  function contactTest(){
    textgo()
    setTimeout(() => {
      contactEx()
    }, 1000);
    setTimeout(() => {
      setActive("contactCard")
    }, 2000);
  }


  return (
    <div className="external">
      {/* shape */}
      <div className="container">
        <div className="hero" onClick={() => {heroEx()}}>
          <img src={eyeLogo} width="150px" height="150px" className="eyelogo"></img>
        </div>
        <div className="about" onClick={() => {aboutEx()}}></div>
        <div className="other">
          <div className="projects" onClick={() => {projectsEx()}}></div>
          <div className="contact" onClick={() => {contactEx()}}></div>
        </div>
      </div>
      {/* content */}
      <div className="content">
        <div className="internal">
          {/* setup react router */}
          {active === "heroCard" && <Hero fn = {() => {aboutTest()}}/>}
          {active === "aboutCard" && <About fn = {() => {projectsTest()}}/>}
          {active === "projectsCard" && <Projects fn = {() => {contactTest()}}/>}
          {active === "contactCard" && <Contact fn = {() => {heroTest()}}/>}
          
        </div>
      </div>
    </div>
  )
}

var testt = "successs"

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
var misc = gsap.timeline();
var contentDisappear = gsap.timeline();

//content modification animation
 function textgo(){
  contentDisappear.to(".text", {opacity: 0,})
 }

 //toggle others launched
 let othersLaunced = false


function heroEx(){
  //contentDisappear.to(".text", {opacity: 0, duration: 1})
  hero1.to(".hero", { width: 40+"%",})
  hero2.to(".about", { width: 32+"%",})
  hero3.to(".other", { width: 25+"%",})
  console.log("completed")
  if (othersLaunced == true){
    othersReset()
  }
}

function aboutEx(){
  about2.to(".other", { width: 25+"%",})
  about1.to(".hero", { width: 10+"%",})
  about3.to(".about", { width: 62+"%",})
  if (othersLaunced == true){
    othersReset()
  }
}

function otherEx(){
  other1.to(".about", { width: 10+"%",})
  other2.to(".hero", { width: 10+"%",})
  other3.to(".other", { width: 77+"%",})
  othersLaunced = true
}

function projectsEx(){
  otherEx()
  projects.to(".projects", { height: 84.5+"%", })
  contact.to(".contact", { height: 14+"%", borderRadius: 20+"px"})
}

function contactEx(){
  otherEx()
  contact.to(".contact", { height: 84.5+"%",})
  projects.to(".projects", { height: 14+"%", borderRadius: 20+"px",})
}

function othersReset(){
  contact.to(".contact", {height: 39.5+"%", borderRadius: 30+"px",})
  projects.to(".projects", {height: 59.5+"%", borderRadius: 30+"px",})
}



Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
