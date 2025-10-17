import {useEffect, useState} from "react";
import useAPI from "../../../../hooks/useAPI.jsx";

export const Categories = ()=>{

    const [categories, setCategories] = useState([]);
    const {callAPI} = useAPI();

    const fetchCategories = async () => {
        const value = await callAPI('/categories');
        setCategories(value);
    }

    useEffect(()=>{
        fetchCategories();
    }, [])

    return(
        <section>
            {
                JSON.stringify(categories)
            }
        </section>
    )
}