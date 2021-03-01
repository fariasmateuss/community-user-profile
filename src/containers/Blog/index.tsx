import React from 'react';

import { Article } from '../../components/Article';
import { Header } from '../../components/Header';

import useArticles from '../../hooks/useArticles';

import './styles.css';

export function Blog() {
  const articles = useArticles();

  return (
    <main>
      <Header title="Hipsters Tech Post's" emoji="⚡️" returnToProfile />

      <section className="wrapper-articles">
        {articles.map(article => (
          <article key={article.id} className="article">
            <Article articles={article} />
          </article>
        ))}
      </section>
    </main>
  );
}
