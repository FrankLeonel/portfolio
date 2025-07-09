import { useEffect, useState } from "react";

import apiGitHub from "config/api";

const useRepositories = () => {
  const [repositories, setRepositories] = useState([]);

  const loadRepositories = async () => {
    const response = await apiGitHub.get("users/frankleonel/repos");

    setRepositories(response.data);
  };

  useEffect(() => {
    loadRepositories();
  }, []);

  return { repositories };
};
export default useRepositories;
