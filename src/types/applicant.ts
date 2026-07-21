export type ApplicantStatus =
  | "pending"
  | "accepted"
  | "rejected"
  | "shortlisted";


export interface Applicant {

  id: string;

  fullName: string;

  email: string;

  country: string;

  track: string;

  status: ApplicantStatus;

  applicationDate: string;

}