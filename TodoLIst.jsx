import react,{useState } from "react";
import {TextField,Button,Card,CardContent} from "@mui/material"
export const TodoList=()=>{
    const[fname,setFname]=useState("");
    const[lname,setLname]=useState("");
    const [mname,setMname]=useState("");
    const [email,setEmail]=useState("");
    const[data,setData]=useState([]);
    const Handle=()=>{
        setData([...data,fname,lname,mname,email])
    }
    const Handleremove=(item)=>{
        const Filterd=data.filter((ele)=>ele !==item);
        setData([...Filterd])
    }
    return(
        <div className="main">
            <TextField value={fname} label="First Name" variant="outlined"  onChange={(e)=>setFname(e.target.value)}/>
            <TextField value={lname} label="Last Name" variant="outlined" onChange={(e)=>setLname(e.target.value)}/>
            <br/>
            
            <TextField value={mname} label="Middle Name" variant="outlined" onChange={(e)=>setMname(e.target.value)}/>
<TextField value={email} label="Email" variant="outlined" onChange={(e)=>setEmail(e.target.value)}/>
<br/>
            <Button variant="contained" onClick={Handle } className="btn">ADD</Button>
            {data.map((item)=>(
                <Card>
                    <CardContent>{item} <Button variant="contained"  onClick={()=>Handleremove(item)}   >Delete</Button> </CardContent>
                </Card>
            ))}
        </div>
    )
}