import { useState, useEffect } from 'react';

import { Repos } from '../shared/types/Repositories';

import api from '../services/api';

function useRepositoriesData() {
  const [repositories, setRepositories] = useState<Repos[]>([]);
  const username = 'fariasmateuss';

  useEffect(() => {
    api.get(`users/${username}/repos`).then(response => {
      setRepositories(response.data);
    });
  }, []);

  return repositories;
}

export default useRepositoriesData;
