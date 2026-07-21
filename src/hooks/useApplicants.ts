import { useEffect, useState } from "react";
import { getApplicants } from "../api/applicant";
import type { Applicant } from "../types/applicant";

interface Params {
  page: number;
  search: string;
  status: string;
  sort?: string;
  delay?: number;
  simulateError?: boolean;
}

export default function useApplicants({
  page,
  search,
  status,
  sort,
  delay,
  simulateError
}: Params) {

  const [applicants, setApplicants] =
    useState<Applicant[]>([]);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [totalPages, setTotalPages] =
    useState(1);

  const fetchApplicants = async () => {

    try {

      setLoading(true);
      setError("");

      const response =
        await getApplicants({

          page,

          search,

          status,

          sortBy: sort,

          delay,

          simulateError

        });

      setApplicants(
        response.data
      );

      setTotalPages(
        response.meta.totalPages
      );

    } catch (err) {

      setError(
        "Unable to load applicants"
      );

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchApplicants();

  }, [
    page,
    search,
    status,
    sort,
    delay,
    simulateError
  ]);

  return {

    applicants,

    loading,

    error,

    totalPages,

    refetch: fetchApplicants

  };

}