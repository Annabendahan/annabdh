import React from "react"
import { Link } from "gatsby"
import "./pres.css"
import "./projets.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import pic1 from "../images/aliceprojet.png"

const Projet1 = () => (




   <div className="projet">
   <a target= "blank" href= "https://alicethonnier.netlify.com/" >

       <div className="box">
        <img  src={pic1} className="pic" alt="fireSpot" />
          <div className="right">
          <p> 2019 </p>
         <p> ALICE'S WEBSITE</p>
         <p> Alice's website, young fashion designer and pattern maker. Collections description,
      ckothes highlight, colors of her main collection "Heures de pointe". </p>
         </div>
       </div>
    </a>
   </div>


)

export default Projet1
