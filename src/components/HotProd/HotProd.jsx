import { Link } from "react-router-dom";
import { HeartIcon } from "../Icons/Icons";
import css from "./HotProd.module.scss";
import clothes from "./clothes";

const HotProd = () => {
  return (
    <div className={css.hot}>
      <h3 className={css["hot_title"]}>Найгарячіші товари</h3>
      <ul className={css["hot_list"]}>
        {clothes.map(({ id, img, title, desc, count, price }) => {
          return (
            <li key={id} className={css["hot_item"]}>
              <Link
                className={css["hot_item-link"]}
                to={`/product/${id}`}
                key={id}
              >
                <div className={css.circle}>
                  <HeartIcon />
                </div>
                <img src={img} alt="#" />
                <h4 className={css["hot_item-title"]}>{title}</h4>
                <p className={css["hot_item-desc"]}>{desc}</p>
                <p className={css["hot_item-count"]}>{count}</p>
                <p className={css["hot_item-price"]}>{price}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HotProd;
