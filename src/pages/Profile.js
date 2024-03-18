import React from "react";
import { useNavigate } from "react-router-dom";
import Homepage from "./Homepage";
function Profile(){
    const navigate = useNavigate();
    return(
        <>
       <div>
      <h1 className="user">Hey TestUser,</h1>
      </div>
        <div>
        <button
          className="log"
          onClick={() => {
            navigate("/Categories");
          }}
        >
          {" "}
          Food Category{" "}
        </button>
        <button
          className="log"
          onClick={() => {
            navigate("/Getmenu");
          }}
        >
          {" "}
          Menu{" "}
        </button>
        <button
          className="log"
          onClick={() => {
            navigate("/Cart");
          }}
        >
          {/*}
          <img
            className="imgcart"
            src="https://t3.ftcdn.net/jpg/03/15/48/52/240_F_315485298_P3OoczaRyTPKR6S3TJTvgRKioweq3duI.jpg"
          ></img>
        */}
          Cart
        </button>




        </div>
       
        
        
        
        </>
    );
};
export default Profile;