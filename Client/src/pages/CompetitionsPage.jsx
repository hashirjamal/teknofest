
import { useEffect, useState } from "react";
import gif from "../assets/Images/website.gif"
import Example from "../components/CarouselBoxes";

function CompetitionsPage() {
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    const handleCompetitions = async() => {
      try{
        let result = await axios.get("http://localhost:8000/api/competitions");
        result = result.data;
        setCompetitions(result);
      }
      catch(err){
        console.error(err);
      }
    }
  })

  return (
    <div>
        <section className='bg-gray-800 text-white'>
            <div className='flex flex-wrap align-middle justify-center'>
<div className='flex flex-col align-middle justify-center sm:text-left text-center gap-3 sm:w-1/2'>
    <h3 className='text-4xl font-bold'>Competitions </h3>
    <h1 className='text-6xl font-bold'>TeknoFest Pakistan</h1>
    <p>12th and 13th October</p>
    <p>Expo Center Karachi, Hall 3 & 4</p>
    <p>Empowering innovation, igniting future leaders. Teknofest Pakistan – where technology meets limitless possibilities</p>
</div>
            <img src={gif} className='sm:w-1/2'/>
            </div>

            <div>
              <Example competitions={competitions} />
            </div>
        </section>

    </div>
  )
}

export default CompetitionsPage;