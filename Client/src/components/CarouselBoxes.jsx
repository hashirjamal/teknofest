import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

function Example(props)
{
    var items = [
      [  {
            name: "Graphics and Design",
            description: "Dive into the world of graphics and animation."
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }],
      [  {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Namedasfdsfsdfsd#2",
            description: "Hello World!"
        }]
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <div className="flex flex-row items-center justify-center align-middle w-screen gap-2 basis-1/2">
                    <Item key={i} item={item[0]} />
                    <Item key={i} item={item[1]} />
                    </div> )
            }
        </Carousel>
    )
}

export default Example;

function Item(props)
{
    return (
        <Paper sx={{width: "40%", minHeight: "80%", padding: "2em"}}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
        </Paper>
    )
}

