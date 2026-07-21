import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { loginUser } from "../api/auth";


export default function useAuth() {

  const navigate = useNavigate();

  const {
    token,
    login,
    logout
  } = useAuthStore();



  const loginHandler = async (
    email: string,
    password: string
  ) => {

    const response = await loginUser({
      email,
      password
    });


    login(response.accessToken);


    navigate("/dashboard");

  };



  const logoutHandler = () => {

    logout();

    navigate("/login");

  };



  return {

    token,

    isAuthenticated: Boolean(token),

    login: loginHandler,

    logout: logoutHandler

  };

}