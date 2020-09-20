import React from 'react'

export default function PageNotFound(props) {
    return (
        <div className="text-center">
            Không tìm thấy trang: {props.location.pathname}
            <div className="form-group">
                <button className="form-control" onClick={()=>{
                props.history.push("/home")
            }}>Bấm vào đây trở về trang chủ</button></div>
            
        </div>
    )
}
