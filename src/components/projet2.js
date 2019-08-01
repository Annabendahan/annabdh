import React from "react"
import { Link } from "gatsby"
import "./pres.css"
import "./projets.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import pic1 from "../images/mameri.png"

const Projet2 = () => (


<div className="projet">
   <a target= "blank" href= "https://annabendahan.github.io/mameri/" >

       <div className="box">
       <div className="left">
          <p> 2019 </p>
         <p> QUENTIN MAMERI'S WEBSITE</p>
         <p> Quentin is a lawyer and needed a clear and useful website.  </p>
         </div>

        <img  src={pic1} className="pic2" alt="fireSpot" />
        </div>

    </a>
   </div>


)

export default Projet2
