import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import styles from "./CategorySwiper.module.css"; // Add your CSS for styling if needed
import { Link } from "react-router";
import { useCategories } from "../../hooks/apiHooks";
import SpinnerMini from "../Spinner/SpinnerMini";

export default function CategoriesSwiper() {
  const { error, isLoading, categories } = useCategories();
  if (isLoading) {
    return <SpinnerMini />;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div className={styles.categoriesSwiper}>
      <Swiper
        className={`${styles.swiper} ${styles.swiperWrapper}`}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={"auto"}
      >
        {categories.data.map((category) => (
          <SwiperSlide key={category.id} style={{ width: "fit-content" }}>
            <Link>
              <div className={styles.card}>
                <img
                  src={category.image}
                  alt={category.name}
                  className={styles.cardImg}
                />
                <div>
                  <p className={styles.cardText}>{category.name}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
