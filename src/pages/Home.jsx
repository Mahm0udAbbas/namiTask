import { FaPlus } from "react-icons/fa6";
import AddButton from "../ui/AddButton/AddButton";
import HeroSection from "../ui/heroSection/heroSection";
import JobList from "../ui/JobList/JobList";
import FavoritesResumes from "../ui/FavoriteResuemes/FavoritesResumes";

export default function Home() {
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
          <section className="row">swipe</section>
          <section className="row">swipe</section>
          <section className="row">swipe</section>
          <JobList />
        </section>
        <section className="col-md-3">
          <FavoritesResumes />
        </section>
      </main>
    </section>
  );
}
