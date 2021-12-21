import { useState, useEffect } from 'react';
import Feeds from './Feeds/Feeds';
import MainRight from './MainRight/MainRight';
import './Main.scss';

const Main = () => {
  const [feedVal, setfeedVal] = useState([]);
  const currInitialComment = [];

  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET',
    }).then(res =>
      res.json().then(data => {
        setfeedVal(data);
        for (let i in data) currInitialComment.push(data[i].comment);
      })
    );
  });

  return (
    <div className="main">
      {feedVal.map((el, i) => {
        return (
          <Feeds
            key={el.id}
            userId={el.userId}
            profileImg={el.profileImg}
            img={el.img}
            comments={el.comment}
          />
        );
      })}
      <MainRight />
    </div>
  );
};

export default Main;
