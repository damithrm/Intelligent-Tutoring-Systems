import Cookies  from "js-cookie";
import axios from "axios";
import {
    LOAD_USER_PROFILE_SUCCESS,
    LOAD_USER_PROFILE_FAIL,
    UPDATE_USER_PROFILE_SUCCESS,
    UPDATE_USER_PROFILE_FAIL
} from './types';

export const load_user = () => async dispatch =>{
    try{
        
        console.log('load_user');

        const res1 = await axios.get('http://localhost:8000/profile/user',
        {headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            }}
        )
        if(res1.data.error){
            console.log('LOAD_USER_PROFILE_FAIL');
            dispatch({
                type: LOAD_USER_PROFILE_FAIL,
            });
        }else{
        console.log('LOAD_USER_PROFILE_SUCCESS');
        dispatch({
            type: LOAD_USER_PROFILE_SUCCESS,
            payload: res1.data
        });
        }
    }catch(err){
        console.log('LOAD_USER_PROFILE_FAIL');
        dispatch({
            type: LOAD_USER_PROFILE_FAIL
        });
    }
};


export const update_profile = (first_name, last_name,phone,city) => async dispatch =>{
    try{
        
        console.log('update_profile');
        const res1 = await axios.put('http://localhost:8000/profile/update',{
            
            'withCredentials':true,
            first_name, 
            last_name,
            phone,
            city 
               
            },{headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }}
        )
        if(res1.data.profile && res1.data.username){
            console.log('UPDATE_USER_PROFILE_SUCCESS');
            dispatch({
                type: UPDATE_USER_PROFILE_SUCCESS,
                payload: res1.data
            });
            
        }else{
            console.log('UPDATE_USER_PROFILE_FAIL');
            dispatch({
                type: UPDATE_USER_PROFILE_FAIL
            });
        }
        
    }catch(err){
        console.log('UPDATE_USER_PROFILE_FAIL');
        dispatch({
            type: UPDATE_USER_PROFILE_FAIL
        });
    }

}

// export const update_photo = (PhotoFileName) => async dispatch =>{
//     try{
        
//         console.log('update_profile');
//         const res1 = await axios.post('http://localhost:8000/profile/SaveFile',{
            
//             'withCredentials':true,
//             PhotoFileName
               
//             },{headers:{
//                 'Accept':'application/json',
//                 'Content-Type':'application/json',
//                 'X-CSRFToken': Cookies.get('csrftoken')
//             }}
//         )
//         if(res1.data.success){
//             console.log('UPDATE_PROFILE_Photo_SUCCESS');
            
//         }else{
//             console.log('UPDATE_USER_PROFILE_Photo__FAIL');
            
//         }
        
//     }catch(err){
//         console.log('UPDATE_USER_PROFILE_Photo__FAIL');
        
//     }

// }

