import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Description = ({movielist}) => {
  const params = useParams()
  const navigate= useNavigate()
  const goHome=()=>{
    navigate("/")
  }
  const movie = movielist.find(el => el.id === +params.movieID)

  return (
    <div>
       <video width="320" height="240" controls>
             <source src="https://www.youtube.com/watch?v=7w_w10HVa54" type="video" /></video>
           {movie.Title}
           {movie.Description}  
     
    </div>
  )
}

export default Description
