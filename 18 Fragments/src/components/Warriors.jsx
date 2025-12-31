import Item from "./Item";

const Warriors = ({wars}) => {
    
    return (
    <ul className="list-group">
        {wars.map((war) => (<Item key={war} warrior={war}></Item>))}
    </ul>
    );
}

export default Warriors;