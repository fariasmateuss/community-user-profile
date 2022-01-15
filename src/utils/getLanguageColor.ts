export function getLanguageColor(language: string) {
  const languageClass = language ? language.toLowerCase() : `other`;

  return `var(--${languageClass})`;
}
