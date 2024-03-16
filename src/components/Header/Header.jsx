import css from "./Header.module.scss";

const Header = () => {
  return (
    <div className={css["header_container"]}>
      <a className={css.logo} href="#">
        IGNAT
      </a>
      <ul className={css["header_list"]}>
        <li className={css["header_item"]}>
          <a href="#">новинки</a>
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
              <label for="search" className={css["search_label"]}>
                <svg className={css.icons} width={21.5} height={21.5}>
                  <use href="../../../public/symbol-defs.svg#icon-vector"></use>
                </svg>
              </label>
              <input id="search" className={css["search_input"]} type="text" />
            </div>
          </li>
          <li>
            <a href="#">
              <svg className={css.icons} width={24} height={24}>
                <use href="../../../public/symbol-defs.svg#icon-heart"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg className={css.icons} width={24} height={24}>
                <use href="../../../public/symbol-defs.svg#icon-bag"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
