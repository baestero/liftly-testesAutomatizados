import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { EXERCISE_DELETE, EXERCISE_GET } from "../../api";
import Message from "../Helpers/Message";
import styles from "../Dashboard/Exercises.module.css";
import Feedback from "../Helpers/Feedback";
import Logo from "../../assets/bolt.svg?react";

const Exercises = () => {
  const [feedback, setFeedback] = React.useState(null);
  const { categoryId, subCategoryId } = useParams();
  const { data, loading, message, request, setData } = useFetch();

  React.useEffect(() => {
    if (categoryId && subCategoryId) {
      const listExercises = async () => {
        const token = window.localStorage.getItem("token");
        const { url, options } = EXERCISE_GET(token, categoryId, subCategoryId);
        await request(url, options);
      };
      listExercises();
    }
  }, [categoryId, subCategoryId, request]);

  const removeExercise = async (exerciseId) => {
    if (window.confirm("Deseja realmente remover esse exercicio?")) {
      try {
        const token = window.localStorage.getItem("token");
        const { url, options } = EXERCISE_DELETE(
          token,
          categoryId,
          subCategoryId,
          exerciseId
        );
        const { response } = await request(url, options);

        if (response.ok) {
          setData(data.filter((exercise) => exercise._id !== exerciseId));
          setFeedback(true);
          setTimeout(() => {
            setFeedback(false);
          }, 2000);
        }
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  return (
    <div className="animeLeft">
      <div className={styles.exerciseHeader}>
        <h1 className="title">Exercícios</h1>
        <Link
          to={`/dashboard/categories/${categoryId}/subcategories/${subCategoryId}/exercises/add`}
        >
          <img src="/Assets/mais (2).png" alt="" />
        </Link>
      </div>

      <Message message={message} />

      {loading && <div className="loading"></div>}

      {feedback && <Feedback children={"🗑️ Exercicio removido com sucesso!"} />}

      <div className={styles.exerciseContainer}>
        {data &&
          data.map((exercise) => (
            <div key={exercise._id} className={styles.exercise}>
              <div className={styles.exerciseTitle}>
                <h3>{exercise.name}</h3>
                <Logo className={styles.bolt} />
              </div>

              <div className={styles.exerciseStats}>
                <p>
                  Séries: <span>{exercise.sets}</span>
                </p>
                <p>
                  Repetições: <span>{exercise.reps}</span>
                </p>
                <p>
                  PR: <span>{exercise.maxWeight}kg</span>
                </p>
              </div>
              <div className={styles.crudIcons}>
                <Link
                  to={`/dashboard/categories/${categoryId}/subcategories/${subCategoryId}/exercises/${exercise._id}`}
                >
                  <img src="/Assets/editar-texto.png" alt="" />
                </Link>
                <img
                  onClick={() => removeExercise(exercise._id)}
                  src="/Assets/excluir.png"
                  alt=""
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Exercises;
