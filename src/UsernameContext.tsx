import React, { createContext, useState } from 'react';

interface UsernameContextType {
  username: string;
  setUsername: (username: string) => void;
}

export const UsernameContext = createContext<UsernameContextType>({
  username: '',
  setUsername: () => {},
});

export const UsernameProvider: React.FC = ({ children }) => {
  const [username, setUsername] = useState('');

  const handleSetUsername = (newUsername: string) => {
    setUsername(newUsername);
  };

  return (
    <UsernameContext.Provider value={{ username, setUsername: handleSetUsername }}>
      {children}
    </UsernameContext.Provider>
  );
};
