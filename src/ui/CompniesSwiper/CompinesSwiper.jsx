import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import styles from "./CompinesSwiper.module.css"; // Add your CSS for styling if needed
import { Link } from "react-router";
import { useCompanies } from "../../hooks/apiHooks";
import SpinnerMini from "../Spinner/SpinnerMini";

export default function CompinesSwiper() {
  const { status, error, companies } = useCompanies();
  if (status === "pending") {
    return <SpinnerMini />;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }
  return (
    <>
      <div className={styles.swiperHeader}>
        <h3>Recruitment Companies</h3>
        <Link>View All</Link>
      </div>
      <div className={styles.categoriesSwiper}>
        <Swiper
          className={`${styles.swiper} ${styles.swiperWrapper}`}
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {companies.data.map(({ logo, company }) => (
            <SwiperSlide key={company.id}>
              <Link className={styles.card}>
                <div className={styles.imgContainer}>
                  <img
                    src={logo}
                    alt={company.name}
                    className={styles.cardImg}
                  />
                </div>
                <div>
                  <p className={styles.cardText}>{company.company_name_en}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
