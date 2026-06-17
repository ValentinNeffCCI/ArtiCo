import { CustomButton } from "../buttons/Custom/CustomButton";
import classes from "./Filter.module.css";

const EntrepriseFilter = ({
  filters,
  onChange,
  categorieList = [],
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className={classes["filter"]}>
      <input
        type="search"
        name="name"
        onChange={onChange}
        placeholder="Rechercher"
        value={filters.name ?? ""}
      />
      <div>
        <div>
          <div className={classes["input_container"]}>
            <label htmlFor="categorie">Domaine d'activité</label>
            <select
              name="categorieId"
              id="categorie"
              onChange={onChange}
              value={filters.categorieId ?? ""}
            >
              <option value="">Tous les domaines</option>
              {categorieList.map((categorie) => (
                <option key={categorie.id} value={categorie.id}>
                  {categorie.name}
                </option>
              ))}
            </select>
          </div>
          <div className={classes["input_container"]}>
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
              value={filters.cp ?? ""}
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
