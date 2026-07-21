import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import ApplicantCard from "../components/ApplicantCard";
import StatsCard from "../components/StatsCard";
import Loading from "../components/Loading";
import EmptyState from "../components/EmptyState";
import ErrorState from "../components/ErrorState";

import useApplicants from "../hooks/useApplicants";
import useDebounce from "../hooks/useDebounce";


export default function Dashboard() {


  const navigate = useNavigate();


  const [page, setPage] =
    useState(1);


  const [search, setSearch] =
    useState("");


  const [status, setStatus] =
    useState("");



  const debouncedSearch =
    useDebounce(search, 500);



  const {
    applicants,
    loading,
    error,
    totalPages,
    refetch

  } = useApplicants({

    page,

    search: debouncedSearch,

    status

  });



  return (

    <div className="space-y-6">


      <h1 className="text-2xl font-bold">
        Internship Applicant Dashboard
      </h1>



      <div className="grid md:grid-cols-3 gap-5">


        <StatsCard

          title="Total Applicants"

          value={applicants.length}

        />


        <StatsCard

          title="Pending"

          value={
            applicants.filter(
              a => a.status === "pending"
            ).length
          }

        />


        <StatsCard

          title="Accepted"

          value={
            applicants.filter(
              a => a.status === "accepted"
            ).length
          }

        />


      </div>




      <div className="flex flex-col md:flex-row gap-3">


        <SearchBar

          value={search}

          onChange={(value)=>{

            setSearch(value);

            setPage(1);

          }}

        />



        <Filter

          value={status}

          onChange={(value)=>{

            setStatus(value);

            setPage(1);

          }}

        />


      </div>




      {
        loading &&
        <Loading/>
      }



      {
        error &&
        <ErrorState

          message={error}

          retry={refetch}

        />

      }




      {
        !loading &&
        !error &&
        applicants.length === 0 &&
        <EmptyState/>

      }




      {
        !loading &&
        !error &&

        <div className="grid md:grid-cols-3 gap-5">


          {
            applicants.map(
              applicant => (

                <ApplicantCard

                  key={
                    applicant.id
                  }


                  applicant={
                    applicant
                  }


                  onView={
                    (id)=>
                    navigate(
                      `/applicant/${id}`
                    )
                  }

                />

              )
            )
          }


        </div>

      }




      <Pagination

        page={page}

        totalPages={totalPages}

        onChange={setPage}

      />


    </div>

  );

}