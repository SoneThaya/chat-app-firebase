import React from "react";

const Message = () => {
  return (
    <div className="message">
      <div className="messageInfo">
        <img
          src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        {/* <img
          src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default Message;
