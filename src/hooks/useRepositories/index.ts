import { useState, useEffect } from 'react';

import { Repos } from '../../shared/types/Repositories';

import { USERNAME_KEY } from '../../constants/params';

import api from '../../services/github.api';

function useRepositoriesData() {
  const [repositories, setRepositories] = useState<Repos[]>([]);

  useEffect(() => {
    api.get(`users/${USERNAME_KEY}/repos`).then(response => {
      setRepositories(response.data);
    });
  }, []);

  return repositories;
}

export default useRepositoriesData;
