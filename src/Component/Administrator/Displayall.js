import React, { useState } from "react";
import { Image, Table } from "react-bootstrap";
import {useDispatch,useSelector} from 'react-redux'
import "./Display.css";


function Display(props) {


  const[studentId,setStudentId]=useState('')
  const [amount,setAmount]=useState('')
  const [Class,setClass]=useState('')



  var students =useSelector(state=>state.report)
  // console.log(Object.values(students))
   var studentvalues=Object.values(students)
  //  alert(JSON.stringify(studentvalues))
  

  return (
    <table border={1} cellspacing={'0.2px'} style={{width:'80%'}}> 
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Payment</th>
          <th>remark</th>
         
        </tr>
      </thead>
      <tbody>
        {studentvalues.map((item) => (
          <tr align="center">
            <td align="center">{item.dateid}</td>
            <td  align="center">{item.amount}</td>
            <td   align="center">{item.payment}</td>
            <td   align="center">{item.remark}</td>
           
            
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Display;
