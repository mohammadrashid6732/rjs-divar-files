import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Layouts.module.css";

function Layouts({ children }) {
  return (
    <>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
    </>
  );
}

export default Layouts;
