import { useQuery } from "@tanstack/react-query";

import {
  getResumes,
  getJobs,
  getCategoris,
  getCompanies,
  getCountries,
  getNationalities,
} from "../services/api";

// Hook for fetching resumes
export const useResumes = () => {
  const {
    status,
    data: resumes,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["resumes"],
    queryFn: getResumes,
  });
  return { status, resumes, error, isLoading };
};

// Hook for fetching jobs
export const useJobs = () => {
  const {
    status,
    data: jobs,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: getJobs,
  });
  return { status, jobs, error, isLoading };
};

// Hook for fetching categories
export const useCategories = () => {
  const {
    status,
    data: categories,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoris,
  });
  return { status, categories, error, isLoading };
};

// Hook for fetching companies
export const useCompanies = () => {
  const {
    status,
    data: companies,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["companies"],
    queryFn: getCompanies,
  });
  return { status, companies, error, isLoading };
};

// Hook for fetching countries
export const useCountries = () => {
  const {
    status,
    data: countries,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });
  return { status, countries, error, isLoading };
};

// Hook for fetching nationalities
export const useNationalities = () => {
  const {
    status,
    data: nationalities,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["nationalities"],
    queryFn: getNationalities,
  });
  return { status, nationalities, error, isLoading };
};
