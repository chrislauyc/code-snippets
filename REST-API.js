// REST APIs have six constraints:

// client-server architecture.

// stateless architecture: each request should stand on its own, and order should not matter. No shared state.

// cacheable: improves network performance.

    // GET, PUT, and DELETE should be idempotent (the same command executed multiple times, the state of resources on the server is exactly the same, much like pure functions)
    // POST is not idempotent.
    // Caching is a way to store and retrieve data so that the server can fulfill future requests faster without repeating expensive calculations or operations.

// layered system: component A (a client) might or might not communicate directly with component B (the server). There may be other layers between them like logging, caching, DNS servers, load balancers, and authentication.

// code on demand

    // The API returns the resource and code to act on it.
    // The client only needs to know how to execute the code.
    // Makes the API more flexible, upgradeable, and extendible.
    // Most web applications send JavaScript code along with the data.

// uniform interfaces

    // Each resource should be accessible through a single URL. Not a hard requirement, but recommended.
    // We should be able to manage the resources through these representations (the URL).
    // every interaction with the resource should happen through the URL identifier we gave to it.
    // Self-descriptive messages.
    // HATEOAS (Hypermedia As The Engine Of Application State). Much like a choose your own adventure book, the pages are not read in order. You start on page 1. Based on the information available, the reader (client) chooses the action to take, moving them to a different page. A good example of a hypermedia API is the GitHub API (Links to an external site.).