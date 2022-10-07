import React from "react";
import { Nav } from "../../components/navBar/Nav";
import { Side } from "../../components/sideBar/Side";
import "./new.scss";
import FolderOpenOutlinedIcon from "@material-ui/icons/FolderOpenOutlined";
import { useState } from "react";
export const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  console.log(file);
  return (
    <div className="new">
      <Side />
      <div className="newContainer">
        <Nav />
        <div className="top">
          <h1> {title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  {" "}
                  Image:
                  <FolderOpenOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <button>send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
