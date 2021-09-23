


```js

//body means that it is only validating the body of the request
const {body,validationResult} = require("express-validator");
//each validation is a middleware
//can put a series of middlewares into an array
const checkPayloadShape = [
    //withMessage contains the object that would be added to the errors if the previous check fails
    body("username").isString().withMessage({message:"username is required",status:422}),
    body("password").isString().withMessage({message:"Password must be longer than 3 chars",status:422}).isLength({min:3}).withMessage({message:"Password must be longer than 3 chars",status:422}),
    //the last middleware calls the validationResult and will process any errors
    (req,res,next)=>{
        const errors = validationResult(req);
        if(errors.isEmpty()){
            return next();
        }
        else{
            const {message,status} = errors.array()[0].msg;
            return res.status(status).json({message});
        }
    }
]
```