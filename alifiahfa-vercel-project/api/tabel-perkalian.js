export default function handler(req, res) {
  let html = '<h2>Tabel Perkalian 1 - 10</h2><table border="1" cellpadding="10">';
  for (let i = 1; i <= 10; i++) {
    html += '<tr>';
    for (let j = 1; j <= 10; j++) {
      html += `<td>${i} x ${j} = ${i * j}</td>`;
    }
    html += '</tr>';
  }
  html += '</table>';
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
