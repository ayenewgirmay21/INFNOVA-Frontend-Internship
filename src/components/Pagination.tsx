interface Props{

page:number;

totalPages:number;

onChange:(page:number)=>void;

}


export default function Pagination({
page,
totalPages,
onChange
}:Props){


return (

<div className="flex gap-3 justify-center mt-5">


<button

disabled={page===1}

onClick={()=>onChange(page-1)}

className="border px-3 py-1 rounded"

>
Previous
</button>


<span className="px-3">

{page} / {totalPages}

</span>


<button

disabled={page===totalPages}

onClick={()=>onChange(page+1)}

className="border px-3 py-1 rounded"

>
Next
</button>


</div>

);


}