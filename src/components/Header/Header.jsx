import { Link } from "react-router-dom";
import css from "./Header.module.scss";

const Header = () => {
  return (
    <header className={css["header_container"]}>
      <Link className={css.logo} to="/">
        IGNAT
      </Link>
      <ul className={css["header_list"]}>
        <li className={css["header_item"]}>
          <Link to="/"></Link>
        </li>
        <li className={css["header_item"]}>
          <a href="#">чоловіки</a>
        </li>
        <li className={css["header_item"]}>
          <a href="#">жінки</a>
        </li>
        <li className={css["header_item"]}>
          <a href="#">аксесуари</a>
        </li>
        <li className={css["header_item"]}>
          <a href="#">акції</a>
        </li>
      </ul>

      <div className={css.search}>
        <ul className={css["search_list"]}>
          <li>
            <div className={css["input_container"]}>
              <label htmlFor="search" className={css["search_label"]}>
                <svg className={css.icons} width={21.5} height={21.5}>
                  <use href="../../../public/sprite.svg#icon-vector"></use>
                </svg>
              </label>
              <input id="search" className={css["search_input"]} type="text" />
            </div>
          </li>
          <li>
            <a href="#">
              <svg className={css.icons} width={24} height={24}>
                <use href="../../../public/sprite.svg#icon-heart"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className={css.icons} width={24} height={24}>
                <use href="../../../public/sprite.svg#icon-bag"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
