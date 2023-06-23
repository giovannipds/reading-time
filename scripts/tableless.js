const postTimeRead = document.querySelector('.tb-post-time-read');
const article = document.querySelector("article");

// `document.querySelector` may return null if the selector doesn't match anything.
if (postTimeRead && article) {
  // Clear the current reading time
  postTimeRead.innerHTML = ''
  // Position it in a similar position of the other script
  postTimeRead.style.float = 'unset';

  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wourdCount = [...words].length;
  const readingTime = Math.round(wourdCount / 200);
  postTimeRead.textContent = `⏱️ ${readingTime} min read`;
}
