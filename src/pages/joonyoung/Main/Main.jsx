import React, { useState, useEffect } from 'react';
import Story from './Story/Story.';
import Sidebar from './Sidebar/Sidebar';
import Modal from './Modal/Modal';
import Feed from './Feed/Feed';
import './Main.scss';

export default function Main() {
  const [datas, setDatas] = useState(null);
  const [modalIdx, setModalIdx] = useState(false);

  useEffect(() => {
    const fetchFeed = async () => {
      await fetch('http://localhost:3000/data/joonyoung/data.json')
        .then(res => res.json())
        .then(data => setDatas(data));
    };
    fetchFeed();
  }, []);
  const isModalOpen = modalIdx ? 'modalOpen' : '';

  if (!datas) return <h1>Loading datas...</h1>;
  return (
    <main className={`joonyoung_main ${isModalOpen}`}>
      {modalIdx ? (
        <Modal
          profileImg={datas.stories[modalIdx].imgUrl}
          username={datas.stories[modalIdx].username}
          setModalIdx={setModalIdx}
        />
      ) : (
        ''
      )}
      <Story stories={datas?.stories} setModalIdx={setModalIdx} />
      <Sidebar otherProfileInfos={datas?.otherProfileInfos} />
      {datas?.feed?.map(feed => (
        <Feed key={feed.id} feed={feed} />
      ))}
    </main>
  );
}
