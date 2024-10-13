import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';

export default function Form({noOfMembers}) {

 
    let inpStyle = {
        width:"33%",
        minWidth:"13rem",
        color:"white",
        marginLeft:"1rem"
    }
  return (
    <div className='p-10'>
        {/* <h3 className="text-3xl font-bold py-6 text-blue-950">Registration Form</h3>
         <TextField id="outlined-basic" label="Team Name" variant="outlined"  />

            <h3 className="text-2xl font-bold py-6 text-blue-950">Team Lead Information</h3>

    <div className='flex flex-wrap gap-3 my-4 '>
            <TextField id="outlined-basic" label="Name" variant="outlined"  sx={inpStyle} />
            <TextField id="outlined-basic" label="Phone Number" variant="outlined"  sx={inpStyle}/>

    </div>
    <div className='flex flex-wrap gap-3 my-4 '>
            <TextField id="outlined-basic" label="Email" variant="outlined" sx={inpStyle} />
            <TextField id="outlined-basic" label="Address" variant="outlined"  sx={inpStyle}/>

    </div>
    <div className='flex flex-wrap gap-3 my-4 '>
    <Select sx={inpStyle}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={"Male"}
            label="Gender"
            //   onChange={handleChange}
            >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
    <Select sx={inpStyle}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={"Graduation"}
            label="Education Level"
            //   onChange={handleChange}
            >
            <MenuItem value={"Graduation"}>Graduation</MenuItem>
            <MenuItem value={"Masters"}>Master</MenuItem>
            <MenuItem value={"Completed"}>Completed</MenuItem>
            <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
            </Select>


    </div>


    <h3 className="text-2xl font-bold py-6 text-blue-950">Team Lead's Educational Info</h3>


    <div className='flex flex-wrap gap-3 my-4 '>
            <TextField id="outlined-basic" label="Email" variant="outlined" sx={inpStyle} />
            <TextField id="outlined-basic" label="Address" variant="outlined"  sx={inpStyle}/>

    </div> */}


{/* <h3 className="text-2xl font-bold py-6 text-blue-950">Team Lead Information</h3>
<div className='flex flex-wrap gap-3 my-4 '>
<Select sx={inpStyle}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"Male"}
          label="Gender"
        //   onChange={handleChange}
        >
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"Other"}>Other</MenuItem>
        </Select>
<Select sx={inpStyle}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={"Graduation"}
          label="Education Level"
        //   onChange={handleChange}
        >
          <MenuItem value={"Graduation"}>Graduation</MenuItem>
          <MenuItem value={"Masters"}>Master</MenuItem>
          <MenuItem value={"Completed"}>Completed</MenuItem>
          <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
        </Select>
<h3 className="text-2xl font-bold py-6 text-blue-950">Team Lead Information</h3>


</div> */}

        <MemberInfo n={"Team Lead"} />
        {
            noOfMembers>1&&<MemberInfo n={"1st Member"} />
        }
        {
            noOfMembers>2&&<MemberInfo n={"2nd Member"} />
        }
        {
            noOfMembers>3&&<MemberInfo n={"3rd Member"} />
        }
        
    </div>
  )
}

const MemberInfo = ({n})=>{
    let inpStyle = {
        width:"33%",
        minWidth:"13rem",
        color:"white",
        marginLeft:"1rem"
    }
   return ( <div>

       <h3 className="text-2xl font-bold py-6 text-blue-950">{n}'s Information</h3>

    <div className='flex flex-wrap gap-3 my-4 '>
            <TextField id="outlined-basic" label="Name" variant="outlined"  sx={inpStyle} />
            <TextField id="outlined-basic" label="Phone Number" variant="outlined"  sx={inpStyle}/>

    </div>
    <div className='flex flex-wrap gap-3 my-4 '>
            <TextField id="outlined-basic" label="Email" variant="outlined" sx={inpStyle} />
            <TextField id="outlined-basic" label="Address" variant="outlined"  sx={inpStyle}/>

    </div>
    <div className='flex flex-wrap gap-3 my-4 '>
    <Select sx={inpStyle}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={"Male"}
            label="Gender"
            //   onChange={handleChange}
            >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
    <Select sx={inpStyle}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={"Graduation"}
            label="Education Level"
            //   onChange={handleChange}
            >
            <MenuItem value={"Graduation"}>Graduation</MenuItem>
            <MenuItem value={"Masters"}>Master</MenuItem>
            <MenuItem value={"Completed"}>Completed</MenuItem>
            <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
            </Select>


    </div>


    <h3 className="text-2xl font-bold py-6 text-blue-950">{n}'s Educational Info</h3>


    <div className='flex flex-wrap gap-3 my-4 '>
            <TextField id="outlined-basic" label="Email" variant="outlined" sx={inpStyle} />
            <TextField id="outlined-basic" label="Address" variant="outlined"  sx={inpStyle}/>

    </div>

    </div>)
}