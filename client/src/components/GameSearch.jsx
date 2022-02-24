import {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom';

export default function GameSearch({ games, showSelectedGame }) {
    const history = useHistory();
    const handleOnClick = (book) =>{
        showSelectedBook(book)
        history.push('/FullBook');
    }
    return (
        <div>
          {books.map((game) => (
            <div key={game.id}>
              <h4>{game.title}</h4>
                              
              <br />
              <p>
                Author: {" "} 
                {game.author}
              </p>
              <br />
              <p onClick={()=> handleOnClick(game)} title="click here for more information">
                Description: {" "}
                {game.description.slice(0, 250)}...
              </p>
              <br />
              <hr></hr>
              <hr />
            </div>
          ))}
        </div>
      );
    
}

