import { createContext } from "react";

const UserContext = createContext({
    LogInUser: "Default User"
});

export default UserContext;