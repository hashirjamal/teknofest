import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import axios from "axios"
import Select from '@mui/material/Select';

export default function Form({noOfMembers}) {

    const [leadData,setLeadData] = useState({
        "teamName":"GX warriors",
        "teamLeadName":"Hashir",
        "teamLeadEmail":"hashir@gmail.com",
        "teamLeadNumber":"12345678",
        "teamLeadGender":"male",
        "educationalInstitute":"NED",
        "firstName":"ayan",
        "firstGender":"male",
        "firstEmail":"",
        "thirdName":"shayan",
        "thirdGender":"male",
        "thirdEmail" :"",
        "secondName":"bilal",
        "secondEmail":"bilal@gmail.com",
        "secondGender": "male",

    })

    const [firstData,setFirstData] = useState({
        "firstName":"ayan",
        "firstGender":"male",
        "firstEmail":"",
       
    })
    const [thirdData,setThirdData] = useState({
        
        "thirdName":"shayan",
        "thirdGender":"male",
        "thirdEmail" :""
    })
    const [secondData,setSecondData] = useState({
       
        "secondName":"bilal",
        "secondEmail":"bilal@gmail.com",
        "secondGender": "male",
        
    })
 
    let inpStyle = {
        width:"33%",
        minWidth:"13rem",
        color:"white",
        marginLeft:"1rem"
    }
  return (
    <div className='p-10'>
     
        <TextField id="outlined-basic" label="Name" variant="outlined"  sx={inpStyle} />

     <h3 className="text-2xl font-bold py-6 text-blue-950">Team Lead's Information</h3>

<div className='flex flex-wrap gap-3 my-4 '>
        <TextField id="outlined-basic" label="Name" variant="outlined" value={leadData.teamLeadName}  sx={inpStyle} />
        <TextField id="outlined-basic" label="Phone Number" variant="outlined" value={leadData.teamLeadNumber} sx={inpStyle}/>

</div>
<div className='flex flex-wrap gap-3 my-4 '>
        <TextField id="outlined-basic" label="Email" variant="outlined" sx={inpStyle} value={leadData.teamLeadEmail} />
        <TextField id="outlined-basic" label="Address" variant="outlined"   sx={inpStyle}/>

</div>
<div className='flex flex-wrap gap-3 my-4 '>
<Select sx={inpStyle}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={"Male"}
        label="Gender"
          onChange={(event)=>{setLeadData((p)=>{
            return {
                ...p,   teamLeadGender:event.target.value
            }
          })}}
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
        onChange={(event)=>{setLeadData((p)=>{
            return {
                ...p,   educationalInstitute:event.target.value
            }
          })}}
        >
        <MenuItem value={"Graduation"}>Graduation</MenuItem>
        <MenuItem value={"Masters"}>Master</MenuItem>
        <MenuItem value={"Completed"}>Completed</MenuItem>
        <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
        </Select>


</div>


<h3 className="text-2xl font-bold py-6 text-blue-950">2nd Member's Info</h3>

<div className='flex flex-wrap gap-3 my-4 '>
        <TextField id="outlined-basic" label="Name" variant="outlined" value={leadData.firstName}  sx={inpStyle} />
        <TextField id="outlined-basic" label="Email" variant="outlined" value={leadData.firstEmail} sx={inpStyle}/>

</div>
<Select sx={inpStyle}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={"Male"}
        label="Gender"
          onChange={(event)=>setLeadData((p)=>{
            return {
                ...p,   firstGender:event.target.value
            }
          })}
        >
        <MenuItem value={"Male"}>Male</MenuItem>
        <MenuItem value={"Female"}>Female</MenuItem>
        <MenuItem value={"Other"}>Other</MenuItem>
        </Select>



<h3 className="text-2xl font-bold py-6 text-blue-950">3rd Member's Info</h3>

<div className='flex flex-wrap gap-3 my-4 '>
        <TextField id="outlined-basic" label="Name" variant="outlined" value={leadData.secondName}  sx={inpStyle} />
        <TextField id="outlined-basic" label="Email" variant="outlined" value={leadData.secondEmail} sx={inpStyle}/>

</div>
<Select sx={inpStyle}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={"Male"}
        label="Gender"
          onChange={(event)=>setLeadData((p)=>{
            return {
                ...p,   secondGender:event.target.value
            }
          })}
        >
        <MenuItem value={"Male"}>Male</MenuItem>
        <MenuItem value={"Female"}>Female</MenuItem>
        <MenuItem value={"Other"}>Other</MenuItem>
        </Select>



<h3 className="text-2xl font-bold py-6 text-blue-950">4th Member's Info</h3>

<div className='flex flex-wrap gap-3 my-4 '>
        <TextField id="outlined-basic" label="Name" variant="outlined" value={leadData.thirdName}  sx={inpStyle} />
        <TextField id="outlined-basic" label="Email" variant="outlined" value={leadData.thirdEmail} sx={inpStyle}/>

</div>
<Select sx={inpStyle}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={"Male"}
        label="Gender"
          onChange={(event)=>setLeadData((p)=>{
            return {
                ...p,   thirdGender:event.target.value
            }
          })}
        >
        <MenuItem value={"Male"}>Male</MenuItem>
        <MenuItem value={"Female"}>Female</MenuItem>
        <MenuItem value={"Other"}>Other</MenuItem>
        </Select>




<button onClick={async()=>{

    const res = await axios.post("127.0.0.1:3000/api/competitionForm/create-form",{
        ...leadData
    })

    console.log(res)
}}>Submit</button>



        {/* <MemberInfo n={"Team Lead"} />
        {
            noOfMembers>1&&<MemberInfo n={"1st Member"} />
        }
        {
            noOfMembers>2&&<MemberInfo n={"2nd Member"} />
        }
        {
            noOfMembers>3&&<MemberInfo n={"3rd Member"} />
        } */}
        
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