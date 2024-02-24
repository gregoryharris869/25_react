import { useState } from "react";
import "./styles.css";

const GithubProfile = () => {
  const [userName, setUserName] = useState("sangammukherjee");
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search Github Username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
};

export default GithubProfile;
