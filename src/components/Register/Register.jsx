import css from "./Register.module.scss";

const RegisterBlock = () => {
  return (
    <div className={css["register_container"]}>
      <div className={css.help}>
        <a className={css["help_tel"]} href="tel:+0989000909">
          098 900 09 09
        </a>
        <a className={css["help_link"]} href="#">
          Допомога
        </a>
      </div>
      <a className={css.sign} href="#">
        Увійти / Зареєструватися
      </a>
    </div>
  );
};

export default RegisterBlock;
