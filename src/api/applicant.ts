import api from "./axios";

import type {
  Applicant
} from "../types/applicant";


export interface ApplicantQuery {

  page?: number;

  limit?: number;

  search?: string;

  status?: string;

  track?: string;

  country?: string;

  experienceLevel?: string;

  sortBy?: string;

  sortOrder?: "asc" | "desc";

  simulateError?: boolean;

  delay?: number;

}



export interface ApplicantResponse {

  data: Applicant[];

  meta: {

    page: number;

    limit: number;

    total: number;

    totalPages: number;

  };

}



export const getApplicants = async (

  params?: ApplicantQuery

) => {


  const response =
    await api.get<ApplicantResponse>(
      "/applicants",
      {
        params
      }
    );


  return response.data;

};



export const getApplicantById = async (

  id: string

) => {


  const response =
    await api.get<Applicant>(
      `/applicants/${id}`
    );


  return response.data;

};



export const updateApplicantStatus = async (

  id: string,

  status: string

) => {


  const response =
    await api.patch<Applicant>(
      `/applicants/${id}/status`,
      {
        status
      }
    );


  return response.data;

};