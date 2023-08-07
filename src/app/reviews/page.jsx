"use client"
import { useState, useEffect } from "react"
import AddReviews from "../components/AddReviews"
import { useSelector } from 'react-redux'

export default function ListReviews() {
    //Url d'api pour recupere-ajouter-modifier des temoignages dans le back-end
    const apiUrl = 'http://localhost:5000/reviews'

    const reviews = useSelector(state => state.posts) // Variable state pour stoker les reviews se trouvant deja dans le back-end 

    // Cette variable permettra d'indiquer au fornulaire comment id doit se comporter si il a ete appele pour une modification ou un simple ajout de temoignage
    const [info, setInfo] = useState('some value');
    const [update, setUpdate] = useState(false);

    const [formOpen, setFormOpen] = useState(false);

    const afficherForm = (nom) => {
        if (typeof nom === 'string') {
            setInfo(`${nom}`);
            setUpdate(true);
        } else {
            setInfo('add');
            setUpdate(false);
        }
        setFormOpen(!formOpen);
    };





    // Useffect: fonction execute a demarrage du front-end pour recuprer les reviews dans le back-end
    // useEffect(() => {
    //     axios.get(apiUrl)
    //         .then((response) => setReviews(response.data.data))
    //         .catch((error) => console.error('Error fetching data:', error));
    // }, []);



    //Supprimer un temoigange 
    const supprimerTemoignage = async (nom) => {
        try {
            await axios.delete(`${apiUrl}/${encodeURIComponent(nom)}`);
            console.log("Suppression effctue avec success!");

            location.reload();
        } catch (error) {
            console.error("Erreur de suppression de  temoignage", error);
        }
    };




    return (
        <>
            <div class="flex flex-col w-full h-screen self-start">


                <h1>Temoignages</h1>

                <div class="w-full h-auto ">

                    {reviews.map(review =>
                        <div class="flex items-center px-4 m-2 border-b-2" key={review.nom}>

                            <div class="flex flex-row  items-center w-full gap-4 ">
                                <div class="font-bold ">{review.nom}  {review.prenom}</div>
                                <div class="w-full" >"{review.message}" </div>
                            </div>

                            <div class="flex flex-col  sm:flex-row gap-2 text-sm">
                                <button className='bg-blue-700 text-white' onClick={() => afficherForm(review.nom)} >Modifier</button>
                                <button disabled={reviews.length < 2} className='bg-red-500 text-white' onClick={() => supprimerTemoignage(review.nom)}>Supprimer</button>
                            </div>
                        </div>)}

                </div>
                <div class="w-auto text-center m-4">
                    <button class=' w-fit bg-green-500 text-white' onClick={afficherForm}>Temoigner</button>

                </div>

                {!formOpen ? (
                    <>
                    </>
                ) : (
                    <AddReviews info={info} update={update} />
                )}

            </div>
        </>
    )
}