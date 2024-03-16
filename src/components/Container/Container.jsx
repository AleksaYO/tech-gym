import Header from "../Header/Header";
import RegisterBlock from "../Register/Register";
import css from "./Container.module.scss";

const Container = () => {
  return (
    <div className={css.container}>
      <Header />
    </div>
  );
};

export default Container;
