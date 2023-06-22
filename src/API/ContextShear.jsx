import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const ContextShear = () => {
   const auth = useContext(AuthContext)
   return auth

};

export default ContextShear;