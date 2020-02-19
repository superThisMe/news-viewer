import React from "react";
import styled from "styled-components";

// .css
// .scss : node-sass
// css-in-js (별도의 파일이 아닌 자바스크립트 내부에 스타일 적용) : styled-component

// 지정된 스타일이 적용된 div 컴포넌트 만들기
const NewsItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const NewsItem = (props) => {

    const { article } = props;
    const { title, description, url, urlToImage } = article;
    return (
        <NewsItemBlock>
            <div className="thumbnail">
                <a href={ url }>
                    <img src={ urlToImage } alt="news" />
                </a>
            </div>
            <div className="contents">                
                <h2>
                    <a href={ url }>{ title }</a>
                </h2>
                <p>{ description }</p>
            </div>
        </NewsItemBlock>
    );

}

export default NewsItem;