import React, {useState} from 'react'
import axios from 'axios'

export default function Home(props) {
    const [dsPhim, setDSPhim]= useState([])
    const getFilm=()=>{
        axios({
            url:"http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim",
            method: "GET"
        }).then(res=>{
            console.log('ketqua:', res.data);
            setDSPhim(res.data)
        }).catch(err=>{
            console.log(err.response.data);
        })
    }
    const renderPhim=()=>{
        return dsPhim.map((phim, index)=>{
            return <div className="col-4" key="{index}">
  <div className="card text-white bg-primary">
    <img className="card-img-top" src={phim.hinhAnh} alt="{phim.hinhAnh}" 
    />
    <div className="card-body">
      <h4 className="card-title">{phim.tenPhim}</h4>
      <p className="card-text">{phim.moTa}</p>
    </div>
  </div>
</div>
})
    }
    return (
        <div>
            Home
            <button onClick={()=>{getFilm()}}>Lấy danh sách film</button>
            <h3>Danh Sách Film</h3>
            <div className="row">
                {renderPhim()}
            </div>
        </div>
    )
}
