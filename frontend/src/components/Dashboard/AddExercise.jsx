import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import stylesBtn from "../Forms/Button.module.css";
import useForm from "../../Hooks/useForm";
import { EXERCISE_POST } from "../../api";
import { useParams } from "react-router-dom";
import Message from "../Helpers/Message";
import useFetch from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";
import styles from "../Dashboard/CrudExercises.module.css";
import Feedback from "../Helpers/Feedback";

const AddExercise = () => {
  const { categoryId, subCategoryId } = useParams();
  const { loading, message, request } = useFetch();
  const exercise = useForm();
  const sets = useForm();
  const reps = useForm();
  const maxWeight = useForm();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = window.localStorage.getItem("token");
      const { url, options } = EXERCISE_POST(token, categoryId, subCategoryId, {
        name: exercise.value,
        sets: sets.value,
        reps: reps.value,
        maxWeight: maxWeight.value,
      });
      const { response } = await request(url, options);

      if (response.ok) {
        navigate(-1);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="animeLeft">
      <h1 className="title">Adicionar novo</h1>

      <form onSubmit={handleSubmit}>
        <Message message={message} />

        {reps.value && reps.value >= 12 && (
          <Feedback
            children={
              "💡 Recomendação: Diminua as repetições e aumente a carga!"
            }
          />
        )}

        <Input
          label="Exercicio"
          type="text"
          name="exercicio"
          placeholder="Nome do exercicio"
          {...exercise}
        />
        <div className={styles.inputContainer}>
          <Input
            label="Séries"
            type="text"
            name="series"
            placeholder="Numero de séries"
            {...sets}
          />
          <Input
            label="Repeticoes"
            type="text"
            name="repeticoes"
            placeholder="Número do repetições"
            {...reps}
          />
          <Input
            label="Peso Máximo"
            type="text"
            name="Peso maximo"
            placeholder="Peso máximo"
            {...maxWeight}
          />
        </div>
        {loading ? (
          <Button className={stylesBtn.button} disabled>
            Adicionar
          </Button>
        ) : (
          <Button className={stylesBtn.button}>Adicionar</Button>
        )}
      </form>
    </div>
  );
};

export default AddExercise;
