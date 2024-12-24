import React from "react";
import JobCard from "../jobCard/JobCard";
const jobCardsData = [
  {
    name: "Mahmoud",
    jobTitle: "Software Engineer",
    age: 30,
    nationality: "Egyptian",
    profileImage: "https://via.placeholder.com/80", // Replace with actual image URL
    isFavorited: false,
    gender: "male",
  },
  {
    name: "Sara",
    jobTitle: "Graphic Designer",
    age: 27,
    nationality: "Jordanian",
    profileImage: "https://via.placeholder.com/80", // Replace with actual image URL
    isFavorited: true,
    gender: "female",
  },
  {
    name: "Ali",
    jobTitle: "Project Manager",
    age: 35,
    nationality: "Saudi",
    profileImage: "https://via.placeholder.com/80", // Replace with actual image URL
    isFavorited: false,
    gender: "male",
  },
  {
    name: "Laila",
    jobTitle: "Marketing Specialist",
    age: 28,
    nationality: "Lebanese",
    profileImage: "https://via.placeholder.com/80", // Replace with actual image URL
    isFavorited: true,
    gender: "female",
  },
  {
    name: "Hassan",
    jobTitle: "Driver",
    age: 24,
    nationality: "Indian",
    profileImage: "https://via.placeholder.com/80", // Replace with actual image URL
    isFavorited: false,
    gender: "male",
  },
  {
    name: "Aisha",
    jobTitle: "Accountant",
    age: 29,
    nationality: "Sudanese",
    profileImage: "https://via.placeholder.com/80", // Replace with actual image URL
    isFavorited: true,
    gender: "female",
  },
  {
    name: "Omar",
    jobTitle: "IT Technician",
    age: 32,
    nationality: "Yemeni",
    profileImage: "https://via.placeholder.com/80", // Replace with actual image URL
    isFavorited: false,
    gender: "male",
  },
];

export default function JobList() {
  return (
    <div className="container">
      <div className="row">
        {jobCardsData.map((job, index) => (
          <div key={index} className="col-12 col-md-6  col-lg-4 mb-4">
            <JobCard {...job} />
          </div>
        ))}
      </div>
    </div>
  );
}
