import React from "react";
import { Chart } from "../../components/chart/Chart";
import { Nav } from "../../components/navBar/Nav";
import { Side } from "../../components/sideBar/Side";
import { Tables } from "../../components/Table/Table";
import "./Single.scss";
export const Single = () => {
  return (
    <div className="single">
      <Side />
      <div className="singleContainer">
        <Nav />
        <div className="top">
          <div className="left">
            <div className="editButtton">Edit</div>
            <h1 className="title">Information</h1>
            {
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  alt=""
                  className="itemImg"
                />
                <div className="details">
                  <h1 className="itemTitle">Jane Doe</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email :</span>
                    <span className="itemValue">janedeo@gmail.com</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone :</span>
                    <span className="itemValue">+216 123 45 67</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Adresse :</span>
                    <span className="itemValue">13th Street. 47 W 13th St, New York</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Counter :</span>
                    <span className="itemValue">USA</span>
                  </div>
                </div>
              </div>
            }
          </div>

          <div className="right">
            <Chart aspect={3/1} title="User Spending (Last 6 Months) " />
          </div>
         
        </div>
        <div className="Bottom">
          <div className="title">Last Transaction</div>
          <Tables/>
          </div> 
      </div>
    </div>
  );
};
