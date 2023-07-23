// import { useEffect, useState } from "react";
// import { Link, json } from "react-router-dom";
import { styled } from 'styled-components';
import text from '../Public/ohs.jpg'



const Blogs = () => {


    const Home = styled.div`
    height:50vh;
    background-color=red
    `
    const Imag = styled.div`
    height:770px;
    width:550px
    poition:relative;
    justify-content=center;
    background-image=url(${text});

    `
    // const handleClick = () => {
    //     alert("Great Shot!");
    // }
    // const [data, setData] = useState(null)
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(json => setData(json))
    //         .catch(error => console.log(error))
    // })
    // return (
    //     <div className="blogs">
    //         <div className="link">
    //             <Link to="/home">Home</Link>
    //             <button onClick={handleClick}>Take the shot!</button>
    //         </div>
    //         <div className="api">
    //             {data ? <pre>{JSON.stringify(data, null,2)}</pre> : 'Loading...'}

    //         </div>
    //     </div>

    // );
    return (
        // <h1>heyyyy</h1>
        <Home>
            <h1>heyyyy</h1>
            <Imag>
                <img src="{text}" alt="" />
            </Imag>

        </Home>
    );

}

export default Blogs;