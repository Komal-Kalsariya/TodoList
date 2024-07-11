import React, { useState } from 'react'

const TodoList = () => {
  let [item,setItem]=useState("")
  let [itemlist,setItemList]=useState([])

const handleData=()=>{
    let data={
      item:item,
      status:false
    }
    setItemList([...itemlist,data])
  }
  const handleDelete=(index)=>{
    let filterdata=itemlist.filter((ele,i)=>i!=index)
    setItemList(filterdata)

  }
  const handlestatus=(index)=>{
    let filterdata=itemlist.map((ele,i)=>{
      if(i==index){
        ele.status=!ele.status
        return ele
      }
      else{
        return ele
      }
    })
    setItemList(filterdata)
  }

  return (

    <div>
      <input type="text" onChange={(e)=>setItem(e.target.value)}/>
      <button onClick={handleData}>add</button>
      {
        itemlist.map((ele,index)=>(
        <div>
           <p style={{color:ele.status?"green":"red"}}>{ele.item}</p>
            <button onClick={()=>handlestatus(index)}>{
            ele.status ?"uncomleted" :"completed"    
            }</button>
            <button onClick={()=>handleDelete(index)}>Delete</button>
          </div>
        ))
      }
    
    </div>
  )
}

export default TodoList