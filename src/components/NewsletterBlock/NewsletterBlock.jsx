import css from "./Newsletter.module.scss";

const NewsletterBlock = () => {
  return (
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
  );
};

export default NewsletterBlock;
