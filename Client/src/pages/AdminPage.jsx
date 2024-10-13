import { useEffect, useState } from "react";
import CompetitionTable from "../components/CompetitionTable";
import axios from "axios";

function AdminPage() {
    const [forms, setForms] = useState  ([]);
    useEffect(() => {
        const formHandler = async() => {
            try{
                const result = await axios.get("http://localhost:3000/api/competitionForm/allForms")
                setForms(result.data.data);
            }
            catch(err){
                console.error(err);
            }
        }
        formHandler();
    }, []);
  return (
    <CompetitionTable data={forms}/>
    //     <section className='bg-gray-800 text-white'>
    // <div className='flex flex-wrap gap-4 sm:justify-start justify-center'>
    //     <button className='p-3 rounded-lg bg-green-700'>BookKaru</button>
    //     <button className='p-3 rounded-lg bg-green-700'>Grab Your Pass</button>
    //     <button className='p-3 rounded-lg bg-green-700'>See Competitions</button>
    //     <button className='p-3 rounded-lg bg-green-700'>Project Registeration</button>
    // </div>
    //       </section>
  )
}

export default AdminPage;