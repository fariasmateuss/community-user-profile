import React from 'react';

import { Article } from '../../components/Article';
import { Header } from '../../components/Header';
import { useArticles } from '../../hooks/useArticles';

import { ContainersWrapper } from '../../styles/components';

export function Blog() {
  const articles = useArticles();

  return (
    <main>
      <Header title="Hipsters Tech Post's" emoji="⚡️" returnToProfile />

      <ContainersWrapper>
        {articles.map(article => (
          <article key={article.id}>
            <Article articles={article} />
          </article>
        ))}
      </ContainersWrapper>
    </main>
  );
}
