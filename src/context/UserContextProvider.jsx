import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { isPast } from "date-fns";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const token = localStorage.getItem("kiwitter_user");

  let initialUser = null;

  if (token) {
    const decodedUser = jwtDecode(token);
    const gecmisMi = isPast(new Date(decodedUser.exp * 1000));

    if (gecmisMi) {
      localStorage.removeItem("kiwitter_user");
    } else {
      initialUser = decodedUser;
    }
  }

  const [user, setUser] = useState(initialUser);
  const [search, setSearch] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser, search, setSearch }}>
      {children}
    </UserContext.Provider>
  );
};
