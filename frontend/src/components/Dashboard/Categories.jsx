import React from "react";
import styles from "../Dashboard/Categories.module.css";
import { CATEGORY_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Message from "../Helpers/Message";
import { Link } from "react-router-dom";

const categoryIcons = {
  "68c0e4d09615344715b20eca": "/Assets/superiores2.png",
  "68c0e4d89615344715b20ecc": "/Assets/inferiores.png",
  "68c0e4f59615344715b20ece": "/Assets/abdomen.png",
  "68c0e4fb9615344715b20ed0": "/Assets/cardio.png",
};

const Categories = () => {
  const { data, loading, message, request } = useFetch();

  React.useEffect(() => {
    const listarCategories = async () => {
      const token = window.localStorage.getItem("token");
      const { url, options } = CATEGORY_GET(token);
      await request(url, options);
    };

    listarCategories();
  }, [request]);

  return (
    <div>
      <h1 className="title">Categorias</h1>

      <Message message={message} />
      {loading && <div className="loading"></div>}

      <div className={styles.categoryContainer}>
        {data &&
          data.map((category) => (
            <Link
              key={category._id}
              to={`categories/${category._id}/subcategories`}
            >
              <div className={styles.category}>
                <img
                  className={styles.img}
                  src={categoryIcons[category._id]}
                  alt=""
                />
                <p>{category.name}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Categories;
