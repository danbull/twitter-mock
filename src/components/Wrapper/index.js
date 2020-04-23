import React, { useState, useEffect } from "react";
import styles from "./wrapper.module.scss";
import Tweet from "../Tweet";

import {
  FEED_REFRESH_TIME,
  MAX_TWEETS,
  TWEET_COUNT,
  API_URL,
} from "../../consts";

export default function Wrapper() {
  const [tweets, setTweets] = useState(null);
  const [afterId, setafterId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = fetch(`${API_URL}/api?count=${TWEET_COUNT}`);
      const data = res.then((data) => data.json());

      const tweetsData = await data.catch(() => {
        fetchData();
      });

      if (tweetsData) {
        setTweets(tweetsData);
        setafterId(tweetsData[0].id);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (afterId === null || afterId > MAX_TWEETS) return;

    async function fetchData() {
      const res = fetch(
        `${API_URL}/api?count=${TWEET_COUNT}&afterId=${afterId}`
      );

      const data = res.then((data) => data.json());
      const tweetsData = await data.catch(() => {
        fetchData();
      });

      if (tweetsData) {
        setafterId(tweetsData[0].id);
        setTweets((prevTweets) => [...tweetsData, ...prevTweets]);
      }
    }

    setTimeout(() => {
      fetchData();
    }, FEED_REFRESH_TIME);
  }, [afterId]);

  return (
    <div className={styles.wrapper}>
      {tweets &&
        tweets.length &&
        tweets.map((tweet) => {
          return <Tweet key={tweet.id.toString()} {...tweet} />;
        })}
    </div>
  );
}
