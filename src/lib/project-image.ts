export function projectImageSrc(image?: string): string {
  if (!image) return "";
  if (/^https?:\/\//.test(image)) return image;
  return `${import.meta.env.BASE_URL}${encodeURIComponent(image)}`;
}
