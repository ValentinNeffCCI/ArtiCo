import { useEffect, useState } from "react";
import useAPI from "../../../../hooks/useAPI.jsx";
import classes from "./Categories.module.css";
import { LinkButton } from "../../../../components/buttons/Link/LinkButton.jsx";
import { ArrowRight } from "lucide-react";
import categories from '../../../../datas/categories.json'

export const Categories = () => {
  const { query: callAPI } = useAPI();
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const value = await callAPI("/categories?limit=6");
      value ? setCategories(value.splice(0, 6)) : setCategories([]);
    } catch (err) {
      setCategories([]);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (categories.length == 0) return;

  return (
    <section className={classes["categories"]}>
      <h3>Des domaines divers et variés</h3>
      <div>
        <div>
          {categories.splice(0, 9).map((category) => (
            <LinkButton
              key={category.id}
              className={classes["categorie"]}
              path={`/rechercher?categorie=${category.id}`}
              name={"categorie"}
            >
              {category.name}
            </LinkButton>
          ))}
        </div>
        <LinkButton name={"other"} path={"/rechercher"}>
          <span>Et beaucoup d'autres</span>
          <ArrowRight />
        </LinkButton>
      </div>
    </section>
  );
};
