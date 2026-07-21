import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {loginUser} from "../api/auth";
import {useAuthStore} from "../store/authStore";


export default function Login(){

const navigate = useNavigate();

const login =
useAuthStore(
(state)=>state.login
);


const [email,setEmail]=useState(
"admin@infnova.tech"
);

const [password,setPassword]=useState(
"InternChallenge2026!"
);


const [error,setError]=useState("");

const [loading,setLoading]=useState(false);



const handleSubmit = async(
e:React.FormEvent
)=>{

e.preventDefault();


try{

setLoading(true);

setError("");


const response =
await loginUser({
email,
password
});


// API token handling
const token =
response.accessToken;


login(token);


navigate("/dashboard");


}
catch(error){

setError(
"Invalid login credentials"
);

}
finally{

setLoading(false);

}


};



return (

<div className="min-h-screen flex items-center justify-center bg-gray-100">


<form

onSubmit={handleSubmit}

className="bg-white shadow rounded-lg p-8 w-full max-w-md"

>


<h1 className="text-2xl font-bold mb-5 text-center">

INFNOVA Login

</h1>


<input

className="border p-3 w-full mb-3 rounded"

value={email}

onChange={
e=>setEmail(e.target.value)
}

placeholder="Email"

/>


<input

type="password"

className="border p-3 w-full mb-3 rounded"

value={password}

onChange={
e=>setPassword(e.target.value)
}

placeholder="Password"

/>



{
error &&
<p className="text-red-500 mb-3">
{error}
</p>
}



<button

disabled={loading}

className="bg-blue-600 text-white w-full py-3 rounded"

>

{
loading
?
"Logging in..."
:
"Login"
}

</button>


</form>


</div>

);

}