
import Navbar from './Navbar';
import React from 'react';
import { useEffect, useState } from 'react';
import Characters from './Characters';
import Pagination from './Pagination';
import { useAuth0 } from '@auth0/auth0-react';

function Home() {

const { isAuthenticated, isLoading } = useAuth0();
   

const [characters, setCharacters] = useState([]);
const [info, setInfo] = useState({});

const initialUrl ="https://rickandmortyapi.com/api/character";
  
const fetchCharacters = (url) =>{

 fetch(url)
 .then(response => response.json())
 .then(data => {
  setCharacters(data.results)
  setInfo(data.info)
 })
 .catch(error => console.log(error))

};

const onPrevious = () => {
  fetchCharacters(info.prev);
}

const onNext = () => {
  fetchCharacters(info.next);
}


  useEffect(()=> {
    fetchCharacters(initialUrl);
  }, [])

   
 
 if(isLoading) {
 
  return <div>Loading...</div>
 
}

 return (
      isAuthenticated && (

    
   <div className="container mt-5">
      <Navbar brand="Rick & Morty APP" />   
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
      <Characters characters={characters} />
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
    </div> 
   
    

   )
  );
}

export default Home;
