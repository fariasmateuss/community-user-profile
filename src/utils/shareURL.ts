type ShareURLProps = {
  title: string;
  text: string;
  url: string;
};

export function shareURL({ text, title, url }: ShareURLProps) {
  const trigger = document.querySelector(`.share`) as HTMLDivElement;

  trigger.addEventListener(`click`, async () => {
    try {
      await navigator.share({
        title,
        text,
        url,
      });
    } catch (err) {
      console.log(`Your browser doesn't support sharing. Error: ${err}`);
    }
  });
}
