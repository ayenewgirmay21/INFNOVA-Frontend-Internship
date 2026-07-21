interface Props{

value:string;

onChange:(value:string)=>void;

}


export default function SearchBar({
value,
onChange
}:Props){


return (

<input

className="border rounded px-4 py-2 w-full"

placeholder="Search applicant..."

value={value}

onChange={
(e)=>onChange(e.target.value)
}

/>

);


}