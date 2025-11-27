import React from 'react'
// import DomeGallery from '../components/DomeGallery'
import ErrorIMG from "../assets/404 Error Page not Found with people connecting a plug.gif" 

export default function PageNotFound() {
  return (
    <>
      <h1>404 error page</h1>
      <img src={ErrorIMG} alt="" />
      {/* <DomeGallery/> */}
    </>
  )
}
