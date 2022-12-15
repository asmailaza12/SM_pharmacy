import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"//linkedin
import { BsFacebook } from "react-icons/bs" // icon sur facebook
import { RiInstagramFill } from "react-icons/ri" //instagram

export const Footer = () => {
  return (
    <>
      <footer className='boxItems'>
        <div className='container flex'>
          <p>pharmacy</p>
          <div className='social'>
            <BsFacebook className='icon' />
            <RiInstagramFill className='icon' />
            <AiFillTwitterCircle className='icon' />
            <AiFillLinkedin className='icon' />
          </div>
        </div>
      </footer>
    </>
  )
}
