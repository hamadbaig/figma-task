import React from "react";
import image from "../Assets/login.png";
import leaf from "../Assets/Leaf.png";
import text from "../Assets/Vector.png";
import google from "../Assets/google.png";
import facebook from "../Assets/facebook.png";
import apple from "../Assets/apple.png";
import { CiUser } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaEye } from "react-icons/fa";

const Signup = () => {
  return (
    <section className="signup-main">
      <img className="image" src={image} alt="login "></img>

      <div className="login">
        <div className="login-info">
          <div className="info-img">
            <img className="img" src={text} alt="login "></img>
            <img className="img" src={leaf} alt="login "></img>
          </div>
          <div className="mob-img">
            <img className="mob-image" src={image} alt="login "></img>
          </div>
          <p className="heading">Create Account</p>
          <div className="input">
            <p>Full Name</p>

            <input
              className="input-box"
              type="Password"
              placeholder="Enter Full Name"
            />
            <i className="input-icon">
              <CiUser />
            </i>
          </div>
          <div className="input">
            <p>Email</p>
            <input
              className="input-box"
              type="Enter Full Name"
              placeholder="Enter Email"
            />
            <i className="input-icon">
              <MdOutlineEmail />
            </i>
          </div>
          <div className="input">
            <p>Password</p>
            <input
              className="input-box"
              type="Enter Password"
              placeholder="Enter Password"
            />
            <i className="input-icon">
              <FaEye />
            </i>
          </div>
          <button className="button">Submit</button>
          <p>- OR -</p>
          <div className="info-img">
            <div className="logo">
              <img className="img-2" src={google} alt="login "></img>
            </div>
            <div className="logo">
              <img className="img-2" src={facebook} alt="login "></img>
            </div>
            <div className="logo">
              <img className="img-2" src={apple} alt="login "></img>
            </div>
          </div>
          <p>already have account? login</p>
        </div>
      </div>
    </section>
  );
};
export default Signup;
