export interface User {

    id:string;

    name:string;

    email:string;

    role:string;

}



export interface LoginResponse {

    token:string;

    user:User;

}



export interface Applicant {


    _id:string;


    name:string;


    email:string;


    phone:string;


    skills:string[];


    experience:string;


    status:
    | "Pending"
    | "Accepted"
    | "Rejected";


    createdAt:string;


    resume?:string;


}