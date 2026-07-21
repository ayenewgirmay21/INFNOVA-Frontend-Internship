interface Props{

message?:string;

retry?:()=>void;

}


export default function ErrorState({
message="Something went wrong",
retry
}:Props){


return (

<div className="text-center py-10">


<h2 className="text-red-600 text-xl">

{message}

</h2>


{
retry &&

<button

onClick={retry}

className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"

>
Retry
</button>

}


</div>

);


}