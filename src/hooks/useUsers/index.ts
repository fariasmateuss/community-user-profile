import { useState, useEffect } from 'react';

import { Users } from '../../shared/github';

import { USERNAME_KEY } from '../../constants/params';

import { api } from '../../services/github.api';

function useUserData() {
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

export default useUserData;
