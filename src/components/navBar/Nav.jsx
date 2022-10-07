import React from 'react'
import "./Nav.scss"
import SearchIcon from '@material-ui/icons/Search';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import FullscreenExitOutlinedIcon from '@material-ui/icons/FullscreenExitOutlined';
import hadil from "../img/hadil.jpg"
export const Nav = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
      <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon/>
        </div>
        <div className='items'>
        <div className="item">
        <LanguageOutlinedIcon className='icon'/> English
        </div>
        <div className="item">
        <Brightness4OutlinedIcon className='icon'/> 
        </div>
        <div className="item">
        <FullscreenExitOutlinedIcon className='icon'/> 
        </div>
        <div className="item">
        <NotificationsNoneOutlinedIcon className='icon'/> 
        <div className="counter">1</div>
        </div>
        <div className="item">
        <ChatBubbleOutlineOutlinedIcon className='icon'/> 
        <div className="counter">2</div>
        </div>
        <div className="item">
        <ListAltOutlinedIcon className='icon'/> 
        </div>
        <div className="item">
       <img src={hadil} alt="" className='avatar'/>
        </div>
        </div>

      </div></div>
  )
}
