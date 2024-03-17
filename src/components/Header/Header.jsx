import { Link } from "react-router-dom";
import css from "./Header.module.scss";
import { SearchIcon, HeartIcon, BagIcon } from "../Icons/Icons";

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
                <SearchIcon />
              </label>
              <input id="search" className={css["search_input"]} type="text" />
            </div>
          </li>
          <li>
            <a href="#">
              <HeartIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <BagIcon />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
