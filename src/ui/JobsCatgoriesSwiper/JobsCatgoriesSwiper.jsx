import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import styles from "./JobsCatgoriesSwiper.module.css"; // Add your CSS for styling if needed
import { Link } from "react-router";
import { useCategories } from "../../hooks/apiHooks";

export default function JobsCatgoriesSwiper() {
  const { error, isLoading, categories } = useCategories();
  if (isLoading) {
    return <div>loading</div>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <>
      <div className={styles.swiperHeader}>
        <h3>Jobs by Category</h3>
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
          {categories.data.map((category) => (
            <SwiperSlide key={category.id} style={{ width: "220px" }}>
              <Link className={styles.card}>
                <img
                  src={category.image}
                  alt={category.name}
                  className={styles.cardImg}
                />
                <div className={styles.overlay}>
                  <h6 className={styles.cardText}>{category.name}</h6>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
