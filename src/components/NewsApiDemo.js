import React, { useState } from "react";
import axios from 'axios';

const NewsApiDemo = (props) => {

    const [ data, setData ] = useState(null);

    const clickHandler = async (e) => {
        try {
            const response = 
                await axios.get(
                    'http://newsapi.org/v2/top-headlines?country=kr&apiKey=db4defe7779a4b8c9d3d65b8ce37798e'
                );
            setData(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <button onClick={ clickHandler }>데이터 가져오기 (async/await)</button>
            <hr />
            <h2>
                { data ? JSON.stringify(data) : "push button to request data" }
            </h2>
        </div>
    );

}

export default NewsApiDemo;