import React, { useState } from "react";
import axios from 'axios';

const DaumApiDemo = (props) => {

    const [ data, setData ] = useState(null);

    const clickHandler = async (e) => {
        try {
            const response = 
                await axios.get(
                    'https://dapi.kakao.com/v3/search/book?target=title&query=미움받을 용기',
                    {
                        headers: {
                            Authorization: "KakaoAK bad5b790d814af25a91eacc779b62f8f"
                        }
                    });
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

export default DaumApiDemo;