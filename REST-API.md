# REST APIs have six constraints:

- **Client-server separation**

By separating the user interface concerns from the data storage concerns, we improve the portability of the user interface across multiple platforms and improve scalability by simplifying the server components.

- **Stateless**

Each request from client to server must contain all of the information necessary to understand the request, and cannot take advantage of any stored context on the server. Session state is therefore kept entirely on the client.

- **Cacheable**

Cache constraints require that the data within a response to a request be implicitly or explicitly labeled as cacheable or non-cacheable. If a response is cacheable, then a client cache is given the right to reuse that response data for later, equivalent requests.

- **Uniform Interface**

By applying the software engineering principle of generality to the component interface, the overall **system architecture is simplified** and the **visibility** of interactions is improved. In order to obtain a uniform interface, multiple architectural constraints are needed to guide the behavior of components. 

    REST is defined by four interface constraints: 
    
    1. identification of resources
    2. manipulation of resources through representations
    3. self-descriptive messages
    4. hypermedia as the engine of application state.

- **Layered System**

The layered system style allows an architecture to be composed of hierarchical layers by constraining component behavior such that each component cannot “see” beyond the immediate layer with which they are interacting.

- **Code on Demand**

REST allows client functionality to be extended by downloading and executing code in the form of applets or scripts. This simplifies clients by reducing the number of features required to be pre-implemented.


### reference:
https://restfulapi.net