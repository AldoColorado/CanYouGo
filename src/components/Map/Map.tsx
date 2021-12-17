import React, { useEffect, useState } from "react";
import SubtitleInfo from "../CanYouGo/Titles/Subtitles/SubtitleInfo";
import "./map.css"
import map from "../../assets/images/maps.jpg";

const Map = () => {

  return (
    <div className="card-maps">
      <div className="maps">
        <SubtitleInfo text="Ubicación"></SubtitleInfo>
        <div>
          <img src={map} />
        </div>
      </div>
    </div>
  );
}

export default Map;