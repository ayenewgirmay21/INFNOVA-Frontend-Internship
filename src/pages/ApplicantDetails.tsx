import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  getApplicantById,
  updateApplicantStatus
} from "../api/applicant";

import Loading from "../components/Loading";
import ErrorState from "../components/ErrorState";

import type {
  ApplicantStatus,
  Applicant
} from "../types/applicant";

import {
  formatDate,
  getStatusClass
} from "../utils/helpers";


export default function ApplicantDetails() {


  const { id } = useParams();

  const navigate = useNavigate();


  const [applicant, setApplicant] =
    useState<Applicant | null>(null);


  const [loading, setLoading] =
    useState(true);


  const [error, setError] =
    useState("");


  const [updating, setUpdating] =
    useState(false);



  const fetchApplicant = async () => {

    try {

      setLoading(true);
      setError("");


      if (!id) return;


      const data =
        await getApplicantById(id);


      setApplicant(data);


    } catch (error) {

      setError(
        "Failed to load applicant details"
      );

    } finally {

      setLoading(false);

    }

  };



  useEffect(() => {

    fetchApplicant();

  }, [id]);




  const changeStatus = async (
    status: ApplicantStatus
  ) => {


    if (!applicant) return;


    try {

      setUpdating(true);


      const updated =
        await updateApplicantStatus(
          applicant.id,
          status
        );


      setApplicant(updated);


    } catch (error) {

      setError(
        "Failed to update applicant status"
      );

    } finally {

      setUpdating(false);

    }

  };




  if (loading) {

    return <Loading />;

  }




  if (error) {

    return (

      <ErrorState

        message={error}

        retry={fetchApplicant}

      />

    );

  }




  if (!applicant) {

    return (

      <ErrorState

        message="Applicant not found"

      />

    );

  }





  return (

    <div className="max-w-3xl mx-auto">


      <button

        onClick={() =>
          navigate("/dashboard")
        }

        className="mb-5 border px-4 py-2 rounded"

      >

        ← Back to Dashboard

      </button>




      <div className="bg-white rounded-lg shadow p-6">


        <div className="flex justify-between items-start">


          <div>


            <h1 className="text-2xl font-bold">

              {applicant.fullName}

            </h1>


            <p className="text-gray-600">

              {applicant.email}

            </p>


          </div>




          <span

            className={`px-3 py-1 rounded-full text-sm ${getStatusClass(
              applicant.status
            )}`}

          >

            {applicant.status}

          </span>


        </div>





        <div className="mt-6 space-y-3">


          <p>

            <strong>Country:</strong>

            {" "}

            {applicant.country}

          </p>



          <p>

            <strong>Track:</strong>

            {" "}

            {applicant.track}

          </p>



          <p>

            <strong>Applied Date:</strong>

            {" "}

            {formatDate(
              applicant.applicationDate
            )}

          </p>



        </div>





        <div className="mt-8 flex gap-4 flex-wrap">


          <button

            disabled={updating}

            onClick={() =>
              changeStatus("accepted")
            }

            className="bg-green-600 text-white px-5 py-2 rounded"

          >

            Accept

          </button>




          <button

            disabled={updating}

            onClick={() =>
              changeStatus("rejected")
            }

            className="bg-red-600 text-white px-5 py-2 rounded"

          >

            Reject

          </button>




          <button

            disabled={updating}

            onClick={() =>
              changeStatus("pending")
            }

            className="bg-yellow-500 text-white px-5 py-2 rounded"

          >

            Pending

          </button>




        </div>


      </div>


    </div>

  );

}