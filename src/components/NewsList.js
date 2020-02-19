import React, { useEffect, useState } from "react";
import styled from "styled-components";

import NewsItem from './NewsItem';
import axios from "axios";

// 지정된 스타일이 적용된 div 컴포넌트 만들기
const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = (props) => {

  const { category } = props;
  const [ articles, setArticles ] = useState(null);

  //useEffect : 초기화 작업에 대한 이벤트 처리기 등록 (mount)
  //            상태 변화에 대한 이벤트 처리기 등록 (update)
  useEffect( () => {
    const fetchArticles = async (e) => {
      try {
        const query = category === "all" ? '' : `&category=${category}`;
        const response = 
            await axios.get(
                `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=db4defe7779a4b8c9d3d65b8ce37798e`
            );
        setArticles(response.data.articles);
      } catch (e) {
          console.log(e);
      }
    }
    fetchArticles();
  }, [category]);
  
  if (!articles) {
    return null;
  }

  return (
      <NewsListBlock>
          {
            articles.map( (article) => {
              return <NewsItem key={ article.url } article={ article } />
            })
          }
      </NewsListBlock>
  );

}

export default NewsList;