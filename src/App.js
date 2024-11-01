import { useEffect, useState } from "react";
import Profile from "./components/Profile";
import useGithub from "./hooks/useGithub";
import RepositoryList from "./components/RepositoryList";

function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(searchParams.get("username"));
  }, [searchParams]);

  const { user, isLoading, error, repositories } = useGithub(username);
  const handleSearchSubmit = (e) => {};
  return (
    <div className="App">
      <header>
        <h1 className="title">Github Profile Finder</h1>
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <label htmlFor="username">Github Name:</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
          <button type="submit" className="button-submit">
            Search
          </button>
        </form>
      </header>
      <main>
        {isLoading && username ? <p>Loading...</p> : ""}
        {(!isLoading && error && username) || (error && !username) ? (
          <p>{error}</p>
        ) : (
          ""
        )}
        {!isLoading && !error && username ? <Profile user={user} /> : ""}
        {!isLoading && !error && username ? (
          <RepositoryList repositories={repositories} />
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
