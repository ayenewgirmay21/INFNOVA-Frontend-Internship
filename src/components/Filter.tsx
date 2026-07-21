interface Props{

value:string;

onChange:(value:string)=>void;

}


export default function Filter({
value,
onChange
}:Props){


return (

<select

className="border rounded px-3 py-2"

value={value}

onChange={
(e)=>onChange(e.target.value)
}

>

<option value="">
All Status
</option>


<option value="Pending">
Pending
</option>


<option value="Accepted">
Accepted
</option>


<option value="Rejected">
Rejected
</option>


</select>

);


}