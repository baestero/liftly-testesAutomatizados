import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import stylesBtn from "../Forms/Button.module.css";
import useForm from "../../Hooks/useForm";
import { EXERCISE_EDIT, EXERCISE_GET_ID } from "../../api";
import { useParams } from "react-router-dom";
import Message from "../Helpers/Message";
import useFetch from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";
import Feedback from "../Helpers/Feedback";

const EditExercise = () => {
  const { categoryId, subCategoryId, exerciseId } = useParams();
  const { data, loading, message, request } = useFetch();
  const exercise = useForm();
  const sets = useForm();
  const reps = useForm();
  const maxWeight = useForm();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (categoryId && subCategoryId && exerciseId) {
      const getExerciseById = async () => {
        const token = window.localStorage.getItem("token");
        const { url, options } = EXERCISE_GET_ID(
          token,
          categoryId,
          subCategoryId,
          exerciseId
        );
        await request(url, options);
      };
      getExerciseById();
    }
  }, [categoryId, subCategoryId, exerciseId, request]);

  React.useEffect(() => {
    if (data) {
      exercise.setValue(data.name);
      sets.setValue(data.sets);
      reps.setValue(data.reps);
      maxWeight.setValue(data.maxWeight);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(exercise.value);
    try {
      const token = window.localStorage.getItem("token");
      const { url, options } = EXERCISE_EDIT(
        token,
        categoryId,
        subCategoryId,
        exerciseId,
        {
          name: exercise.value,
          sets: sets.value,
          reps: reps.value,
          maxWeight: maxWeight.value,
        }
      );
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
      <h1 className="title">Editar exercício</h1>

      <form onSubmit={handleSubmit}>
        <Message message={message} />

        {reps.value && reps.value >= 12 && (
          <Feedback
            children={
              "💡 Recomendação: Diminua as repetições e aumente a carga!"
            }
          />
        )}

        {data && (
          <>
            <Input
              label="Exercicio"
              type="text"
              name="exercicio"
              placeholder="Nome do exercício"
              {...exercise}
            />
            <Input
              label="Séries"
              type="text"
              name="series"
              placeholder="Número de séries"
              {...sets}
            />
            <Input
              label="Repetições"
              type="text"
              name="repeticoes"
              placeholder="Número de repetições"
              {...reps}
            />
            <Input
              label="Peso Máximo"
              type="text"
              name="maxWeight"
              placeholder="Peso máximo"
              {...maxWeight}
            />
          </>
        )}

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

export default EditExercise;
