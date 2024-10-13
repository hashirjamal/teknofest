import { useParams } from "react-router-dom"
import Example from "../components/CarouselBoxes";

function CompetitionPage() {
    const {name} = useParams();
    console.log(name);
  return (<>
  
    <div className="h-screen w-screen">
        <h1>{name}</h1>
        <Example />
    </div>
        </>
  )
}

export default CompetitionPage;

