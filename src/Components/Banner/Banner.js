import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../Constants/constants'
import './Banner.css'
import axios from '../axios'
import YouTube from 'react-youtube'


function Banner() {
  const [movie, setMovie] = useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      // console.log(response.data.results[0])
      
      setMovie(response.data.results[9])
      
      
       
    })         

  },[])
  console.log(movie);


  
  const [urlId,setUrlId]=useState('')
 

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{  
      console.log(response.data);

      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{  
        console.log('Trailer not available')
      }
    })
  }


  
  return (
    <div 
    style={{backgroundImage: `url(${movie?  imageUrl+movie.backdrop_path : ""})`}} className='banner'>
        <div className="content">
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className="banner_buttons">
                <button onClick={()=>handleMovie(movie.id)} className='button'> <i class="fa-solid fa-play"></i> Play</button>
                <button className='button'><i class="fa-solid fa-circle-info"></i>  More Info</button>

            </div>
            <h1 className='discription'> {movie ? movie.overview : ""}</h1>

        </div>
        {urlId &&   <YouTube videoId={urlId.key} opts={opts}/>}
        <div className="fade">

        </div>
    </div>
  )
}

export default Banner