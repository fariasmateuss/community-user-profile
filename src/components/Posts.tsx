import Image from 'next/image';

import { Post } from '@shared/types';

import * as S from '@styles/components/Posts';

type PostsProps = {
  posts: Post[];
};

export function Posts({ posts }: PostsProps) {
  return (
    <>
      <S.Wrapper>
        {(posts ?? []).map(post => (
          <S.PostContainer key={post.id}>
            <Image
              src={post.cover_image}
              alt={post.title}
              quality={100}
              width={448}
              height={167}
              className="next-image thumbnail"
            />

            <S.PostContent>
              <S.PostTitle
                href={post.canonical_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {post.title}
              </S.PostTitle>
              <S.PostDescription>{post.description}</S.PostDescription>
            </S.PostContent>

            <S.PostWrap>
              <S.PostPreview>
                <a
                  href={post.canonical_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-full-article"
                >
                  Read full article
                </a>

                <span className="read-time">
                  {post.reading_time_minutes} min read
                </span>
              </S.PostPreview>
            </S.PostWrap>
          </S.PostContainer>
        ))}
      </S.Wrapper>
    </>
  );
}
