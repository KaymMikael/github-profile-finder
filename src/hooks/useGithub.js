import { useEffect, useState } from "react";

const useGithub = (username) => {
  const [user, setUser] = useState([]);
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGithubUser = () => {
      setTimeout(async () => {
        if (!username) {
          return;
        }
        try {
          setIsLoading(true);
          setError("");
          const response = await fetch(
            `https://api.github.com/users/${username}`
          );
          const response2 = await fetch(
            `https://api.github.com/users/${username}/repos`
          );

          // Check if the response status is not OK
          if (response.status === 403) {
            throw new Error("Forbidden");
          }

          if (!response.ok || !response2.ok) {
            throw new Error("User not found");
          }

          const data = await response.json();
          const data2 = await response2.json();
          setUser(data);
          setRepositories(data2);
        } catch (e) {
          setError(e.message);
        } finally {
          setIsLoading(false);
        }
      }, 2000);
    };

    fetchGithubUser();
  }, [username]);

  return { user, isLoading, error, repositories };
};

export default useGithub;
