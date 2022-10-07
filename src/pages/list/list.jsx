import React from 'react'
import { Datatable } from '../../components/datatable/Datatable'
import { Nav } from '../../components/navBar/Nav'
import { Side } from '../../components/sideBar/Side'
import "./list.scss"

export const List = () => {
  return (
    <div className='list'>
      <Side/>
      <div className="listcontainer">
        <Nav/>
       <Datatable/>
      </div>
    </div>
  )
}
