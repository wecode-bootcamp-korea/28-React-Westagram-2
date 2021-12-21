import React, { useState, useEffect } from 'react';
import Story from './Story/Story.';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import Modal from './Modal/Modal';
import './Main.scss';

export default function Main() {
  const [stories, setStories] = useState([]);
  const [feedDatas, setFeedDatas] = useState([]);
  const [modalIdx, setModalIdx] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchFeed = async () => {
      const data = await (
        await fetch('http://localhost:3000/data/joonyoung/data.json')
      ).json();
      setStories(data?.stories);
      setFeedDatas(data?.feed);
    };

    fetchFeed();
  }, []);

  if (feedDatas.length === 0) return <h1>Loading datas...</h1>;
  return (
    <main className={isModalOpen ? 'modalOpen' : ''}>
      {isModalOpen && (
        <Modal
          profileImg={stories[modalIdx - 1].imgUrl}
          username={stories[modalIdx - 1].username}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <Story
        stories={stories}
        setIsModalOpen={setIsModalOpen}
        setModalIdx={setModalIdx}
      />
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
