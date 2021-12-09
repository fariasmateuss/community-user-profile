import { toast } from 'react-toastify';

type ShareURLProps = {
  title: string;
  text: string;
  url: string;
};

export async function shareURL({ text, title, url }: ShareURLProps) {
  try {
    await navigator.share({
      title,
      text,
      url,
    });
  } catch {
    const notify = toast(
      `Ah... the Share API is not supported in this browser — try Chrome or Edge!`,
    );

    return notify;
  }
}
