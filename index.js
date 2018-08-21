const server = require('express')();
// const bp = require('body-parser');

// server.use(bp.json());
// server.use(
//   bp.urlencoded({
//     extended: true
//   })
// );

server.get('/helloworld', (_, res) => res.send('<h1>HELLO WORLD</h1>'));
server.get('/personalinformation', (_, res) =>
  res.send({
    creditCardNumber: '124124123124',
    expirationDate: '07/2040',
    securityCode: '124'
  })
);
server.get('/:name?', (req, res) =>
  res.send(
    `<h1>
      Hello ${
        req.params.name
          ? req.params.name
          : '<span contenteditable>YOUR NAME HERE</span>'
      }
    </h1>`
  )
);

server.get('*', (_, res) => res.status(400).send('404 NOT FOUND'));

const port = 8080;
server.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
