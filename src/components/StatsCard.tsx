interface Props{

title:string;

value:number;

}


export default function StatsCard({
title,
value
}:Props){


return (

<div className="bg-white shadow rounded p-5">


<h3 className="text-gray-500">
{title}
</h3>


<p className="text-3xl font-bold">
{value}
</p>


</div>

);


}