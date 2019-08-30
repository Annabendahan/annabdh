import React, {Component} from "react"
import { Link } from "gatsby"
import "./pres.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Projet1 from "../components/projet1"
import Projet2 from "../components/projet2"
import Projet3 from "../components/projet3"
import Projet4 from "../components/projet4"


class Pres extends Component {

  state = {
    show: 1,
    num: 1
  }

   handleShuffle  = () => {
    let number = parseInt((Math.random() * (4 - 1 + 1)), 10) + 1;
    this.setState({ show : number
      })
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let num = this.state.num;
      this.setState({ num: num + 1 });
    }, 1500);
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

  } else if ( state === 4 ) {
    projet = <Projet4 />

  }

let display =""

if (this.state.num === 1) {
  display = "AM A DEVELOPER"
} else if (this.state.num === 2) {
  display = "DESIGN & CODE"
} else if (this.state.num === 3) {
  display = "BUILD YOUR WEBSITE"
}  else if (this.state.num === 4) {
  display = "PLAY FOOTBALL"
}  else if (this.state.num === 5) {
  display = "AM BASED IN PARIS"
} else if (this.state.num === 6) {
  display = "CREATE STUFF"
} else if (this.state.num === 7) {
  this.handleReset()
}



    return(

<div>
   <div className="pres">

   <p> Hello, welcome to my portfolio! I am Anna Bendahan, full-stack developer specialised in Front-End and UIUX design. I create modern and original websites. Young designer, artist, start-up...: need a website to show what you do </p>
    <p> I  <span className="j"> {display} </span> </p>



     </div>

  </div>

)
}}

export default Pres
