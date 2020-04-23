import React from "react";
import styles from "./Avatar.module.scss";
import FallbackImage from "../../images/fallback-avatar.png";

const Avatar = (props) => {
  function addFallbackSrc(e) {
    e.target.src = FallbackImage;
  }

  return (
    <div className={styles.avatar}>
      <img alt="" src={props.image} onError={(e) => addFallbackSrc(e)} />
    </div>
  );
};

export default Avatar;
