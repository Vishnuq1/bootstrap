import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/icons-material/Add';

const ToDoList=()=>{
    const [item ,setItem]= useState("buy an apple");

const itemEvent=(event)=>{
    setItem(event.target.value);

}



    return(

        <>
     <div className='main_div'>
     <div className='center_div'>
     <br />
     <h1 className=" text-center text-bg-danger" >ToDo List</h1>

     <input type="text" placeholder='Enter your task' onChange={itemEvent}  /> 
     <Button className="newBtn "> 
     <AddIcon />
     </Button>

     <ol>
     <li>{item}
     </li></ol>
     <br />

     
<table class="table-primary">...</table>
<table class="table-secondary">...</table>
<table class="table-success">...</table>
<table class="table-danger">...</table>
<table class="table-warning">...</table>
<table class="table-info">...</table>
<table class="table-light">...</table>
<table class="table-dark">...</table>


<tr class="table-primary">...</tr>
<tr class="table-secondary">...</tr>
<tr class="table-success">...</tr>
<tr class="table-danger">...</tr>
<tr class="table-warning">...</tr>
<tr class="table-info">...</tr>
<tr class="table-light">...</tr>
<tr class="table-dark">...</tr>


<tr>
  <td class="table-primary">...</td>
  <td class="table-secondary">...</td>
  <td class="table-success">...</td>
  <td class="table-danger">...</td>
  <td class="table-warning">...</td>
  <td class="table-info">...</td>
  <td class="table-light">...</td>
  <td class="table-dark">...</td>
</tr>
     </div></div>

        </>
    );
}

export default ToDoList;