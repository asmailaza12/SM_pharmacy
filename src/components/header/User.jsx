import React, { useState } from "react"
import { IoSettingsOutline } from "react-icons/io5"  //icons
import { BsBagCheck } from "react-icons/bs" //icons
import { AiOutlineHeart } from "react-icons/ai"//icons
import { GrHelp } from "react-icons/gr" // icons
import { BiLogOut } from "react-icons/bi"//icons
import { Link } from "react-router-dom"// link url
import { useDispatch } from "react-redux"
//Vous pouvez l'utiliser pour envoyer des actions si nécessaire.
import { authActions } from "../../store/authSlice"// dossier authactions

export const User = () => {
  const user = true
  const [profileOpen, setProfileOpen] = useState(false)

  const close = () => {
    setProfileOpen(null)
  }

  const dispatch = useDispatch()
  const logoutHandler = (e) => {
    dispatch(authActions.logout())
  }
  return (
    <>
      <div className='profile'>
        {user ? (
          <>
            <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
          
              <img src='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' alt='' /> 
            </button>

            {profileOpen && (
              <div className='openProfile boxItems' onClick={close}>
                <div className='image'>
                  <Link to='/account'>
                    <div className='img'>
                      <img src='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' alt='' />
                    </div>
                  </Link>
                  <div className='text'>
                    <h4>MR SMAIL</h4>
                    <label htmlFor=''>GUELMIM</label>
                  </div>
                </div>
                <Link to='/login'>
                  <button className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>My Account</h4>
                  </button>
                </Link>
                <button className='box'>
                  <BsBagCheck className='icon' />
                  <h4>My Order</h4>
                </button>
                <button className='box'>
                  <AiOutlineHeart className='icon' />
                  <h4>list</h4>
                </button>
                <button className='box'>
                  <GrHelp className='icon' />
                  <h4>Help</h4>
                </button>
                <button className='box' onClick={logoutHandler}>
                  <BiLogOut className='icon' />
                  <h4>Log Out</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  )
}
