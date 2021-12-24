import React, { useState, useEffect } from 'react';
import Story from './Story/Story.';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import Modal from './Modal/Modal';
import './Main.scss';

export default function Main() {
  const [feedDatas, setFeedDatas] = useState(null);
  const [modalIdx, setModalIdx] = useState(0);

  useEffect(() => {
    const fetchFeed = async () => {
      const data = await (
        await fetch('http://localhost:3000/data/joonyoung/data.json')
      ).json();
      // setStories(data?.stories);
      setFeedDatas(data);
    };

    fetchFeed();
  }, []);

  if (!feedDatas) return <h1>Loading datas...</h1>;
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
      <Story stories={feedDatas?.stories} setModalIdx={setModalIdx} />
      <Sidebar otherProfileInfos={feedDatas?.otherProfileInfos} />
      {feedDatas?.feed?.map(feedData => (
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
