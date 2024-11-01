import React from "react";

const RepositoryList = ({ repositories }) => {
  // Helper function to capitalize each word's first letter
  const toTitleCase = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="repository">
      <h2>Repository Link List</h2>
      <ul className="repository-list">
        {repositories.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {toTitleCase(repo.name)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryList;
