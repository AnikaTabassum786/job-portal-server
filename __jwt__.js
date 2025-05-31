/**
 * Simple but not the best
 * 1.from client side sent information
 * 2.generate token jwt.sign()
 * 3.on the client side set token to the localstorage
 * 
 * 
 */

/*
using http only cookies

 1.from client side send the information (email,better:firebase er auth token) to generate token
 2.on the server side, accept user information and if needed validate it
 3.generate token in the server side using secret and expiresIn

 set cookies

 1. while calling the api tell to use withCredentials

 axios.post('http://localhost:3000/jwt',userData,{withCredentials:true})
 
 2.in the cors setting set credentials and origin
app.use(cors({
    origin:['http://localhost:5173/'],
    credentials:true,
}));

6.after generate the token set it to the cookies with some options

 res.cookie('token',token,{
                httpOnly:true,
                secure:false
            })

*/