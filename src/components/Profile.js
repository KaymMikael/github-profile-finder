import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <div className="image-box">
        <img src={user.avatar_url} alt="Github avatar" />
      </div>
      <div className="profile-information">
        <p>Bio: {user.bio}</p>
        <p>Name: {user.login}</p>
        <a href={user.html_url} target="_blank">
          Github Link
        </a>
        <p>
          Followers: {user.followers} Following: {user.following}
        </p>
      </div>
    </div>
  );
};

export default Profile;
