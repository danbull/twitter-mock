import React from "react";
import Avatar from "../Avatar";
import styles from "./tweet.module.scss";
import ConvertUnixTime from "../../utils/ConvertUnixTime";

const Tweet = props => {
  const { username, text, timeStamp, image } = props;

  return (
    <div className={styles.tweet}>
      <Avatar image={image} />
      <div className={styles.tweet__body}>
        <span>{username}</span>
        <p>{text}</p>
        <time>{ConvertUnixTime(timeStamp)}</time>
      </div>
    </div>
  );
};

export default Tweet;
