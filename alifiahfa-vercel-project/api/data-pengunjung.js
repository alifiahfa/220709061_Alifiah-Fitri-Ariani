export default function handler(req, res) {
  const visitors = [
    { nama: 'Andi', asal: 'Medan' },
    { nama: 'Budi', asal: 'Jakarta' },
    { nama: 'Sari', asal: 'Surabaya' }
  ];
  let html = '<h2>Data Pengunjung</h2><ul>';
  visitors.forEach(v => {
    html += `<li>${v.nama} dari ${v.asal}</li>`;
  });
  html += '</ul>';
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
