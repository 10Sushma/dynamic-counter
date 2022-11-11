import { useState } from 'react'; 
import './App.css'; 
import { ListComponent } from './component/ListComponent'; 

function App() {  
  const [components, setComponents] = useState([]); 
  const[submit,setSubmit]=useState(false)
  const[add,setadd]=useState(false)

  function addComponent() { 
    components.push(1)   
    setComponents([...components])
    setadd(true)
    setSubmit(false)
    
  }  
  return (    
    <div style={{paddingRight:"2rem",width:"15rem",border:"1px solid blue",margin:"2rem"}}>          
      {components.map((item, i) => ( <ListComponent text={i} submit={submit} add={add}/> ))} 
      <button style={{backgroundColor:"blue",color:"white",alignItems:"center",marginBottom:"1rem", marginLeft:"3rem",width:"10rem"}} onClick={addComponent} >Add</button>
   <div>  <button style={{backgroundColor:"blue",color:"white",alignItems:"center",marginBottom:"1rem", marginLeft:"3rem", width:"10rem"}} onClick={()=>{setSubmit(true);setadd(false)}}>Submit</button>  </div> 
       
    </div>     
  ) 
  
} 

export default App;