import type { Applicant } from "../types/applicant";


interface Props {

  applicant: Applicant;

  onView: (id: string) => void;

}



export default function ApplicantCard({
  applicant,
  onView
}: Props) {


  return (

    <div className="border rounded-lg p-4 shadow bg-white">


      <h2 className="font-bold text-lg">
        {applicant.fullName}
      </h2>


      <p className="text-gray-600">
        {applicant.email}
      </p>


      <p>
        Country:
        <span className="font-semibold ml-2">
          {applicant.country}
        </span>
      </p>


      <p>
        Track:
        <span className="font-semibold ml-2">
          {applicant.track}
        </span>
      </p>


      <p>
        Status:
        <span className="font-semibold ml-2">
          {applicant.status}
        </span>
      </p>


      <p>
        Applied:
        <span className="font-semibold ml-2">
          {new Date(
            applicant.applicationDate
          ).toLocaleDateString()}
        </span>
      </p>


      <button

        onClick={() => onView(applicant.id)}

        className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"

      >

        View Details

      </button>


    </div>

  );

}