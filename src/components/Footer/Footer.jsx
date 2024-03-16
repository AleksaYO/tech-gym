import css from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css["footer_primery"]}>
        <ul className={css["footer_list"]}>
          <li className={css["footer_info"]}>
            <p className={css.title}>Контакт - центр</p>
            <a href="href=tel:+0989000909">098 900 09 09</a>
            <p>Пн - Пт 09:00 - 21:00</p>
            <p>Пн - Пт 09:00 - 21:00</p>
          </li>
          <li className={css["footer_info"]}>
            <p className={css.title}>Покупцям</p>
            <a href="#">Оплата і доставка</a>
            <a href="#">Повернення</a>
            <a href="#">Питання та відповіді</a>
          </li>
          <li className={css["footer_info"]}>
            <p className={css.title}>Особистий кабінет</p>
            <a href="#">Мої дані</a>
            <a href="#">Повернення</a>
            <a href="#">Улюблені</a>
            <a href="#">Розсилки</a>
          </li>
          <li className={css["footer_info"]}>
            <p className={css.title}>Про компанію</p>
            <a href="#">Про нас</a>
            <a href="#">Стати партнером</a>
            <a href="#">Угода користувача</a>
          </li>
        </ul>
      </div>
      <div className={css.nav}>
        <ul className={css["nav_list"]}>
          <li>
            <a href="#">новинки</a>
          </li>
          <li>
            <a href="#">чоловіки</a>
          </li>
          <li>
            <a href="#">жінки</a>
          </li>
          <li>
            <a href="#">аксесуари</a>
          </li>
          <li>
            <a href="#">акції</a>
          </li>
        </ul>
        <p className={css.watermark}>
          © 2022 — 2023 IGNAT. Усі права захищені.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
