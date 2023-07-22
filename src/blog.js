import { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";


const Blogs = () => {
    const handleClick = () => {
        alert("Great Shot!");
    }
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.log(error))
    })
    return (
        <div className="blogs">
            <div className="link">
                <Link to="/home">Home</Link>
                <button onClick={handleClick}>Take the shot!</button>
            </div>
            <div className="api">
                {data ? <pre>{JSON.stringify(data, null,2)}</pre> : 'Loading...'}

            </div>
        </div>

    );

}

export default Blogs;