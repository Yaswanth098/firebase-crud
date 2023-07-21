import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import  {firestore}  from "../firebase";
import CardView from "./CardView";
const Jobs=()=>{
    const [info, setInfo] = useState([]);
    var [currentId, setCurrentId] = useState('')
    const fetchPost = async () => {
       
        await getDocs(collection(firestore, "firebase"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                    setInfo(newData);                
                console.log(info, newData);
            })
       
    }
    useEffect(()=>{
        fetchPost();
    }, [])

    const addOrEdit = obj => {
        if (currentId == '')
        firestore.child('firebase').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
        else
        firestore.child(`firebase/${currentId}`).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
    }
    const onDelete = key => {
        if (window.confirm('Are you sure to delete this record?')) {
            debugger
            firestore.child(`contacts/${key}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                }
            )
        }
    }
    console.log(info);
    return (
        <>
        {info.map((k)=>{
            <CardView Job_title={k.Job_title} experince={k.Experience} Job_type={k.Job_type} Location={k.Location}
            Salary={k.salery} Skills={k.Skills} editvalue={setCurrentId(id)} deletevalue={ onDelete(id)}/>
        })}
           </>
    );
}
export default Jobs