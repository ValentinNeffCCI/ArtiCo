import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CustomButton } from "../../../components/buttons/Custom/CustomButton";
import Loader from "../../../components/UX/loaders/Loader";
import useAPI from "../../../hooks/useAPI";
import classes from "./AnswerForm.module.css";
import CustomForm from "../../../components/forms/CustomForm/Displayer/CustomForm";
import useForm from "../../../hooks/useForm";
import { toast } from "react-toastify";
import { useAuth } from "../../../contexts/UserContext";

const AnswerForm = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigation = useNavigate();
  const returnBack = () => navigation(-1);
  const { query: callAPI } = useAPI();
  const [form, setForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { content, changeListener: onChange } = useForm(
    "/soumissions",
    "POST",
    {
      "Votre-adresse-mail-afin-de-pouvoir-être-recontacté-par-le-professionnel": user.email ?? "",
    }
  );

  const getForm = async () => {
    const response = await callAPI("/formulaires/" + id);
    if (response) {
      setForm(response);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await callAPI("/soumissions", "POST", {
        formulaire_id: id,
        submitted_at: new Date(),
        inputs: content,
      });
      if (!response) {
        throw new Error();
      }
      toast.success("Votre formulaire a bien été transmis");
      setTimeout(() => navigation(-1), 1000);
    } catch (exception) {
      toast.error(
        "Une erreur est survenue veuillez vérifier que tous les champs sont bien remplis"
      );
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getForm();
  }, [id]);

  if (!form) return <Loader />;

  return (
    <main className={classes["page"]}>
      {isLoading && <Loader />}
      <CustomButton clickAction={returnBack} className={classes["goBack"]}>
        <ArrowLeft />
        Revenir en arrière
      </CustomButton>
      <h1>{form.name}</h1>
      <CustomForm
        form={!user.email ? [...form.inputs, 
          {
            "type":"email",
            "name":"Votre adresse mail afin de pouvoir être recontacté par le professionnel",
            "required":"true",
            "options":false,
            "formulaire_id":id
          }
        ] : form.inputs}
        onChange={onChange}
        onSubmit={handleSubmit}
        submitButton={"Envoyer"}
        style={{
          width: "70%",
          margin: "1rem auto",
        }}
      ></CustomForm>
    </main>
  );
};

export default AnswerForm;
