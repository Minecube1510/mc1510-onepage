/* favics.js */

const faviconPath = 'https://replit.com/@minekubus84s/Trying-Ujicoba#asset/emoji-test.ico';
const commonAttributes = [
  { rel: 'icon', type: 'image/x-icon', },
  { rel: 'shortcut icon', type: 'image/x-icon', },
  { rel: 'apple-touch-icon', type: 'image/x-icon', },
  { rel: 'apple-touch-icon-precomposed', type: 'image/x-icon', },
  { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '180x180', },
  { rel: 'icon', type: 'image/png', }
];

commonAttributes.forEach(attrs => {
  const link = document.createElement('link');
  link.href = faviconPath;
  Object.entries(attrs).forEach(([key, val]) => {
    link.setAttribute(key, val);
  });
  document.head.appendChild(link);
});

