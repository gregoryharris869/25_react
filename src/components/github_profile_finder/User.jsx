import PropTypes from "prop-types";

export default function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  User.propTypes = {
    user: PropTypes.shape({
      avatar_url: PropTypes.string.isRequired,
      followers: PropTypes.number.isRequired,
      following: PropTypes.number.isRequired,
      public_repos: PropTypes.number.isRequired,
      name: PropTypes.string,
      login: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
    }).isRequired,
  };

  const createdDate = new Date(created_at);
  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="User" />
      </div>
      <div>
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>
          User joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div className="profile-info">
        <div>
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
}
