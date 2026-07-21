/**
 * Format API dates into readable format
 */
export function formatDate(
  date?: string
): string {

  if (!date) return "N/A";


  return new Date(date)
    .toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "short",
        day: "numeric"
      }
    );

}


/**
 * Capitalize first letter
 */
export function capitalize(
  value:string
):string {

  if(!value) return "";

  return (
    value.charAt(0).toUpperCase()
    +
    value.slice(1).toLowerCase()
  );

}


/**
 * Truncate long text
 */
export function truncate(
  text:string,
  length:number = 50
):string {

  if(text.length <= length)
    return text;


  return (
    text.substring(0,length)
    +
    "..."
  );

}


/**
 * Get applicant status badge style
 */
export function getStatusClass(
  status:string
):string {


switch(status){

case "Accepted":
  return "bg-green-100 text-green-700";


case "Rejected":
  return "bg-red-100 text-red-700";


case "Pending":
  return "bg-yellow-100 text-yellow-700";


default:
  return "bg-gray-100 text-gray-700";

}


}