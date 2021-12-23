import React, { useState, useEffect } from 'react';
import Feed from '../Feeds/Feed/Feed';
import './Feeds.scss';

export default function Feeds() {
  const [feed, setFeed] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:3000/data/Data.json', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setFeed(data);
  //     });
  // }, []);

  useEffect(() => {
    const fetchFeeds = async () => {
      const data = await (
        await fetch('http://localhost:3000/data/Data.json', {
          method: 'GET',
        })
      ).json();
      setFeed(data.feed);
    };

    fetchFeeds();
  }, []);

  console.log(feed);

  return (
    <div className="Feeds">
      {feed.map(feed => (
        <Feed
          key={feed.id}
          FeedUpLoader={feed.feedUpLoader}
          uploaderProfileImg={feed.uploaderProfileImg}
          feedImg={feed.feedImage}
          comments={feed.comments}
        />
      ))}
    </div>
  );
}
