import React from 'react'
import { Element } from 'react-scroll'
import Topcontent from './TopContent/Topcontent'
import "./TopContainer.css"
const TopContainer = () => {
  return (
    <div>
        <Element name="about" className="topContainer">
           <Topcontent />
        </Element>
    </div>
  )
}

export default TopContainer