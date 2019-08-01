import React from "react"
import { Link } from "gatsby"
import "./pres.css"
import "./projets.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import pic1 from "../images/bannerrentman.png"

const Projet3 = () => (




   <div className="projet">
   <a target= "blank" href= "https://alicethonnier.netlify.com/" >

       <div className="box">
        <img  src={pic1} className="pic" alt="fireSpot" />
          <div className="right">
          <p> 2018 </p>
         <p> DESIGN FOR RENTMAN</p>
         <p> Digital Marketing - design for the software Rentman
      (Internet website, banners for Facebook ads, fairs) </p>
         </div>
       </div>
    </a>
   </div>


)

export default Projet3
