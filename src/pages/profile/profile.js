import React from 'react'
import { Redirect } from 'react-router-dom'

export default function profile(props) {
    if(localStorage.getItem('userLogin')){
        return <div className='display-4'>
            Hello
        </div>
    }else{
        alert ("Đăng nhập để vào trang này")
        return <Redirect to='/login'/>
    }
    return (
        <div>
            
        </div>
    )
}
