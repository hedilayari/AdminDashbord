import React from 'react'
import "./Featured.scss"
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@material-ui/icons/KeyboardArrowUpOutlined';



export const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
       <MoreVertOutlinedIcon fontSize='small'/>
      </div>
      <div className="bottom">
        <div className="featuredchart">
        <CircularProgressbar value={70} text="70%" strokeWidth={4} />
        </div>
      <p className="title">Totale sales made today</p>
      <p className="amount">$420</p>
      <p className="desc">previous transaction processing.Last payments may not be included.</p>
      <div className="summary">
        <div className="item">
          <div className="itemtitle">Last Day</div>
          <div className="itemresult negative">
          <KeyboardArrowDownOutlinedIcon fontSize='12px'/>
            <div className="resultamount">$12.4k</div>
          </div>
        </div>
        <div className="item">
          <div className="itemtitle">Last Week</div>
          <div className="itemresult positive">
          <KeyboardArrowUpOutlinedIcon fontSize='12px'/>
            <div className="resultamount">$12.4k</div>
          </div>
        </div>
        <div className="item">
          <div className="itemtitle">Last Month</div>
          <div className="itemresult positive">
          <KeyboardArrowUpOutlinedIcon fontSize='12px'/>
            <div className="resultamount">$12.4k</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
