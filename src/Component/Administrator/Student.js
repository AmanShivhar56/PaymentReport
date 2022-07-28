import React ,{useState} from  "react"
import {TextField,Grid,Button}from"@mui/material"
import {useStyles} from "./StudentCss"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Student(props){

    const classes=useStyles()
   
    var navigate=useNavigate()
    
    var dispatch= useDispatch()
   
     const[Date,setdate]=useState('')
    const [Amount,setamount]=useState('')
    const [Payment,setpayment]=useState('')
    const [Remark ,setremark]=useState('')
   
   
    
    const  handleChange=(event)=>{
        console.log(event.target.value);

    }

    
    

    const handleSubmit=()=>{

        var body ={dateid:Date,amount:Amount,payment:Payment,remark:Remark}
        dispatch({type:'ADD_REPORT',payload:[Date,body]})

    }


    const handleDisplayClick=()=>{
      
        navigate("/displayAll")
    }

 return(
        <div className={classes.maincontainer}>
            <div className={classes.subcontainer}>
            <h3 className={classes.heading} ><u>Receipt Details</u> </h3>
            
            <form >
      <div className={classes.formStyle } >
        <label   htmlFor="name">Date*</label>
        <input  style={{borderRadius:'5px', height:'28px',width:'35%',marginLeft:'103px' }}  onChange={(event)=>{setdate(event.target.value)
        alert(event.target.value)
            
        }
     } id="name" type="date" />
      </div>
      <div   className={classes.formStyle }>
        <label htmlFor="email">Amount*</label>
        <input  style={{borderRadius:'5px', height:'28px',width:'70%',marginLeft:'80px' }}  onChange={(event)=>setamount(event.target.value)} id="email" type="Amount" />
      </div>

   <div  className={classes.formStyle } >
        <label htmlFor="message">PaymentMode*:</label>
        <select style={{borderRadius:'5px', height:'28px',width:'50%',marginLeft:'35px' }} onChange={(event)=>{setpayment(event.target.value)
         alert(event.target.value)  }    
        }>
            <option  value="Paytm">Paytm</option>
            
            <option value="Cash on delivery">Cash on Delivery</option>
            <option value="phonepay">phonepay</option>
            <option value="mango">Mango</option>
          </select>
     </div>
     
      <div  className={classes.formStyle } >
        <label htmlFor="message">Remark*</label>
        <input   style={{borderRadius:'5px', height:'28px',width:'70%',marginLeft:'80px' }} onChange={(event)=>setremark(event.target.value)}id="class" type="payment" />

      </div>

     
    </form>

   <div className={classes.ButtonStyle }>
    <Button variant ="contained"   onClick={handleSubmit}  >Submit</Button>
<Button variant ="contained"  style={{marginLeft:7}} >Clear</Button>{' '}
<Button variant ="contained"   style={{marginLeft:7}} onClick={handleDisplayClick} >DisplayAll</Button>
</div>      
        </div>
        </div>





       
    )
}