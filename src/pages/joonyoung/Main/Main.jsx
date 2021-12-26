import React, { useState, useEffect } from 'react';
import Story from './Story/Story.';
import Sidebar from './Sidebar/Sidebar';
// import Modal from './Modal/Modal'; FIXME: modal 수정 에정
import Feed from './Feed/Feed';
import './Main.scss';

export default function Main() {
  const [datas, setDatas] = useState(null);
  const [modalIdx, setModalIdx] = useState(0);

  useEffect(() => {
    const fetchFeed = async () => {
      await fetch('http://localhost:3000/data/joonyoung/data.json')
        .then(res => res.json())
        .then(data => setDatas(data));
    };
    fetchFeed();
  }, []);

  if (!datas) return <h1>Loading datas...</h1>;
  return (
    <main className={`joonyoung_main ${modalIdx === -1 ? 'modalOpen' : ''}`}>
      {/* FIXME: Modal 작업 수정 예정 */}
      {/* {modalIdx && (
        <Modal
          profileImg={stories[modalIdx - 1].imgUrl}
          username={stories[modalIdx - 1].username}
          setModalIdx={setModalIdx}
        />
      )} */}
      <Story stories={datas?.stories} setModalIdx={setModalIdx} />
      <Sidebar otherProfileInfos={datas?.otherProfileInfos} />
      {datas?.feed?.map(feed => (
        <Feed key={feed.id} feed={feed} />
      ))}
    </main>
  );
}
