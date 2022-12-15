import React from "react";
import noImage from "../assets/profileman.png";
import noImageW from "../assets/profilewoman.jpg";

export default function Casting({ casting }) {
  return (
    <div>
      <div className="img-box">
        {casting.profile_path ? <img src={`https://image.tmdb.org/t/p/w200/${casting.profile_path}`} alt="" /> : casting.gender === 1 ? <img src={noImageW} alt="" /> : <img src={noImage} alt="" />}
      </div>
      <div className="info">
        <p>{casting.name}</p>
      </div>
    </div>
  );
}
