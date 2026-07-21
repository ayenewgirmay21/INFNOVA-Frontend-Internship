import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";


export default function Navbar(){

const navigate = useNavigate();

const logout = useAuthStore(
(state)=>state.logout
);


const handleLogout=()=>{

logout();

navigate("/login");

};


return (

<nav className="bg-white shadow px-6 py-4 flex justify-between items-center">

<h1 className="text-xl font-bold">
INFNOVA Applicant Dashboard
</h1>


<button
onClick={handleLogout}
className="bg-red-500 text-white px-4 py-2 rounded"
>
Logout
</button>


</nav>

);

}