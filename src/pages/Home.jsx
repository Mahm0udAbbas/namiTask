import { FaPlus } from "react-icons/fa6";
import AddButton from "../ui/AddButton/AddButton";
import CategoriesSwiper from "../ui/CategorySwiper/CategorySwiper";
import SecondCategoriesSwiper from "../ui/CategorySwiper/SecondCategorySwiper";
import CompinesSwiper from "../ui/CompniesSwiper/CompinesSwiper";
import FavoritesResumes from "../ui/FavoriteResuemes/FavoritesResumes";
import FIlterList from "../ui/FIlters/FIlterList";
import HeroSection from "../ui/heroSection/heroSection";
import JobList from "../ui/JobList/JobList";
import JobsCatgoriesSwiper from "../ui/JobsCatgoriesSwiper/JobsCatgoriesSwiper";
import { age, gender, religion } from "../ui/FIlters/filterConstant";
import styles from "./Home.module.css";
import { useCountries, useNationalities } from "../hooks/apiHooks";

export default function Home() {
  const {
    isLoading: nationalitiesIsLoading,
    error: nationalitiesError,
    nationalities,
  } = useNationalities();
  const {
    isLoading: countriesIsLoading,
    error: countriesError,
    countries,
  } = useCountries();

  return (
    <section className="container py-4">
      <HeroSection />
      <main className="row mt-3">
        <section className="col-md-9">
          <section className="row justify-content-end">
            <div className="col-4 d-flex justify-content-end  ">
              <AddButton icon={<FaPlus />} name="Add Your Resume Now" />
            </div>
          </section>
          <section className="row">
            <CategoriesSwiper />
          </section>
          <section className="row">
            <SecondCategoriesSwiper />
          </section>
          <section
            className={`d-flex  gap-3 align-items-center  overflow-x-scroll my-3 ${styles.filter}`}
          >
            {countriesIsLoading ? (
              ""
            ) : (
              <FIlterList label="Country" options={countries.data} />
            )}
            {nationalitiesIsLoading ? (
              ""
            ) : (
              <FIlterList label="Nationality" options={nationalities.data} />
            )}
            <FIlterList label="Age" options={age} />
            <FIlterList label="Gender" options={gender} />
            <FIlterList label="Religion" options={religion} />
            <button className=" "> By Individual </button>
            <button className="">By Compony </button>
          </section>
          <JobList />
        </section>
        <section className="col-md-3">
          <FavoritesResumes />
        </section>
      </main>
      <section className="">
        <CompinesSwiper />
      </section>
      <section className="">
        <JobsCatgoriesSwiper />
      </section>
    </section>
  );
}
