import React from 'react'
import 'C:/PersonalProjects/PersonaFitAI/React/src/App.css';
import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom';



export const Home = () => {
  return (
    <div className="app align-middle items-center text-center justify-center">
      <motion.div initial={{ opacity: 0 }} transition={{delay: .5}} animate={{y: -100, opacity: 1}} className="grid grid-cols-1 align-middle p-40">
        <h1 className="text-center text-6xl p-5 justify-between" style={{color: "azure"}}>Personalized Fitness. </h1>
        <h1 className="text-center text-6xl justify-between" style={{color: "azure"}}>Built with Generative AI.</h1>  
      </motion.div>
      <motion.div initial={{ opacity: 0 }} transition={{delay: .7}} animate={{y: -100, opacity: 1}} className="px-10 mx-24">
        <Button />
      </motion.div>
    </div>
  )
}

const Button = () => {
    return (
      <button className="py-2 px-4 border rounded shadow-xl">
          <NavLink to="/login"><p>Get Started</p></NavLink>
      </button>
    )
  } 
