import React from "react"
import { Link } from "gatsby"
import "./pres.css"
import "./projets.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import pic1 from "../images/rentmanall.png"

const Projet3 = () => (




   <div className="projet">
   <a target= "blank" href= "https://alicethonnier.netlify.com/" >

       <div className="box">

          <div className="left">
          <p> n°3 </p>
          <p> 2018 </p>
         <p> Design for Rentman</p>
        <svg width="47" height="24" viewBox="0 0 47 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M46.0607 13.0607C46.6464 12.4749 46.6464 11.5251 46.0607 10.9393L36.5147 1.3934C35.9289 0.807612 34.9792 0.807612 34.3934 1.3934C33.8076 1.97918 33.8076 2.92893 34.3934 3.51472L42.8787 12L34.3934 20.4853C33.8076 21.0711 33.8076 22.0208 34.3934 22.6066C34.9792 23.1924 35.9289 23.1924 36.5147 22.6066L46.0607 13.0607ZM0 13.5L45 13.5V10.5L0 10.5L0 13.5Z" fill="#96FFE6"/>
</svg>


        <div className="desc">  <p> Digital Marketing - design for the software Rentman
      (Internet website, banners for Facebook ads, fairs) </p> </div>
         </div>
         <img  src={pic1} className="pic4" alt="fireSpot" />
       </div>
    </a>
   </div>


)

export default Projet3
