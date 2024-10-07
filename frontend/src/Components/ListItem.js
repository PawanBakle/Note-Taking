import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header.js'
const ListItem = ({item}) => {
  return (
    <>
    
    <div>

        <Link to={`/notes/${item.id}`}>
        <div className='notes-list-item'>
        <h2 >{item.body}</h2>

        </div>
        
        </Link>  
      
    </div>
    </>
  )
}

export default ListItem
