import "./SingleCard.css";

function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="cardfront" />
        <img
          className="back"
          src="/images/Backface4.jpg"
          alt="cardback"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
export default SingleCard;
