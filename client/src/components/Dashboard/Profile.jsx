import React, { useState } from "react";
import axios from "axios";

const Profile = ({ user, contrastTB, setContrastTB, refreshDeviceColorData }) => {
  const [hexInput, setHexInput] = useState("");

  const profileTabStyles = ["border", `border-${contrastTB}`, "p-[10px]"];

  const handleInputChange = (e) => {
    setHexInput(e.target.value);
  };

  const handleHexSubmit = () => {
    axios.patch(`/user/device-color/${user._id}`, {
        deviceColor: hexInput
    })
    .then(() => {
        refreshDeviceColorData();
        
    })
    .catch(err => {
        console.error(err);
    });
  };

  return (
    <div className={profileTabStyles.join(" ")}>
      <input
        className={profileTabStyles.join(" ")}
        type="text"
        placeholder="Enter 3-6 Digit Hex Code"
        onChange={handleInputChange}
        value={hexInput}
        minLength={4}
        maxLength={7}
      />
      <button className={profileTabStyles.join(" ")} onClick={handleHexSubmit} type="button">
        Apply Change
      </button>
    </div>
  );
};

export default Profile;
