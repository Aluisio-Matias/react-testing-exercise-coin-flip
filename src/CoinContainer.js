import React, { useState } from "react";
import Coin from "./Coin";
import "./CoinContainer.css";
import { choice } from "./helpers";
import head_img from "./head_img.jpg";
import tail_img from "./tail_img.jpg";

function CoinContainer(props) {
    const [coin, setCoin] = useState(null);
    const [headCount, setHeadCount] = useState(0);
    const [tailCount, setTailCount] = useState(0);

    const handleClick = () => {
        const newCoin = choice(props.coins);
        setCoin(newCoin);
        if (newCoin.side === "head") {
            setHeadCount(oldCount => oldCount + 1);
        } else {
            setTailCount(oldCount => oldCount + 1);
        }
    };

    const currCoin = coin ? (
        <Coin side={coin.side} imgSrc={coin.imgSrc} />
    ) : null;

    return (
        <div className="CoinContainer">
            <h2>Let's flip a coin!</h2>
            {currCoin}
            <button className="flip-button" onClick={handleClick}>Flip me!</button>
            <p>
                Out of {headCount + tailCount} flips, there have been {headCount} heads
                and {tailCount} tails.
            </p>
        </div>
    );
}


CoinContainer.defaultProps = {
    coins: [
        {
            side: "head",
            imgSrc: head_img
        },
        {
            side: "tail",
            imgSrc: tail_img
        }
    ]
};

export default CoinContainer;
