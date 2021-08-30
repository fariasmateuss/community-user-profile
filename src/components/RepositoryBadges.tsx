type RepositoryBadgesProps = {
  language: string;
};

export function RepositoryBadges({ language }: RepositoryBadgesProps) {
  const languageClass = language ? language.toLowerCase() : 'other';

  return (
    <>
      <span className={`language ${languageClass}`} />
      <p>{language}</p>
    </>
  );
}
