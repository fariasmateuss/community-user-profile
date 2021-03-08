import { useState, useEffect } from 'react';
import { Users } from '../../shared';
import { USERNAME_KEY } from '../../constants/params';
import { api } from '../../services/github.api';

export function useUsers() {
  const [user, setUser] = useState<Users | null>(null);

  useEffect(() => {
    async function fetchUserData(): Promise<void> {
      const { data } = await api.get<Users>(`/users/${USERNAME_KEY}`);

      setUser(data);
    }

    fetchUserData();
  }, []);

  return user;
}
