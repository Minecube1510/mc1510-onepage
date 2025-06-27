/* favics.js */

// favics.js

const iconIcoPath = '../asset/emoji-test.ico';
const iconPngPath = '../asset/emoji-test.png';

const commonAttributes = [
  { rel: 'icon', type: 'image/x-icon' },
  { rel: 'shortcut icon', type: 'image/x-icon' },
  { rel: 'apple-touch-icon', type: 'image/x-icon' },
  { rel: 'apple-touch-icon-precomposed', type: 'image/x-icon' },
  { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '180x180' },
  { rel: 'icon', type: 'image/png' }
];

commonAttributes.forEach(attrs => {
  const link = document.createElement('link');
  const isPng = attrs.type === 'image/png';
  link.href = isPng ? iconPngPath : iconIcoPath;
  
  Object.entries(attrs).forEach(([key, val]) => {
    link.setAttribute(key, val);
  });

  document.head.appendChild(link);
});
