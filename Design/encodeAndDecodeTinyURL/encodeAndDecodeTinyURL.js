/**
 * TinyURL is a URL shortening service where you enter a URL 
 * such as https://leetcode.com/problems/design-tinyurl and it 
 * returns a short URL such as http://tinyurl.com/4e9iAk.

Design the encode and decode methods for the TinyURL service. 
There is no restriction on how your encode/decode algorithm should work. 
You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL 
can be decoded to the original URL.
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const createUrl = () => {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let url = '';
  for (let i = 0; i < 10; i += 1) {
    url += Math.floor(Math.random() * 62);
  }
  return url;
};

const urlMap = new Map();

var encode = function(longUrl) {
  let newUrl = createUrl();
  while (urlMap.has(newUrl)) {
    newUrl = createUrl();
  }
  urlMap.set(newUrl, longUrl);
  return newUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  return urlMap.get(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
