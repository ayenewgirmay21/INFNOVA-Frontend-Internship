/**
 * Email validation
 */
export function isValidEmail(
email:string
):boolean {

const emailRegex =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;


return emailRegex.test(email);

}



/**
 * Password validation
 */
export function isValidPassword(
password:string
):boolean {


return password.length >= 8;


}



/**
 * Required field validation
 */
export function isRequired(
value:string
):boolean {


return value.trim().length > 0;


}