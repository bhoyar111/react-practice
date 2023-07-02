import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import HeaderComp from '../Header/HeaderComp';

export default function CardAPIsData() {

    const [cards, setCards] = useState([]); 

    const getApisData = () => {
        Axios.get(`https://jsonplaceholder.typicode.com/posts`) 
        .then(res => {
            setCards(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getApisData();
    }, []);

    return (
        <>
            <HeaderComp />
            
            <div className="container">
            <h1 className="text-center">APIs Data</h1>  
                <div className="row">
                    {
                        cards.map((card, ind) => {
                            return (
                                <div className="col-4 mb-3" key={ind}>
                                    <div className="card" style={{width: '15rem'}}>
                                        <div className="card-body">
                                            <h5 className="card-title" key={card.id}>{card.id}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">{card.title}</h6>
                                            <p className="card-text">{card.body}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })  
                    }
                </div>
            </div>
        </>
    )
}

