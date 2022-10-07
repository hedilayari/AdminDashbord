import React from "react";
import { Chart } from "../../components/chart/Chart";
import { Featured } from "../../components/featured/Featured";
import { Nav } from "../../components/navBar/Nav";
import { Side } from "../../components/sideBar/Side";
import { Tables } from "../../components/Table/Table";
import { Widget } from "../../components/widget/Widget";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <Side/>
      <div className="homeContainer">
    
       
      <Nav/>
     <div className="widgets">
        <Widget type="user"/>
        <Widget type="order"/>
        <Widget type="earning"/>
        <Widget type="balance"/>
        
      </div>
        <div className="charts">
          <Featured/>
          <Chart aspect={2/1} title="Last 6 Months (Revenu)"/>
        </div>
        <div className="listcontainer">
          <div className="listtitle">Latest Transaction</div>
          <Tables/>
        </div>
      </div>
     
    </div>
  );
}

export default Home;
