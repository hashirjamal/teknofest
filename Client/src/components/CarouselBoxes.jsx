import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

function Example({competitions})
{
    competitions && console.log(competitions);


    return (
        <Carousel>
            {
                competitions && competitions.map( (item, i) => <div className="flex flex-row items-center justify-center align-middle w-screen gap-2 basis-1/2">
                    <Item key={i} id={item._id} title={item.title} category={item.category} description={item.description} price={item.price} timings={item.timings} image={item.imageURL} />
                    {/* <Item key={i} item={item[1]} /> */}
                    </div> )
            }
        </Carousel>
    )
}

export default Example;

function Item({title, category, description, price, timings, image})
{
    return (
        <Paper sx={{width: "80%", minHeight: "80%", padding: "2em", backgroundColor: "grey"}}>
            <img src={image} alt="" className='w-1/2 h-full absolute top-0 left-0' />
            <div className='relative top-[50%] left-[50%]'>
            <h2>{category}</h2>
            <h2>{title}</h2>
            <h2>{price}</h2>
            <h2>{timings}</h2>
            <p>{description}</p>
        
            </div>
            </Paper>
    )
}

