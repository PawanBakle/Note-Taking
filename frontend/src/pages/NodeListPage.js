import React from 'react'
import ListItem from '../Components/ListItem'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Plus, { ReactComponent } from '../assets/plus.png'
import Header from '../Components/Header.js'
const NodeListPage = () => {
    const [notes,setNote] =  useState([])
    useEffect(()=>{
        getNote()
    },[])
    function getNote(){
        // let response = await fetch('http://127.0.0.1:8000/api/notes/')
        // let data = await response.json()
        
        // setNote(data)
        fetch('/api/notes/')
        .then(response => {
        if (!response.ok) {
             throw new Error('Failed to fetch data');
            }
          return response.json();
            })
            .then(data => {
    // Handle successful data retrieval
            console.log('Data fetched:', data);
            setNote(data)
            })
        .catch(error => {
    // Handle fetch errors
        console.error('Fetch error:', error);
            });
    }

    const showData = notes.map((note,index)=>(
        <ListItem key={index} item = {note} />
    ))
  
    return (
        <>
<Header/>
    <div className='notes'>
      <div className='notes-header'>
          <h2 className='notes-title'>&#9782; Notes</h2>
          <h2 className='notes-count'>{notes.length}</h2>

      </div>
        <div className='notes-list'>
        {showData}
        <Link to={'/notes/new/'}>
        <img className="floating-button plus" src={Plus} alt="Plus" /> </Link>
        
        </div>
        
    </div>
    </>
    )
}

export default NodeListPage
