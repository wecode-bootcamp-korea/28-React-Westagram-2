import React from 'react';
import Other from './Ohter';
import './Sidebar.scss';

const Sidebar = () => {
  const otherProfileInfos = [
    { id: 1, username: 'wecode28기', description: 'wecode님외 36명이 follow' },
    { id: 2, username: 'Younha', description: 'Enna Kim외 10명이 follow' },
    { id: 3, username: 'wework', description: 'wecode28님외 236명이 follow' },
  ];

  return (
    <aside>
      <section className="sidebar">
        <header>
          <img src="/images/joonyoung/profile.jpg" alt="profile " />
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
            {otherProfileInfos.map(profile => (
              <Other key={profile.id} profile={profile} />
            ))}
          </section>
        </article>
      </section>
    </aside>
  );
};

export default Sidebar;
