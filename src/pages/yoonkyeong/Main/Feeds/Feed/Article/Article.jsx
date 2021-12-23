import React from 'react';
import './Article.scss';
import {
  BiHeart,
  BiMessageRounded,
  BiPaperPlane,
  BiBookmark,
  BiDotsHorizontalRounded,
} from 'react-icons/bi';

export default function Article({ FeedUpLoader, uploaderProfileImg, feedImg }) {
  return (
    <div className="article">
      <div className="articleHeader">
        <div className="publisherProfile">
          <div className="publisherImage">
            <img alt="upLoaderProfileImg" src={uploaderProfileImg} />
          </div>
          <div className="publisherId">{FeedUpLoader}</div>
        </div>
        <BiDotsHorizontalRounded size="30" />
      </div>
      <div className="articleWrapper">
        <img className="articleImage" alt="feedImg" src={feedImg} />
      </div>
      <div className="articleIconsWrapper">
        <BiHeart size="34" />
        <BiMessageRounded size="34" />
        <BiPaperPlane size="34" />
        <BiBookmark size="34" className="bookmark" />
      </div>
      <div className="likeWrapper">
        <b>나</b>님 <b>외 10명</b>이 좋아합니다
      </div>
    </div>
  );
}
