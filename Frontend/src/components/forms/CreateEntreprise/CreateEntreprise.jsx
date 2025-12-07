import React, { useEffect, useState } from "react";
import useForm from "../../../hooks/useForm";
import { useAuth } from "../../../contexts/UserContext";
import useAPI from "../../../hooks/useAPI";
import { Navigate, useNavigate } from "react-router-dom";
import CustomForm from "../CustomForm/Displayer/CustomForm";
import style from "./style.module.css";
import { Upload } from "lucide-react";
import placeholder from "../../../assets/photos/placeholder.jpeg";
import { toast, ToastContainer } from "react-toastify";

const CreateEntreprise = ({
  defaultValues = false,
  method = "POST",
  url = "/entreprise",
}) => {
  const { user } = useAuth();
  const { content, changeListener, prepare } = useForm(
    url,
    method,
    defaultValues
      ? defaultValues
      : {
          email: user.email,
        }
  );
  const API = useAPI();
  const [categories, setCategories] = useState([]);

  const navigation = useNavigate();

  const retrieveCategories = async () => {
    const response = await API.query("/categorie");
    if (response) {
      setCategories(response);
    } else {
      return <Navigate to={"/profil"} />;
    }
  };

  const [image, setImage] = useState(defaultValues && defaultValues.image ? `${API.url}/${defaultValues.image}` : false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    retrieveCategories();
  }, []);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    changeListener(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await prepare(e);
    console.log(response);
    if (response.error) {
      return toast.error(response.error);
    }
    return navigation("/profil");
  };

  const inputs = [
    {
      name: "name",
      type: "text",
      id: 1,
      required: true,
      label: "Nom de l'entreprise",
      value: content.name ? content.name : "",
      is_fix: false
    },
    {
      name: "address1",
      type: "text",
      id: 2,
      required: true,
      label: "Adresse de l'entreprise",
      value: content.address1 ? content.address1 : "",
      is_fix: false
    },
    {
      name: "address2",
      type: "text",
      id: 3,
      required: false,
      label: "Complément d'adresse",
      value: content.address2 ? content.address2 : "",
      is_fix: false
    },
    {
      name: "city",
      type: "text",
      id: 8,
      required: true,
      label: "Ville",
      value: content.city ? content.city : "",
      is_fix: false
    },
    {
      name: "cp",
      type: "text",
      id: 9,
      required: true,
      label: "Code postal",
      value: content.cp ? content.cp : "",
      is_fix: false
    },
    {
      name: "phone",
      type: "phone",
      id: 4,
      required: true,
      label: "Téléphone de l'entreprise",
      value: content.phone ? content.phone : "",
      is_fix: false
    },
    {
      name: "email",
      type: "email",
      id: 5,
      required: true,
      label: "Email de l'entreprise",
      value: content.email ? content.email : user ? user.email : "",
      is_fix: false
    },
    {
      name: "description",
      type: "textarea",
      id: 5,
      required: false,
      label: "Bio de l'entreprise",
      value: content.description ? content.description : "",
      is_fix: false
    },
  ];

  return (
    <CustomForm
      form={inputs}
      onChange={changeListener}
      onSubmit={handleSubmit}
      style={{
        width: "50%",
        margin: "0 auto",
        padding: "0 0 2rem 0",
        display: "flex",
        flexDirection: "column",
      }}
      submitButton={
        defaultValues
          ? "Enregistrer les modifications"
          : "Je créé mon entreprise"
      }
    >
      <ToastContainer/>
      {categories.length !== 0 && (
        <div className={[style["input"], style["select"]].join(" ")}>
          <label htmlFor="categorieId">Catégorie de votre entreprise :</label>
          <select
            type="file"
            name="categorieId"
            id="categorieId"
            onChange={changeListener}
            defaultValue={defaultValues && defaultValues.categorieId}
            required
          >
            <option value="">Toutes les options</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className={[style["input"], style["file"]].join(" ")}>
        <h4>Photo de votre entreprise :</h4>
        <label htmlFor="image">
          <Upload />
        </label>
        <input
          type="file"
          name="image"
          id="image"
          onChange={handleImageChange}
          style={{
            opacity: 0,
            height: 0.1,
            width: 0.1,
          }}
        />
      </div>
      <figure
        style={{
          width: "50%",
          margin: "0 auto",
          border: "1px solid var(--dark)",
        }}
      >
        <label htmlFor="image" className="pointer">
          <img
            src={typeof image === "string" ? image : placeholder}
            alt="photo de l'entreprise"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </label>
      </figure>
    </CustomForm>
  );
};

export default CreateEntreprise;
