import { useState, useEffect } from 'react';

import api from '../services/api';

import { Users } from '../shared/types/Users';

function useUserData() {
  const [user, setUser] = useState<Users | null>(null);

  useEffect(() => {
    async function fetchUserData(): Promise<void> {
      const { data } = await api.get<Users>('/users/fariasmateuss');

      setUser(data);
    }

    fetchUserData();
  }, []);

  return user;
}

export default useUserData;
