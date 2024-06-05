import React from "react"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';

//Ska vi göra kortkategorier dynamiskt eller ska vi bara hardcoda in kategorier?

function Card({ title, imgUrl }) {
    return (
        <div className="card custom-card">
            <img src={imgUrl} className="card-img-top" alt="Food Pictures :)" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Ratings?</p>
                <a href="#" className="btn btn-primary">Visa mer info...</a>
            </div>

        </div>
    )
}

function ManResult() {

    //Test för kort

    const Resturantcards = [
        { id: 1, title: "Delicious Kebabs", imgUrl: "none" },
        { id: 2, title: "Tasty Vegan", imgUrl: "none" }
    ];

    const Beachcard = [
        { id: 1, title: "Vespuchi Beach", imgUrlg: 'none' },
        { id: 2, title: "StrandBlabla", imgUrl: 'none' },
        { id: 3, title: "Fools Gold", imgUrl: 'none' }
    ]


    return (
        <div>

            <div className="resurant">
                <h1>Resturanger</h1>
                <div className="filter-box">
                    <Button>Fisk</Button>
                    <Button>Kött</Button>
                    <Button>Veganskt</Button>
                </div>
                <div className="card-box">
                    {Resturantcards.map(card => (
                        <Card key={card.id} title={card.title} imgUrl={card.imgUrl} />
                    ))}
                </div>
            </div>
            <div className="beaches">
                <h1>Stränder</h1>
                <div className="filter-box">
                    <Button>Familj</Button>
                    <Button>Nakenbad</Button>
                </div>
                <div className="card-box">
                    {Beachcard.map(card => (
                        <Card key={card.id} title={card.title} imgUrl={card.imgUrl} />
                    ))}
                </div>
            </div>

        </div>
    )
}



export default ManResult;