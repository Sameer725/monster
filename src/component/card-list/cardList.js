import React from 'react';
import './cardList.css';
import Card from '../card/Card';

const CardList = ({monsters}) =>{

    return(
        <div className='cardList'>
            {
                    monsters.map(monster=>{
                     return <div key = {monster.id}>
                      <Card monster={monster} />
                       </div>
                    })
            }
        </div>
    )
}

export default CardList;