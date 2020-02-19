import React from 'react';

import NewsList from './NewsList';
import NewsCategories from './NewsCategories';

const NewsPage = (props) => {
   // Route로 지정된 컴포넌트인 경우 사용할 수 있는 property
  const { match } = props;
  const category = match.params.category || 'all'

  return (
    <div>
      <NewsCategories />
      <NewsList category={ category } />
    </div>
  );
}

export default NewsPage;
