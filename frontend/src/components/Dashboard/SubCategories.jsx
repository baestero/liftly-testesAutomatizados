import React from "react";
import { useParams, Link, Routes, Route } from "react-router-dom";
import { SUBCATEGORY_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import styles from "../Dashboard/Categories.module.css";
import Message from "../Helpers/Message";

const SubCategories = () => {
  const { categoryId } = useParams();
  const { data, loading, message, request } = useFetch();

  const categoryIcons = {
    "68c0e4d09615344715b20eca": "/Assets/superiores2.png",
    "68c0e4d89615344715b20ecc": "/Assets/inferiores.png",
    "68c0e4f59615344715b20ece": "/Assets/abdomen.png",
    "68c0e4fb9615344715b20ed0": "/Assets/cardio.png",
  };

  React.useEffect(() => {
    if (categoryId) {
      const listSubCategories = async () => {
        const token = window.localStorage.getItem("token");
        const { url, options } = SUBCATEGORY_GET(token, categoryId);
        await request(url, options);
      };
      listSubCategories();
    }
  }, [categoryId, request]);

  return (
    <div className="animeLeft">
      <h1 className="title">Subcategorias</h1>

      <Message message={message} />
      {loading && <div className="loading"></div>}

      <div className={styles.categoryContainer}>
        {data &&
          data.map((subCategory) => (
            <Link
              key={subCategory._id}
              to={`/dashboard/categories/${categoryId}/subcategories/${subCategory._id}/exercises`}
            >
              <div className={styles.category}>
                <img
                  className={styles.img}
                  src={categoryIcons[categoryId]}
                  alt=""
                />
                <p>{subCategory.name}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SubCategories;
