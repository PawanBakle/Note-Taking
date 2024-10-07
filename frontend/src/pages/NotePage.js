import { useState,useEffect } from "react"
import { useParams } from 'react-router-dom';
import ArrowLeft, { ReactComponent } from '../assets/image.png'
import React from 'react'
import Header from '../Components/Header.js'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';





const NotePage = ({match,history}) => {
  let navigate = useNavigate();
    const { id } = useParams();
    let noteId = id
    const [note,setNote ] =  useState(null)




    let getNote  = async()=>{
      if(noteId === 'new')return
        let response = await fetch(`/api/notes/${noteId}/`)
        let data = await response.json()
        setNote(data)
    }
    useEffect(()=>{
      getNote()
      },[noteId])
    let updateNote = async()=>{

      fetch(`/api/notes/${noteId}/update/`,{

          method:"PUT",
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify(note)


      })
    }

    let deleteNote = ()=>{
      fetch(`/api/notes/${noteId}/delete`,{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json'
        }
        
      })
      navigate('/')
    }
    let createNote = () =>{
      fetch(`/api/notes/create/`,{
        method :"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(note)
      })
    }
    let handleSubmit=()=>{
      if (noteId  !== 'new'){
        updateNote()
      }
      else if (noteId  !== 'new' && !note.body){
        deleteNote()
      }
      else if (noteId  == 'new' && note !== null){
        createNote()
      }
     
      navigate('/')
    }
      




  return (
    <>
    <Header/>
    <div className="note">
        <div className="note-header">
           
            <img className="pic" onClick={handleSubmit} src={ArrowLeft} alt="Arrow Left" /> 
            { noteId !== 'new'?(
              <button onClick={deleteNote}>Delete</button>
            ):(
              <button onClick={handleSubmit}>Done</button>
            )}
            
        </div>
      <textarea onChange={(e)=>{setNote({ ...note,'body':e.target.value})}} value={note?.body}>{note?.body}</textarea>
    </div>
    </>
  )
}

export default NotePage
