import { useResumes } from "../../hooks/apiHooks";
import JobCard from "../jobCard/JobCard";
import Spinner from "../Spinner/Spinner";

export default function JobList() {
  let { status, error, resumes } = useResumes();
  if (status === "pending") {
    return <Spinner />;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }
  resumes = resumes.data.slice(0, 12);
  return (
    <div className="container">
      <div className="row">
        {resumes.map((resume) => (
          <div key={resume.id} className="col-12 col-md-6  col-lg-4 mb-4">
            <JobCard resume={resume} />
          </div>
        ))}
      </div>
    </div>
  );
}
