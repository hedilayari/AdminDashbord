import React from "react";
import "./Side.scss";
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import StoreMallDirectoryOutlinedIcon from '@material-ui/icons/StoreMallDirectoryOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import AllInboxOutlinedIcon from '@material-ui/icons/AllInboxOutlined';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import RecordVoiceOverOutlinedIcon from '@material-ui/icons/RecordVoiceOverOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from "react-router-dom";
export const Side = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">
            Hadiladmin
        </span>
        </Link>
        
      </div>
      <hr/>
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
            <Link style={{textDecoration :"none"}} to="/">
            <li>
            <DashboardIcon className="icon"/>
                <span>
                    Dashbord
                </span>
            </li></Link>
            
            <p className="title">LISTS</p>
            <Link style={{textDecoration :"none"}} to="/users"> <li>
                <PersonOutlineOutlinedIcon  className="icon"/>
                <span>
                    Users
                </span>
            </li></Link>
            <Link style={{textDecoration :"none"}} to="/product"><li>
               <StoreMallDirectoryOutlinedIcon  className="icon"/>
                <span>
                   Product
                </span>
            </li></Link>
           
            <li>
                <LocalMallOutlinedIcon  className="icon"/>
                <span>
                    Orders
                </span>
            </li> 
            <li>
                <AllInboxOutlinedIcon  className="icon"/>
                <span>
                    Delivery
                </span>

            </li>
            <p className="title">USEFUL</p>
            <li>
           <TimelineOutlinedIcon  className="icon"/>
                <span>
                   Stats
                </span>
                
            </li>
            <li>
                <NotificationsOutlinedIcon  className="icon"/>
                <span>
                    Notification
                </span>
                
            </li>
            <p className="title">SERVICE</p>
            <li>
                <FavoriteBorderOutlinedIcon  className="icon"/>
                <span>
                    System Health
                </span>
                
            </li>
            <li>
                <RecordVoiceOverOutlinedIcon  className="icon"/>
                <span>
                    Logs
                </span>
                
            </li>
            <li>
            <SettingsIcon  className="icon"/>
                <span>
                    Settings
                </span>
            </li>
            <p className="title">USER</p>
            <li>
                <AccountCircleIcon  className="icon"/>
                <span>
                    Profile
                </span>
                
            </li>
            <li>
                <ExitToAppIcon  className="icon"/>
                <span>
                    Logout
                </span>
                
            </li>
        </ul>
      </div>
      <div className="bottom">
      <div className="coloroption"></div>
      <div className="coloroption"></div>
      </div>
    </div>
  );
};
