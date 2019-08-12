import React from "react"
import { Link } from "gatsby"
import "../components/index.css"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Pres from "../components/pres"
import pic1 from "../images/nokia.png"
import pic2 from "../images/carte1.png"
import pic3 from "../images/carte2.png"
import pic4 from "../images/annabdh.png"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

      <div className="title">

       <img  src={pic4} className="picheader" alt="fireSpot" />

      </div>

    <Pres/>
    <img  src={pic1} className="phone" alt="fireSpot" />
    <img  src={pic2} className="carte" alt="fireSpot" />


  </Layout>
)

export default IndexPage
