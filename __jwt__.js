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

 4. while calling the api tell to use withCredentials

 axios.post('http://localhost:3000/jwt',userData,{withCredentials:true})

 or for fetch add option credential: 'include'
 
 5.in the cors setting set credentials and origin
app.use(cors({
    origin:['http://localhost:5173/'],
    credentials:true,
}));

6.after generate the token set it to the cookies with some options

 res.cookie('token',token,{
                httpOnly:true,
                secure:false
            })
                

 ----------------------------------------
 7. on time: use cookiesParser as middleware
 8. for every api you want to verify token:
 
 in the client side: 
 if using axios withCredentials:true
 for fetch: credentials include    
 
 -------------------

 verify token

*/