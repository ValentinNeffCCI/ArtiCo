import { useEffect, useRef, useState } from 'react';
import classes from './AdminCategories.module.css'
import useAPI from '../../../hooks/useAPI';
import useForm from '../../../hooks/useForm';
import { CustomButton } from '../../../components/buttons/Custom/CustomButton';
import { Save } from 'lucide-react';
import { toast } from 'react-toastify';
import DeleteConfirmation from "../../../components/modales/DeleteConfirmation/DeleteConfirmation.jsx";
import EntiteList from "../../../components/listes/users/EntiteList.jsx";
import { UpdateCategorie } from '../../../components/modales/UpdateCategorie/UpdateCategorie.jsx';

const AdminCategories = () => {
    const inputRef = useRef();
    const { query: callAPI } = useAPI();
    const { content, changeListener, prepare } = useForm('/categories', "POST");
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(false);
    const [showUpdateModale, setShowUpdateModale] = useState(false);

    const getCategories = async () => {
        const response = await callAPI('/categories');
        if (response) {
            setCategories(response);
        }
    }

    const modifyCategorie = (categorie) => {
        setCategories(prev => prev.map(c => c.id === categorie.id ? categorie : c))
        setShowUpdateModale(false);
    }

    const closeCategorieToModify = () => {
        setShowUpdateModale(false)
    }

    const chooseCategorieToModify = (categorie) => {
        setShowUpdateModale(categorie)
    }

    useEffect(() => {
        getCategories();
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        if (content.name.length == 0) {
            toast.error("Veuillez rentrer un nom valable")
        }
        const response = await prepare(e);
        if (response) {
            setCategories(prev => [...prev, response])
            inputRef.current.value = "";
        } else {
            toast.error("Veuillez rentrer un nom valable")
        }
    }

    const deleteCategory = async (category) => {
        const response = await callAPI('/categories/' + category.id, "DELETE");
        if (response) {
            const copy = [...categories].filter((c) => c.id !== category.id)
            setCategories(copy);
        }
        setSelectedCategory(false);
    };

    const confirmDeletion = async (category) => {
        setSelectedCategory(category);
    }

    const closeModale = () => {
        setSelectedCategory(false);
    }

    return (
        <main className={classes["page"]}>
            {
                showUpdateModale &&
                <UpdateCategorie categorie={showUpdateModale} onClose={closeCategorieToModify} onModify={modifyCategorie}/>
            }
            <h1>Liste des catégories</h1>
            {
                selectedCategory &&
                <DeleteConfirmation onDelete={deleteCategory} onClose={closeModale} entite={selectedCategory}>
                    Voulez-vous vraiment supprimer {selectedCategory.name} ?
                </DeleteConfirmation>
            }
            <form onSubmit={onSubmit}>
                <input type="text" name="name" placeholder='Nouvelle catégorie' onChange={changeListener} ref={inputRef} />
                <CustomButton className={classes['form-btn']}>
                    <span>Enregistrer</span>
                    <Save />
                </CustomButton>
            </form>
            {
                categories &&
                <EntiteList entites={categories} onDelete={confirmDeletion} onChoose={chooseCategorieToModify} />
            }
        </main>
    );
}

export default AdminCategories;