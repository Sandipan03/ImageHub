import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

function App() {
  const [query, setQuery] = useState('')
  const [searched, setSearched] = useState(false)
 const [res, setRes] = useState([])
 const getImages= ()=>{
  setRes([])
  setSearched(true)
  const api_key="XaWUE1sRwqYbg7cfIbj8Gx_IjGnapF0sn-VgYdlNx50"
   axios.get(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${api_key}`)
   .then((response)=>{
    setRes(response.data.results);
    
   })
   
 }
  return (
    <>
   
      <h1><span className="h_color">I</span>mage<span className="h_color">H</span>ub</h1>
      <div className="input">
      <input type="text" placeholder="Anything on your mind ?" className='input_field' value={query} onChange={(e)=>setQuery(e.target.value)} />
      <ColorButton variant="contained" sx={{width:"50%",mb:"25px"}} onClick={getImages}>Search   <FontAwesomeIcon icon={faMagnifyingGlass} /></ColorButton>
      </div>
     
      <div className="image_section">
      {searched?(
        <div className="images">
        {res.length===0?<h3>Sorry! Nothing was found &#58;&#40;</h3>:<h3>Here's what we found</h3>}
           {res.map((img)=>(
            <img key={img.id} src={img.urls.thumb} alt={img.alt_description} />
          ))}
        </div>
      ):(
        <div></div>
      )}
      </div>
      <div className="footer"></div>
    </>
  )
}

export default App
