// this request handler executes when making a GET request to /about
server.get('/about', (req, res) => {
    res.status(200).send('<h1>About Us</h1>');
  });
  
  // this request handler executes when making a GET request to /contact
  server.get('/contact', (req, res) => {
    res.status(200).send('<h1>Contact Form</h1>');
  });

  // this request handler executes when making a POST request to /hobbits
server.post('/hobbits', (req, res) => {
    res.status(201).json({ url: '/hobbits', operation: 'POST' });
  });

  // this request handler executes when making a PUT request to /hobbits
server.put('/hobbits', (req, res) => {
    res.status(200).json({ url: '/hobbits', operation: 'PUT' });
  });

  // this request handler executes when making a DELETE request to /hobbits
server.delete('/hobbits', (req, res) => {
    res.status(204);
  });
//query string
  server.get('/hobbits', (req, res) => {
    // query string parameters get added to req.query
    const sortField = req.query.sortby || 'id';
    const hobbits = [
      {
        id: 1,
        name: 'Samwise Gamgee',
      },
      {
        id: 2,
        name: 'Frodo Baggins',
      },
    ];
  
    // apply the sorting
    const response = hobbits.sort(
      (a, b) => (a[sortField] < b[sortField] ? -1 : 1)
    );
  
    res.status(200).json(response);
  });