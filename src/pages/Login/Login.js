import React, {useState} from 'react'

export default function Login(props) {
    // const [state, setState] = useState({
    //   userLogin: { userName: "", passWord: "" },
    // });
    const [userLogin, setUserLogin]=useState({
        userName: "", passWord: ""
    })
    console.log(userLogin);
    const handleChange = (e) =>{
        const {value, name}= e.target;
        // setState({
        //     userLogin: {...state.userLogin,[name]:value}
        // })
        setUserLogin({
            ...userLogin,
            [name]: value
        })
    }

    const login =(e)=>{
        e.preventDefault();
        // Kiểm tra userName, passWord 
        if(userLogin.userName==="cybersoft" && userLogin.passWord==="cybersoft"){
            // GoBack trả về trang trước link đến trang hiện tại
            // props.history.goBack();

            // push chuyển hướng đến home
            // props.history.push('/home')

             // replace thay đổi nội dung thành route tương ứng
            props.history.replace('/home')
        }else{
            alert("Login Fail")
        }
    }

    return (
        <form className="container" onSubmit={login}>
            <h3 className="display-4 text-center">Login</h3>
            <div className="form-group">
                <p>User Name</p>
                <input name="userName" className="form-control" onChange={handleChange} ></input>
            </div>

            <div className="form-group">
                <p>Password</p>
                <input type="password" name="passWord"  className="form-control" onChange={handleChange}></input>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-success">Login</button>
            </div>
        </form>
    )
}
