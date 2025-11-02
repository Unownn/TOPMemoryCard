import { useEffect, useState } from "react";
import Card from "./Card.jsx";
import "./content.css"

function Content({ score, onScoreUpdate, onScoreReset }){
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [clickedCards, setClicked] = useState([]);
    
    // Fetch the JSON file and load the window upon finishing
    useEffect(() => {
    fetch("/cards.json")
      .then((res) => res.json())
      .then((data) => setCards(data), setLoading(false))
      .catch((err) => console.error(err));
    }, []);

    function handleClick(id){
        // Duplicate clicked
        if (clickedCards.includes(id)){
            setClicked([]);
            onScoreReset();
        }

        // Good click
        else{
            const nextScore = score + 1;
            setClicked(prev => [...prev, id]);
            onScoreUpdate(nextScore);
        }

        // Shuffle every click
        const shuffled = [...cards].sort(() => Math.random() - 0.5);
        setCards(shuffled);
    }

    if (loading) return <div>Loading…</div>;

    // Create all cards
    return(
        <div className="content">
            {cards.map(card => (
                <Card key={card.id} 
                      id={card.id}
                      imgsrc={card.img} 
                      name={card.name} 
                      handleClick={handleClick}/>
            ))}
        </div>  
    )
}

export default Content;