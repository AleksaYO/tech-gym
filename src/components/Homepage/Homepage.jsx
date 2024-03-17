import css from "./HomePage.module.scss";
import img from "../../images/Rectangle.jpg";
import clothes from "./clothes";
import reviwer from "../../images/f1eafcc65076de7a1d51bc0416146be1.jpeg";
import { Link } from "react-router-dom";

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
      <div className={css.offer}>
        <div className={css["offer_box"]}>
          <h2 className={css["offer_title"]}>
            Ми знаємо, що сподобається вашим “великим” друзям!
          </h2>
          <p className={css["offer-sub_title"]}>
            Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію
            термобілизни “Big warm”
          </p>
          <button className={css["offer_btn"]} type="button">
            До каталогу
          </button>
        </div>
        <img width={570} src={img} alt="MAN" />
      </div>
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
                    <svg width={16.5} height={16.5}>
                      <use href="./sprite.svg#icon-heart"></use>
                    </svg>
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
      <div className={css.newsletter}>
        <div className={css["newsletter_wrapper"]}>
          <h2 className={css["newsletter_title"]}>Спіймай всі акції!</h2>
          <p className={css["newsletter_desc"]}>
            Підписуйся на Email розсилку і отримуй інформацію про всі акції, які
            будуть з`влятись у нашому магазині. А у нас їх багато :D
          </p>
          <div className={css["newsletter_input-box"]}>
            <input type="text" placeholder="Введіть" />
            <button type="button">Підписатись</button>
          </div>
        </div>
      </div>
      <div className={css.reviews}>
        <h3 className={css["reviews_title"]}>Відгуги наших клієнтів</h3>
        <ul className={css["reviews_list"]}>
          <li className={css["reviews_item"]}>
            <div className={css["reviews_wrapper"]}>
              <div className={css["image_wrapper"]}>
                <img width={50} height={50} src={reviwer} alt="" />
                <div className={css["reviews_info"]}>
                  <svg width={58} height={12}>
                    <use href="./sprite.svg#icon-rating"></use>
                  </svg>
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
                  <svg width={58} height={12}>
                    <use href="./sprite.svg#icon-rating"></use>
                  </svg>
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
                  <svg width={58} height={12}>
                    <use href="./sprite.svg#icon-rating"></use>
                  </svg>
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
                  <svg width={58} height={12}>
                    <use href="./sprite.svg#icon-rating"></use>
                  </svg>
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
    </main>
  );
};

export default HomePage;
