import React, {Component} from "react"
import { Link } from "gatsby"
import "./pres.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Projet1 from "../components/projet1"
import Projet2 from "../components/projet2"
import Projet3 from "../components/projet3"

class Pres extends Component {

  state = {
    show: 1,
    num: 1
  }

   handleShuffle  = () => {
    let number = parseInt((Math.random() * (3 - 1 + 1)), 10) + 1;
    this.setState({ show : number
      })
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let num = this.state.num;
      this.setState({ num: num + 1 });
    }, 2000);
  }

handleReset =() =>{
  this.setState({ num: 1});
}

 render(){


  let state = this.state.show
  let projet= <Projet1 />

  if (state === 1) {
    projet = <Projet1 />

  } else if ( state === 2 ) {
    projet = <Projet2 />

  } else if ( state === 3 ) {
    projet = <Projet3 />

  }

let display =""

if (this.state.num === 1) {
  display = "AM A CREATIVE DEVELOPER"
} else if (this.state.num === 2) {
  display = "DESIGN & CODE"
} else if (this.state.num === 3) {
  display = "BUILD YOUR WEBSITE"
}  else if (this.state.num === 4) {
  display = "PLAY FOOTBALL"
}  else if (this.state.num === 5) {
  this.handleReset()
}



    return(

<div>
   <div className="pres">
   <p> WELCOME </p>
   <p> TO MY PORTFOLIO </p>
    <p> I  <span className="j"> {display} </span> </p>
    <p> BASED IN PARIS </p>
     <p> NOW IT'S TIME TO </p> <p onClick={this.handleShuffle} > <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M25.9693 13.7486L28.4705 13.7501L28.4675 15.0737C28.4672 15.3322 28.6047 15.5715 28.8286 15.7015C29.0521 15.8308 29.3283 15.8312 29.5525 15.7027L35.6371 12.2038C35.8617 12.0749 36 11.836 36.0004 11.5775C36.0008 11.3189 35.8632 11.08 35.6397 10.95L29.5676 7.4289C29.3434 7.29888 29.0679 7.2985 28.8436 7.42739C28.6194 7.55628 28.4811 7.79522 28.4803 8.05375L28.4781 9.37166L25.9696 9.37015C22.1135 9.37015 19.3066 12.9387 16.592 16.3901C14.3274 19.2705 11.9852 22.2485 9.77673 22.2485H0.723965C0.324107 22.2489 0 22.5726 0 22.9728V25.903C0 26.3032 0.324107 26.6273 0.723965 26.6273H9.77597C14.11 26.6273 17.2561 22.6284 20.0317 19.0986C22.1007 16.4685 24.2394 13.7486 25.9693 13.7486Z" fill="black"/>
<path d="M35.637 23.7966L29.5524 20.2981C29.3282 20.1689 29.052 20.1689 28.8285 20.2993C28.6046 20.4289 28.4671 20.6682 28.4674 20.9271L28.4704 22.2507L25.9699 22.2522C24.6584 22.2522 23.0613 20.5668 21.9736 19.2998L19.022 22.5789C20.696 24.4652 22.9994 26.631 25.9703 26.631L28.478 26.6295L28.4802 27.9471C28.4806 28.206 28.6193 28.4441 28.8435 28.5734C28.9551 28.6375 29.0795 28.6695 29.2042 28.6695C29.3297 28.6695 29.4552 28.6371 29.5675 28.5715L35.6392 25.0504C35.8631 24.9208 36.0003 24.6815 35.9999 24.423C35.9995 24.1648 35.8612 23.9262 35.637 23.7966Z" fill="black"/>
<path d="M9.77597 9.37402H0.723965C0.324107 9.37402 0 9.69813 0 10.0976V13.0281C0 13.428 0.324107 13.7521 0.723965 13.7521H9.77597C11.412 13.7521 13.1049 15.4522 14.2362 16.7309L17.1528 13.4359C15.5436 11.6925 13.028 9.37402 9.77597 9.37402Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="36" height="36" fill="white"/>
</clipPath>
</defs>
</svg> </p>
     </div>
    <div className="projet">
     {projet}
   </div>
  </div>

)
}}

export default Pres
