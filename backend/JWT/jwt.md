## JSON Web Tokens (JWT)

- Header
- Payload
- Signiture

## Header

The header contains the algorithm with the token type. Typically the header for a JWT looks like this.

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

## Payload

- contain Claim and other data
- things like user id can be stored in the Claim

Example:

```json
{
  "sub": "1234567890", // standard - subject, normally the user id
  "name": "John Doe", // custom property
  "iat": 1516239022 // standard - The Date the token was issued, expressed in seconds since epoch.
}
```

## Signiture

Signiture is a string created from base64 encoding of
- header
- payload
- a secret

Example

Header
```js
{
  "alg": "HS256",
  "typ": "JWT"
}
```
Payload
```js
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
```
Signiture

```js
HMACSHA256(
    // encoding header and payload with base64
    // concatenate them together
    base64UrlEncode(header) + "." +
    base64UrlEncode(payload),
    // add secret to object
    secret
)
// the whole json string is run through the crytographic algorithm specified in the header
```
The structure of JWT is then

```js
const token = base64urlEncoding(header) + '.' + base64urlEncoding(payload) + '.' + base64urlEncoding(signature);
//resulting in
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```