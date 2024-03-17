import css from "./HomePage.module.scss";
import ReviewBlock from "../RaviewBlock/ReviewBlock";
import NewsletterBlock from "../NewsletterBlock/NewsletterBlock";
import HotProd from "../HotProd/HotProd";
import OfferBlock from "../OfferBlock/Offer";

const HomePage = () => {
  return (
    <main>
      <div className={css.hero}>
        <div className={css["title_box"]}>
          <h1 className={css.title}>Швидше. Вище. Сильніше.</h1>
          <p className={css.sub_title}>Разом із Nike</p>
        </div>
        <div className={css["sale_box"]}>
          <div className={css.sale}>
            <p className={css["sale_text"]}>Знижки до 40%</p>
          </div>
          <p className={css["sale-sub_text"]}>Залишився лише тиждень</p>
        </div>
      </div>
      <OfferBlock />
      <HotProd />
      <NewsletterBlock />
      <ReviewBlock />
    </main>
  );
};

export default HomePage;
