import React from 'react'

function Characters({characters}) {
  return (
    <div className="row">
       {
        characters.map((item, index) =>( 

          
        <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
           
            <div className="card" style={{minWidth: "200px"}}> 
                <img src={item.image} alt=""/>
                <div className="card-body">
                   <h5 className="card-title">{item.name}</h5>
                   <hr /> 
                   <p className="card-text">status: {item.status}</p>
                   <p className="card-text">species: {item.species}</p>
                   <p className="card-text">gender: {item.gender}</p>
                   <p className="card-text">origin: {item.origin.name}</p> 
                   <p className="card-text">location: {item.location.name}</p> 
                </div>
            </div>

        </div>  

        ))
       }
    </div>
  )
}

export default Characters
