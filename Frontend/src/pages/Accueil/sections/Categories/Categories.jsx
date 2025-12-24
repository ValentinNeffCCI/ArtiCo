import { useEffect, useState } from "react";
import useAPI from "../../../../hooks/useAPI.jsx";
import classes from "./Categories.module.css";
import { LinkButton } from "../../../../components/buttons/Link/LinkButton.jsx";
import { ArrowRight } from "lucide-react";

export const Categories = () => {

  const { query: callAPI } = useAPI();
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const value = await callAPI("/categorie?limit=6");
      if(value.error){
        setCategories([]);
        return;
      }
      setCategories(value);
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
      <h3 className="itim">De nombreux secteurs</h3>
      <div>
        <div>
          {categories && categories.splice(0, 9).map((category) => (
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
