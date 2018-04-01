const {createServer} = require('http');
const PersonDao = require('./dao/Person');

const server = createServer(async(req, res) => {
  if (req.method === 'POST') {
    res.setHeader('Content-Type', 'application/json');
    req.on('data', async (chunk) => {
      const { name, date_of_birth, address, country, email } = JSON.parse(chunk);
      res.end(JSON.stringify(await PersonDao.create({ name, date_of_birth, address, country, email })));
    });
  }
  if (req.method === 'GET') {
    const id = req.url.split('/').splice(-1)[0];
    if (id === '') {
      res.end(JSON.stringify(await PersonDao.getList()));
    } else {
      res.end(JSON.stringify(await PersonDao.getById(parseInt(id))));
    }
  }
  if (req.method === 'PUT') {
     // ...
  }
});

server.listen(3000);
console.log(`Server is run on port 3000`);
