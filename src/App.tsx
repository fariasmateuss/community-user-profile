import React from 'react';

import useProfileData from './hooks/user.hooks';

import Header from './components/Header';

const App: React.FC = () => {
  const profile = useProfileData();

  return (
    <Header
      name={profile?.name}
      login={profile?.login}
      avatar={profile?.avatar_url}
    />
  );
};

export default App;
