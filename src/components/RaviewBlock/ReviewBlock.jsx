import { RatingIcon } from "../Icons/Icons";
import css from "./ReviewBlock.module.scss";
import reviwer from "../../images/f1eafcc65076de7a1d51bc0416146be1.jpeg";

const ReviewBlock = () => {
  return (
    <div className={css.reviews}>
      <h3 className={css["reviews_title"]}>Відгуги наших клієнтів</h3>
      <ul className={css["reviews_list"]}>
        <li className={css["reviews_item"]}>
          <div className={css["reviews_wrapper"]}>
            <div className={css["image_wrapper"]}>
              <img width={50} height={50} src={reviwer} alt="" />
              <div className={css["reviews_info"]}>
                <RatingIcon />
                <p className={css["reviews_name"]}>Жора Ремінгтон</p>
              </div>
            </div>
            <p className={css["review_text"]}>
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </div>
        </li>
        <li className={css["reviews_item"]}>
          <div className={css["reviews_wrapper"]}>
            <div className={css["image_wrapper"]}>
              <img width={50} height={50} src={reviwer} alt="" />
              <div className={css["reviews_info"]}>
                <RatingIcon />
                <p className={css["reviews_name"]}>Жора Ремінгтон</p>
              </div>
            </div>
            <p className={css["review_text"]}>
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </div>
        </li>
        <li className={css["reviews_item"]}>
          <div className={css["reviews_wrapper"]}>
            <div className={css["image_wrapper"]}>
              <img width={50} height={50} src={reviwer} alt="" />
              <div className={css["reviews_info"]}>
                <RatingIcon />
                <p className={css["reviews_name"]}>Жора Ремінгтон</p>
              </div>
            </div>
            <p className={css["review_text"]}>
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </div>
        </li>
        <li className={css["reviews_item"]}>
          <div className={css["reviews_wrapper"]}>
            <div className={css["image_wrapper"]}>
              <img width={50} height={50} src={reviwer} alt="" />
              <div className={css["reviews_info"]}>
                <RatingIcon />
                <p className={css["reviews_name"]}>Жора Ремінгтон</p>
              </div>
            </div>
            <p className={css["review_text"]}>
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ReviewBlock;
