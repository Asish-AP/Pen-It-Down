import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../Components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/12836470/pexels-photo-12836470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={"/write?edit=2"}>
              {/* post number also given */}
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          ratione commodi saepe! A delectus at rerum tempore cupiditate
          blanditiis, ducimus pariatur repellendus, accusamus mollitia deserunt
          laborum maxime quidem iste. Quasi.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
