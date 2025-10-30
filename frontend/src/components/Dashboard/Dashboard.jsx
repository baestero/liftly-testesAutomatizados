import React from "react";
import styles from "../Dashboard/Dashboard.module.css";
import { Routes, Route } from "react-router-dom";
import Categories from "./Categories";
import SubCategories from "./SubCategories";
import Exercises from "./Exercises";
import AddExercise from "./AddExercise";
import EditExercise from "./EditExercise";

const Dashboard = () => {
  return (
    <section className="home">
      <div className={`${styles.dashboardContainer} animeLeft`}>
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route
            path="categories/:categoryId/subcategories"
            element={<SubCategories />}
          />
          <Route
            path="categories/:categoryId/subcategories/:subCategoryId/exercises"
            element={<Exercises />}
          />

          <Route
            path="categories/:categoryId/subcategories/:subCategoryId/exercises/add"
            element={<AddExercise />}
          />
          <Route
            path="categories/:categoryId/subcategories/:subCategoryId/exercises/:exerciseId"
            element={<EditExercise />}
          />
        </Routes>
      </div>
    </section>
  );
};

export default Dashboard;
