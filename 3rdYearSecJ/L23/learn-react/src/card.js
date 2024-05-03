import Counter from './counter'
function Card(x){
    return (
        <div>
            <h2>{x}</h2>
            <p>card desc</p>
             {Counter()}
        </div>
    )

}


export default Card;