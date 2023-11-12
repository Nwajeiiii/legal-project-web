import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    isUserLoggedIn: false, // New boolean state
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
