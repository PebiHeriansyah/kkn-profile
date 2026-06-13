const https = require('https');

https.get('https://id.wikipedia.org/wiki/Universitas_Bengkulu', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const matches = data.match(/https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^\s"'>]+(?:jpg|jpeg|png)/gi);
    console.log(Array.from(new Set(matches)).join('\n'));
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
