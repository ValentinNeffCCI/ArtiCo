import useForm from "../../../hooks/useForm";
import { useAuth } from "../../../contexts/UserContext";
import { CustomButton } from "../../../components/buttons/Custom/CustomButton";
import style from "./update.module.css";
import { toast, ToastContainer } from "react-toastify";

const UpdateUserForm = ({user}) => {
  const { changeListener, prepare } = useForm("/user/" + user.id, "PUT", {
    name: user.name,
    email: user.email
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await prepare(e);
    if(response.error){
      toast.error(response.error);
      return;
    }
    if (response) {
      toast.success("Modifications effectuées");
    } else {
      toast.error("Une erreur est survenue");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style["form"]}>
      <ToastContainer/>
      <div>
        <label htmlFor="">Mon pseudo :</label>
        <input
          name="name"
          onChange={changeListener}
          required
          type="text"
          placeholder="Pseudo"
          id="name"
          defaultValue={user.name}
          />
      </div>
      <div>
        <label htmlFor="email">E-mail :</label>
        <input
          id="email"
          name="email"
          onChange={changeListener}
          required
          type="email"
          placeholder="E-mail"
          defaultValue={user.email}
          />
      </div>
      <div>
        <label htmlFor="password">Mot de passe</label>
        <input
          id="password"
          name="password"
          onChange={changeListener}
          type="password"
          placeholder="Mot de passe (Laissez vide pour ne pas le modifier)"
          />
      </div>
      <CustomButton
        style={{
          "--bg-color": "var(--primary)",
          "--color": "var(--light)",
        }}
        >
        Modifier
      </CustomButton>
        
    </form>
  );
};

export default UpdateUserForm;
