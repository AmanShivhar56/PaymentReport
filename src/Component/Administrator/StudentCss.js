import { makeStyles, StylesContext } from '@mui/styles';

const useStyles = makeStyles({

 


maincontainer :{
 display:'flex',
 justifyContent:'center',
 alignItems:'center',
 marginTop:20,
 

 
 
  
  
},

subcontainer:{
  width:600,
  background:'rgb(223, 230, 233)',
  padding: 15 ,
  borderRadius:20,
 
  marginTop:30,
},

buttondiv:{
  display:'flex',
  justifyContent:'spaceround'
},

heading :{
 textalign:'center',
 fontWeight:'bold',
}
,

formStyle:{
display:'flex',
alignItems:'center',
justifyContent:'Left',  
fontSize:16,
fontStyle:'bold',

padding:20,
marginLeft:20,
borderRadius:30,

}
,
ButtonStyle:{
  display:'flex',
alignItems:'center',
justifyContent:'Right', 
marginTop:5,
color:'#00b894',
padding:15,


}
 

});
export{useStyles}