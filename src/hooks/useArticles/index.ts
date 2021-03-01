import { useState, useEffect } from 'react';

import { Articles } from '../../shared/devto';

import { USERNAME_KEY } from '../../constants/params';

import { api } from '../../services/devto.api';

function useArticlesData() {
  const [articles, setArticles] = useState<Articles[]>([]);

  useEffect(() => {
    api.get(`articles?username=${USERNAME_KEY}`).then(response => {
      setArticles(response.data);
    });
  }, []);

  return articles;
}

export default useArticlesData;
