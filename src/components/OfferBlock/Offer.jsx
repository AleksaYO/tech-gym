import css from "./Offer.module.scss";
import img from "../../images/Rectangle.jpg";

const OfferBlock = () => {
  return (
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
  );
};

export default OfferBlock;
