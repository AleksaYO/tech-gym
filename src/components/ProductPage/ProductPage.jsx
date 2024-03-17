import { useParams } from "react-router-dom";
import clothes from "../Homepage/clothes";
import css from "./ProductPage.module.scss";
import reviwer from "../../images/f1eafcc65076de7a1d51bc0416146be1.jpeg";

const ProductPage = () => {
  const { id } = useParams();
  const card = clothes.filter((item) => item.id === +id);
  return (
    <main className={css["product_page"]}>
      <p className={css.path}>
        головна - чоловіки - одяг - термобілизна - atlantic - чоловічий
        термокостюм atlantic MW0MW32780
      </p>
      {card.map((item) => {
        return (
          <div className={css["product_card"]}>
            <div className={css["primary_info"]}>
              <ul className={css["product_list"]}>
                <li key={item.id}>
                  <img src={item.img} alt="" />
                </li>
                <li key={item.id}>
                  <img src={item.img} alt="" />
                </li>
                <li key={item.id}>
                  <img src={item.img} alt="" />
                </li>
                <li key={item.id}>
                  <img src={item.img} alt="" />
                </li>
              </ul>
            </div>
            <div className={css["sec_info"]}>
              <h3 className={css.title}>{item.title}</h3>
              <p className={css.desc}>{item.desc}</p>
              <p className={css.price}>{item.price}</p>

              <div className={css["size_block"]}>
                <p className={css["size_title"]}>оберіть розмір</p>
                <ul className={css["size_list"]}>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className={css["color_block"]}>
                <p className={css["color_title"]}>оберіть колір</p>
                <ul className={css["color_list"]}>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className={css["info_block"]}>
                <h4 className={css["info_title"]}>інформація про товар</h4>

                <ul className={css["info_list"]}>
                  <li>
                    <p>
                      Легкість та еластичність для максимальної свободи рухів.
                    </p>
                    <p>
                      Забудьте про невигоди - наш термокостюм розроблений з
                      урахуванням вашої активності.
                    </p>
                  </li>
                  <li>
                    <p>Дихаючі тканини для оптимальної вентиляції.</p>
                    <p>
                      Забудьте про потовиділення - наш термокостюм дозволяє
                      шкірі "дихати", забезпечуючи вам комфорт під час активної
                      діяльності.
                    </p>
                  </li>
                  <li>
                    <p>
                      Терморегуляція забезпечить вам тепло в будь-якій ситуації
                    </p>
                    <p>
                      Сучасні технології дозволяють нашому термокостюму
                      адаптуватися до вашого тіла та навколишнього середовища.
                    </p>
                  </li>
                </ul>
              </div>
              <div className={css["button_block"]}>
                <div className={css["button_wrapper"]}>
                  <button type="button">оформити замовлення</button>
                  <button type="button">купити у кредит</button>
                </div>
                <div className={css.icons}>
                  <svg width={30} height={30}>
                    <use href="/sprite.svg#icon-heart"></use>
                  </svg>
                  <svg width={30} height={30}>
                    <use href="/sprite.svg#icon-bag"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className={css.reviews}>
        <h3 className={css["reviews_title"]}>Відгуги наших клієнтів</h3>
        <ul className={css["reviews_list"]}>
          <li className={css["reviews_item"]}>
            <div className={css["reviews_wrapper"]}>
              <div className={css["image_wrapper"]}>
                <img width={50} height={50} src={reviwer} alt="" />
                <div className={css["reviews_info"]}>
                  <svg width={58} height={12}>
                    <use href="/sprite.svg#icon-rating"></use>
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
                    <use href="/sprite.svg#icon-rating"></use>
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
                    <use href="/sprite.svg#icon-rating"></use>
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
                    <use href="/sprite.svg#icon-rating"></use>
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

      <div className={css.hot}>
        <h3 className={css["hot_title"]}>Найгарячіші товари</h3>
        <ul className={css["hot_list"]}>
          {clothes.map(({ id, img, title, desc, count, price }) => {
            return (
              <li key={id} className={css["hot_item"]}>
                <a href="#" className={css["hot_item-link"]}>
                  <div className={css.circle}>
                    <svg width={16.5} height={16.5}>
                      <use href="/sprite.svg#icon-heart"></use>
                    </svg>
                  </div>
                  <img src={img} alt="#" />
                  <h4 className={css["hot_item-title"]}>{title}</h4>
                  <p className={css["hot_item-desc"]}>{desc}</p>
                  <p className={css["hot_item-count"]}>{count}</p>
                  <p className={css["hot_item-price"]}>{price}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default ProductPage;
