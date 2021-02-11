import { useState, useEffect } from 'react';

import { Users } from '../shared/types/Users';

import api from '../services/api';

function useUserData() {
  const [user, setUser] = useState<Users | null>(null);
  const username = 'fariasmateuss';

  useEffect(() => {
    async function fetchUserData(): Promise<void> {
      const { data } = await api.get<Users>(`/users/${username}`);

      setUser(data);
    }

    fetchUserData();
  }, []);

  return user;
}

export default useUserData;
