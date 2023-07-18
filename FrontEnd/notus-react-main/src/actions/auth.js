import Cookies from 'js-cookie'
import axios from "axios";
import { load_user } from './profile';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL
} from './types';
// import { Navigate } from 'react-router-dom';



export const checkAuthenticated = () => async dispatch =>{
    try{
        
        console.log('checkAuthenticated');

        const res1 = await axios.get('http://localhost:8000/accounts/authenticated',
        {headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
                // 'X-CSRFToken': Cookies.get('csrftoken')
            }}
        )
        console.log('get method success');
        if(res1.data.error  || res1.data.isAuthenticated === 'error'){ 
            console.log('AUTHENTICATED_FAIL');
            dispatch({
                type: AUTHENTICATED_FAIL,
                payload: false
                });
        }
        else if(res1.data.isAthenticated === 'success'){
            console.log('AUTHENTICATED_SUCCESS');
            dispatch({
                type: AUTHENTICATED_SUCCESS,
                payload: true
                });
        }
        else{
            console.log('AUTHENTICATED_FAIL');
            dispatch({
                type: AUTHENTICATED_FAIL,
                payload: false
                });
        }
    
    }catch(err){
        dispatch({
            type: AUTHENTICATED_FAIL,
            payload: false
            });
    }

}




export const login = (email,password) => async dispatch =>{
    try{
        
        console.log('LOGIN_to account');

        const res1 = await axios.post('http://localhost:8000/accounts/login',{
            
                'email':email,
                'password':password
                
            },{headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }}
        )

    //     const res1 = fetch('http://localhost:8000/accounts/login',{
    //     method:'POST',
    //     headers:{
    //         'Accept':'application/json',
    //         'Content-Type':'application/json',
    //         'X-CSRFToken': Cookies.get('csrftoken')
    //     },
    //     body:JSON.stringify({
    //         username:username,
    //         password:password,
            
    //     })
    // })
        if(res1.data.success){  
            console.log('LOGIN_SUCCESS');
            dispatch({
                 type: LOGIN_SUCCESS,
                 payload: res1.data.username
                     });
                console.log(res1.data.username);
                console.log(res1.data.success);
            dispatch(load_user());
        }else{
            console.log('LOGIN_FAIL');
            dispatch({
            type: LOGIN_FAIL
            });
        }
    
    }catch(err){
        console.log('err');
        dispatch({
            type: LOGIN_FAIL
        });
    }

}




export const logout = () => async dispatch =>{

    try{
        
        console.log('LOGOUT_to account');
        const res1 = await axios.post('http://localhost:8000/accounts/logout',{
            
            'withCredentials':true
                
            },{headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }}
        )
        if(res1.data.success){  
            console.log('LOGOUT_SUCCESS');
            dispatch({
                 type: LOGOUT_SUCCESS,
                     });
        }else{
            console.log('LOGOUT_FAIL');
            dispatch({
            type: LOGOUT_FAIL
            });
        }
    
    }catch(err){
        console.log('err');
        dispatch({
            type: LOGIN_FAIL
        });
    }

}




export const register=(email,password,re_password) => async dispatch =>{

    try{
            const res = fetch('http://localhost:8000/accounts/register',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
                
            },
            body:JSON.stringify({
                email:email,
                password:password,
                re_password:re_password,
            })
        })
        .then(res => {
            if(!res.ok){  
                console.log('REGISTER_FAIL');
                dispatch({
                     type: REGISTER_FAIL
                         });
            }else{
                console.log('REGISTER_SUCCESS');
                dispatch({
                type: REGISTER_SUCCESS
                });
            }
        })
    }catch(err){
            console.log('res');
            dispatch({
                type: REGISTER_FAIL
            });
        }
};



export const delete_account = () => async dispatch =>{
    try{
        
        console.log('delete account');
        const res1 = fetch('http://localhost:8000/accounts/delete',{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
                
            }
        })
        // const res1 = await axios.delete('http://localhost:8000/accounts/delete',{
            
        //     'withCredentials':true,
               
        //     },{headers:{
        //         'Accept':'application/json',
        //         'Content-Type':'application/json',
        //         'X-CSRFToken': Cookies.get('csrftoken')
        //     }}
        // )
        .then(res1 => {
            if(!res1.ok){  
                console.log('DELETE_USER_FAIL');
                dispatch({
                     type: DELETE_USER_FAIL
                         });
            }else{
                console.log('DELETE_USER_SUCCESS');
                dispatch({
                type: DELETE_USER_SUCCESS
                });
            }
        })
        // if(res1.data.success){  
        //     console.log('DELETE_USER_SUCCESS');
        //     dispatch({
        //          type: DELETE_USER_SUCCESS,
        //              });
        // }else{
        //     console.log('DELETE_USER_FAIL');
        //     dispatch({
        //     type: DELETE_USER_FAIL
        //     });
        // }
    
    }catch(err){
        console.log('DELETE_USER');
        dispatch({
            type: DELETE_USER_FAIL
        });
    }

}





export const grammer=(username,password,re_password) => async dispatch =>{

    try{
            const res = fetch('http://localhost:8000/accounts/register',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
                
            },
            body:JSON.stringify({
                username:username,
                password:password,
                re_password:re_password,
            })
        })
        .then(res => {
            if(!res.ok){  
                console.log('REGISTER_FAIL');
                dispatch({
                     type: REGISTER_FAIL
                         });
            }else{
                console.log('REGISTER_SUCCESS');
                dispatch({
                type: REGISTER_SUCCESS
                });
            }
        })
    }catch(err){
            console.log('res');
            dispatch({
                type: REGISTER_FAIL
            });
        }
};