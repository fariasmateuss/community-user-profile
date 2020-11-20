import { useState, useEffect } from 'react';

import api from '../services/api';

interface IProfile {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
}

function useProfileData() {
  const [profile, setProfile] = useState<IProfile | null>();

  useEffect(() => {
    async function fetchProfileData(): Promise<void> {
      const response = await api.get<IProfile>('/users/fariasmateuss');
      const information = response.data;

      setProfile(information);
    }

    fetchProfileData();
  }, []);

  return profile;
}

export default useProfileData;
