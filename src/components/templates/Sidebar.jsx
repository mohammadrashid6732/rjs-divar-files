import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../services/admin";
import styles from "../../styles/Sidebar.module.css";

function Sidebar({ categories }) {
  return (
    <div className={styles.sidebar}>
      <h4>دسته ها </h4>
      <ul>
        {categories.data.map((category) => (
          <li key={category._id}>
            <img src={`${category.icon}.svg`} />
            <p>{category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
