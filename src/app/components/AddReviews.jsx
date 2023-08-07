
import { useState, useEffect } from "react";

import { useDispatch } from 'react-redux'
import { postAdded } from "@/features/posts/postsSlice";

export default function AddReviews({ info, update }) {

    const dispatch = useDispatch()

    // variable state pour stoker les valeurs de champs du formulaire
    const [state, setState] = useState({
        prenom: "",
        nom: "",
        message: "",
    });

    //modifier un temoigange 
    const modifierTemoignage = () => {
        try {
            if (state.nom && state.message) {
                dispatch(
                    postAdded({
                        state
                    })
                )
            }
            console.log("Modification effctue avec success!");

        } catch (error) {
            console.error("Erreur de modification de  temoignage", error);
        }
    };




    // Cette fonction gere la mise a jour du state a chaque changement dans le formulaire
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    //Cette fonction gere la soumission du formulaire pour les nouveaux temoignages
    const handleSubmit = async (e) => {
    e.preventDefault();
        try {

            // Si il s'agit d'un update :
            if (update === true) {
                modifierTemoignage(info)
            }
            else { // Si il s'agit d'un nouvel ajout :
                if (state.nom && state.message){
                dispatch(
                    postAdded({
                        nom: state.nom,
                        prenom: state.prenom,
                        message: state.message
                    })
                )
                console.log("Nouveau Temoignage!"); //Message de confirmation
                }
            }

            setState({ //mise a jour des entre du formulaire 
                prenom: "",
                nom: "",
                message: "",
            });
        } catch (error) {
            console.error("Erreur Soumission Temoignage", error);
        }
    };

    return (
        <div className="flex flex-col items-center jusity-center mt-4 ">
            <div className="drop-shadow-2xl bg-gray-300 rounded-xl">
                <h2 className="text-lg font-bold"> Fais un Temoignage </h2>
                <form onSubmit={handleSubmit}>
                    <div className="h-auto flex items-center px-8 py-3">
                        <div className="w-full px-2 border-b-2">
                            <label className="text-center font-bold" htmlFor="prenom">
                                Prenom
                            </label>
                        </div>
                        <div className="w-full">
                            <input
                                className="w-auto text-center h-8 focus:bg-gray-100"
                                type="text"
                                name="prenom"
                                id="prenom"
                                placeholder="Entrer le prenom"
                                value={state.prenom}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="h-auto flex items-center px-8 py-3">
                        <div className="w-full px-2 border-b-2">
                            <label className="text-center font-bold" htmlFor="nom">
                                Nom
                            </label>
                        </div>
                        <div className="w-full">
                            <input
                                className="w-auto text-center h-8 focus:bg-gray-100"
                                type="text"
                                name="nom"
                                id="nom"
                                placeholder="Entrer le nom"
                                value={state.nom}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="h-auto flex items-center px-8 py-3">
                        <div className="w-full px-2 border-b-2">
                            <label className="text-center font-bold" htmlFor="message">
                                Message
                            </label>
                        </div>
                        <div className="w-full">
                            <input
                                className="w-auto text-center h-8 focus:bg-gray-100"
                                type="text"
                                name="message"
                                id="message"
                                placeholder="Entrer le message"
                                value={state.message}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button className="w-fit bg-green-500 text-white m-4" type="submit">
                        Confirmer
                    </button>
                </form>
            </div>
        </div>
    );
}
