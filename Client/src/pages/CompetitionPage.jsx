import { useParams } from "react-router-dom";
import Example from "../components/CarouselBoxes";
import { useEffect, useState } from "react";
import axios from "axios";

function CompetitionPage() {
    const { id } = useParams();
    const [competition, setCompetition] = useState();

    useEffect(() => {
        const competitionHandler = async () => {
            try {
                const result = await axios.get(
                    `http://localhost:3000/api/competitions/${id}`
                );
                setCompetition(result.data.data.competitionData);
                console.log(result);
            } catch (err) {
                console.error(err);
            }
        };
        competitionHandler();
    }, []);
    console.log(id);

    if (!competition) {
        return (
            <div className="h-screen w-screen">
                <h1>Competition not loaded yet!</h1>
            </div>
        );
    }

    return (
        <div>
            <section className="bg-gray-800 h-screen text-white">
                <div className="flex justify-around">
                    <img
                        src={competition?.imageURL}
                        className="sm:w-1/3 rounded-lg drop-shadow-lg"
                    />
                    <div className="flex flex-col align-middle justify-center sm:text-left text-center gap-3 sm:w-1/2 ">
                        <h3 className="text-4xl font-bold  border-left border-lime-400">
                            Category: {competition?.category}
                        </h3>
                        <h1 className="text-6xl font-bold">
                            {competition.title}
                        </h1>
                        <h1 className="text-xl font-bold">
                           Entry Fees: Rs. {competition.price} / member
                        </h1>
                        <p>{competition?.timings}</p>
                        <p>Expo Center Karachi, Hall 3 & 4</p>
                        <p>{competition?.description}</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CompetitionPage;
