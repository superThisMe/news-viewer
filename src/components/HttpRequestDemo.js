import React, { useState } from "react";
import axios from 'axios';

const HttpRequestDemo = (props) => {

    const [ data, setData ] = useState(null);

    const clickHandler = async (e) => {
        try {
            const response = 
                await axios.get('https://jsonplaceholder.typicode.com/todos/2');
            setData(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <button onClick={
                (e) => {
                    axios.get('https://jsonplaceholder.typicode.com/todos/1')
                         .then( (response) => {
                            setData(response.data);
                         });
                }
            }>데이터 가져오기 (raw promise)</button>
            <button onClick={ clickHandler }>데이터 가져오기 (async/await)</button>
            <hr />
            <h2>
                { data ? JSON.stringify(data) : "push button to request data" }
            </h2>
        </div>
    );

}

export default HttpRequestDemo;