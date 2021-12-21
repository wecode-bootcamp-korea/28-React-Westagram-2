import React, { useState, useEffect } from 'react';
import Story from './Story/Story.';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import './Main.scss';

export default function Main() {
  const [feedDatas, setFeedDatas] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      const data = await (
        await fetch('http://localhost:3000/data/joonyoung/feed.json')
      ).json();
      setFeedDatas(data?.feed);
    };

    fetchFeed();
  }, []);

  if (feedDatas.length === 0) return <h1>Loading datas...</h1>;
  return (
    <main>
      <Story />
      <Sidebar />
      {feedDatas?.map(feedData => (
        <Feed
          key={feedData.id}
          feedUpLoader={feedData.feedUpLoader}
          uploaderProfileImg={feedData.uploaderProfileImg}
          carouselImages={feedData.carouselImages}
          initialComments={feedData.comments}
        />
      ))}
    </main>
  );
}
