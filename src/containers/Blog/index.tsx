import React from 'react';

import Articles from '../../components/Article';
import Header from '../../components/Header';

import useArticles from '../../hooks/useArticles';

import './styles.css';

function Blog() {
  const articles = useArticles();

  return (
    <main>
      <Header title="Hipsters Tech Post's" emoji="⚡️" returnToProfile />

      <section className="wrapper-articles">
        {articles.map(article => (
          <article key={article.id} className="article">
            <Articles articles={article} />
          </article>
        ))}
      </section>
    </main>
  );
}

export default Blog;
