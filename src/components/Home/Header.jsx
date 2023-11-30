import React from 'react'
import Navbar from '../shared/Navbar'
import { background } from '../../assets/getAssets'
import Hero from './Hero'
import Badges from './Badges'

const Header = () => {
  return (
    <div className=' w-full bg-no-repeat bg-cover bg-center pb-20' style={{backgroundImage:`url(${background})`}}>
        <Navbar></Navbar>
        <Hero></Hero>
        
    </div>
  )
}

export default Header