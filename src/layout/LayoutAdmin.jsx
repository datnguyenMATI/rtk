import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutAdmin = ({children}) => {
  return (
    <>
        <div>Header</div>
        <Outlet/>
        <div>Footer</div>
    </>
  )
}

export default LayoutAdmin