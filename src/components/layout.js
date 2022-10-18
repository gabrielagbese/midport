import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import gsap from "gsap"
import "pace-js"
import eyeLogo from "../images/eyeLogo.png"
import "pace-js/themes/yellow/pace-theme-minimal.css"

import Header from "./header"
import About from "./About"
import Hero from "./Hero"
import "./layout.css"

const Layout = ({ children }) => {
  const [active, setActive]  = useState("FirstCard")

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
      setActive("SecondCard")
    }, 2000);
    //gsap.delayedCall(2,about3.to(".text", {opacity: 100,}))
  }

  function heroTest(){
    textgo()
    setTimeout(() => {
      heroEx()
    }, 1000);
    setTimeout(() => {
      setActive("FirstCard")
    }, 2000);
    //gsap.delayedCall(2,about3.to(".text", {opacity: 100,}))
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
          {active === "FirstCard" && <Hero fn = {() => {aboutTest()}}/>}
          {active === "SecondCard" && <About fn = {() => {heroTest()}}/>}
          {active === "ThirdCard" && <Hero />}
          
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
var contentDisappear = gsap.timeline();

//content modification animation
 function textgo(){
  contentDisappear.to(".text", {opacity: 0,})
 }


function heroEx(){
  //contentDisappear.to(".text", {opacity: 0, duration: 1})
  hero1.to(".hero", { width: 40+"%",})
  hero2.to(".about", { width: 32+"%",})
  hero3.to(".other", { width: 25+"%",})
  console.log("completed")
  //othersReset()
}

function aboutEx(){
  about2.to(".other", { width: 25+"%",})
  about1.to(".hero", { width: 10+"%",})
  about3.to(".about", { width: 62+"%",})
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
