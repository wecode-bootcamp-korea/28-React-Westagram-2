import React from 'react';
import Other from './Ohter';
import './Sidebar.scss';

const Sidebar = ({ otherProfileInfos }) => {
  return (
    <aside>
      <section className="joonyoung__sidebar">
        <header>
          <div className="img__skeleton">
            <img src="/images/joonyoung/profile.jpg" alt="profile " />
          </div>
          <article className="profile">
            <h3>Joonyg10</h3>
            <p>박준영</p>
          </article>
          <span>전환</span>
        </header>

        <article className="recommend">
          <header className="recommend__title">
            <h3>회원님을 위한 추천</h3>
            <span>모두보기</span>
          </header>
          <section className="others">
            {otherProfileInfos?.map(profile => (
              <Other key={profile.id} profile={profile} />
            ))}
          </section>
        </article>
      </section>
    </aside>
  );
};

export default Sidebar;
