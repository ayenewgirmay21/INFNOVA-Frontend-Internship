interface Props{

value:string;

onChange:(value:string)=>void;

}


export default function Sort({
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
Sort By
</option>


<option value="name">
Name
</option>


<option value="createdAt">
Date Created
</option>


</select>


);


}