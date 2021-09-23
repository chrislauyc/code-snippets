Setup for all tests

```js
beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy()
})
```

Good to have a sanity check to make sure the test runs

```js
test('[0] sanity check', () => {
  expect(true).not.toBe(false)
})
```

describe server.js

```js
describe("server.js",()=>{
    
})
```