import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import styles from "./CompinesSwiper.module.css"; // Add your CSS for styling if needed
import { Link } from "react-router";
import { useCompanies } from "../../hooks/apiHooks";

export default function CompinesSwiper() {
  const { status, error, companies } = useCompanies();
  if (status === "pending") {
    return <div>loading</div>;
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
          spaceBetween={10}
          slidesPerView={"auto"}
        >
          {companies.data.map(({ logo, company }) => (
            <SwiperSlide key={company.id} style={{ width: "fit-content" }}>
              <Link>
                <div className={styles.card}>
                  <img
                    src={logo}
                    alt={company.name}
                    className={styles.cardImg}
                  />
                  <div>
                    <p className={styles.cardText}>{company.company_name_en}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
