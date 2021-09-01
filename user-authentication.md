Import 

```js
const bcrypt = require('bcryptjs');
```

Hash a password

```js
const credentials = req.body;

const hash = bcrypt.hashSync(credentials.password, 14);

credentials.password = hash;

// move on to save the user.
```

Verify a password

```js
const credentials = req.body;

// find the user in the database by it's username then
if (!user || !bcrypt.compareSync(credentials.password, user.password)) {
  return res.status(401).json({ error: 'Incorrect credentials' });
}

// the user is valid, continue on
```

Login Logic

```js
server.post('/api/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      // check that passwords match
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ message: `Welcome ${user.username}!` });
      } else {
        // we will return 401 if the password or username are invalid
        // we don't want to let attackers know when they have a good username
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
```
## Use in-memory sessions to persist authentication information across requests

Authentication Workflow for sessions

The basic workflow when using a combination of cookies and sessions for authentication is:

- Client sends credentials.
- Server verify credentials.
- Server creates a session for the client.
- Server produces and sends back cookie.
- Client stores the cookie.
- Client sends cookie on every request.
- Server verifies that cookie is valid.
- Server provides access to resource.

Cookie (server-side)

In the HTTP response, add to headers:
"set-Cookie":"session=12345"

Cookie (browser-side)

In every HTTP requests, add to headers:
"Cookie":"session=12345"

**Cookies are not accessible from JavaScript or anywhere because they are cryptographically signed and very secure.



Node libraries for handling sessions

- client-sessions
- express-session

### Common ways to store session data on the server:

- Memory
- Memory cache (like Redis and Memcached).
- Database.

### Cookies

- Automatically included on every request.
- Unique to each domain + device pair.
- Cannot be sent to a different domain.
- Sent in the cookie header.
- Has a body that can have extra identifying information.
- Max size around 4KB.

### Storing session data in memory

- Data stored in memory is wiped when the server restarts.
- Causes memory leaks as more and more memory is used as the application continues to store data in session for different clients.
- Good for development due to its simplicity.

### Using cookies to transfer session data.

Advantages when using cookies:

- a cookie is a small key/value pair data structure that is passed back and forth between client and server and stored in the browser.
- the server uses it to store information about a particular client/user.
- workflow for using cookies as session storage:
    - the server issues a cookie with an expiration time and sends it with the response.
    - browsers automatically store the cookie and send it on every request to the same domain.
    - the server can read the information contained in the cookie (like the username).
    - the server can make changes to the cookie before sending it back on the response.
    - rinse and repeat.

Express-session uses cookies for session management.

Drawbacks when using cookies:

- small size, around 4KB.
- sent in every request, increasing the size of the request if too much information is stored in them.
- if an attacker gets a hold of the private key used to encrypt the cookie, they could read the cookie data.

### Storing session data in Memory Cache (preferred way of storing sessions in production applications)

- stored as key-value pair data in a separate server.
- the server still uses a cookie, but it only contains the session id.
- the memory cache server uses that session id to find the session data.

Advantages:

- Quick lookups.
- Decoupled from the API server.
- A single memory cache server can serve many applications.
- Automatically remove old session data.

Drawbacks:

- another server to set up and manage.
- extra complexity for small applications.
- hard to reset the cache without losing all session data.

### Storing session data in a database

- Similar to storing data in a memory store.
- The session cookie still holds the session id.
- The server uses the session id to find the session data in the database.
- Retrieving data from a database is slower than reading from a memory cache.
- Causes chatter between the server and the database.
- Need to manage/remove old sessions manually or the database will be filled with unused session data. Most libraries now manage this for you.

### Logout Examples

server.get('/api/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.send('error logging out');
      } else {
        res.send('good bye');
      }
    });
  }
});