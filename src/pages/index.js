import React from "react"
import { Link } from "gatsby"
import "../components/index.css"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Pres from "../components/pres"
import pic1 from "../images/nokia.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

      <div className="title">

      <h1> ANNA </h1>
      <h1> BENDAHAN </h1>

      </div>

    <Pres/>
    <img  src={pic1} className="phone" alt="fireSpot" />

  </Layout>
)

export default IndexPage
