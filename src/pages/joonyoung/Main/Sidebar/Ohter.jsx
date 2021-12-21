import React from 'react';

const Other = ({ profile }) => {
  const { id, username, description } = profile;

  return (
    <section className="others__profile">
      <div className="img__skeleton">
        <img
          src={`/images/joonyoung/recommends/recommendation${id}.jpg`}
          alt="profile"
        />
      </div>
      <div className="others__profile_description">
        <h4>{username}</h4>
        <p>{description}</p>
      </div>
      <span>follow</span>
    </section>
  );
};

export default Other;
