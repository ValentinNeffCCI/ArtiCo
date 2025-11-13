import { CustomButton } from "../buttons/Custom/CustomButton";
import style from "./Filter.module.css";
import usePosition from "../../hooks/usePosition";

const EntrepriseFilter = ({
  defaultCategorie,
  onChange,
  categorieList = [],
  onSubmit,
}) => {
  const position = usePosition();
  return (
    <form onSubmit={onSubmit} className={style["filter"]}>
      <input
        type="search"
        name="name"
        onChange={onChange}
        placeholder="Rechercher"
        defaultValue={position ? position.ville : ""}
      />
      <div>
        <div>
          <div className={style["input_container"]}>
            <label htmlFor="categorie">Domaine d'activité</label>
            <select
              name="categorie_id"
              id="categorie"
              onChange={onChange}
              defaultValue={defaultCategorie ?? ""}
            >
              <option value="">Tous les domaines</option>
              {categorieList.map((categorie) => (
                <option key={categorie.id} value={categorie.id}>
                  {categorie.name}
                </option>
              ))}
            </select>
          </div>
          <div className={style["input_container"]}>
            <label htmlFor="cp">Code postal</label>
            <input
              type="text"
              id="cp"
              name="cp"
              pattern="^[0-9]{5}$"
              maxLength="5"
              inputMode="numeric"
              placeholder="Ex : 67000"
              onChange={onChange}
              defaultValue={position ? position.codesPostaux[0] : ""}
            />
          </div>
        </div>
        <CustomButton
          style={{
            "--bg-color": "var(--primary)",
            "--color": "var(--light)",
            margin: 0,
            padding: ".5rem 2rem",
            height: "fit-content",
          }}
        >
          Filtrer
        </CustomButton>
      </div>
    </form>
  );
};

export default EntrepriseFilter;
