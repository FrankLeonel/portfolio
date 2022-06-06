import apiGitHub from "config/api";
import { useEffect, useState } from "react";

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
