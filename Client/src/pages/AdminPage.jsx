import { useEffect } from "react";
import CompetitionTable from "../components/CompetitionTable";

function AdminPage() {
    useEffect(() => {

    }, []);
  return (
    <CompetitionTable />
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