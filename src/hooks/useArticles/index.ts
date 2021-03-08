import { useState, useEffect } from 'react';
import { Articles } from '../../shared';
import { USERNAME_KEY } from '../../constants/params';
import { api } from '../../services/devto.api';

export function useArticles() {
  const [articles, setArticles] = useState<Articles[]>([]);

  useEffect(() => {
    api.get(`articles?username=${USERNAME_KEY}`).then(response => {
      setArticles(response.data);
    });
  }, []);

  return articles;
}
