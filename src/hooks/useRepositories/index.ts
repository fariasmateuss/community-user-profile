import { useState, useEffect } from 'react';

import { Repos } from '../../shared/github';

import { USERNAME_KEY } from '../../constants/params';

import { api } from '../../services/github.api';

export function useRepositories() {
  const [repositories, setRepositories] = useState<Repos[]>([]);

  useEffect(() => {
    api.get(`users/${USERNAME_KEY}/repos`).then(response => {
      setRepositories(response.data);
    });
  }, []);

  return repositories;
}
