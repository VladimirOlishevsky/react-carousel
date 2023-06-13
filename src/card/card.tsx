
interface ICardProps {
    name: string,
    img: string
    cardStyle: string
}

export const Card = ({ name, img, cardStyle }: ICardProps) => {
    return (
        // <article className={cardStyle}>
            
        // </article>
        <div className={`card ${cardStyle}`}>
            <img src={img} alt={name} />
            <h2>{name}</h2>
        </div>
    );
};