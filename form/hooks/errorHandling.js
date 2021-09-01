import schema from "./schema";
const schema = yup.object().shape({
    name:yup.string().required(isRequired('Name')),
    email:yup.string().email(invalidEmail).required(isRequired('Email')),
    isOverEighteen:yup.boolean().oneOf([true],'You have to be older than 18'),
    password:yup.string().min(8,'Password must have at least 8 characters').required(isRequired('Password')),
    is_instructor:yup.boolean()});
export const errorHandling=async(name,value)=>{
    try{
        await yup.reach(schema,name).validate(value);
        return "";
    }
    catch(error){
        return error.errors[0];
    }
};