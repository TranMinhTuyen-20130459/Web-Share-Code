import Header from '../Commons/Header';
import SectionBreadcrumb from "../Commons/SectionBreadcrumb";
import Footer from '../Commons/Footer';
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getProvinces, loadInfo} from "../../javascript/api/Api_Tai";

const breadcrumbs = [{name: "Trang chủ", link: "/"}, {name: "Hồ sơ cá nhân", link: "/profile"}]
function SectionProfile() {
    const [info, setInfo] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const navigate = useNavigate();
    const storedEmail = localStorage.getItem('account');
    useEffect(() => {
        if (!storedEmail) {
            navigate('/login');
        }
    }, []);
    useEffect(()=>{
        try {
            getProvinces().then(data =>{
                setProvinces(data)
            })
        }catch (error) {
            console.error('Lỗi khi gọi API:', error)
        }
    },[])
    useEffect(()=>{
        try {
            loadInfo(storedEmail).then(data =>{
                setInfo(data);
            })
        }catch (error){
            console.error('Lỗi khi gọi API:', error)
        }
    },[])
    const handleLogout = () => {
        localStorage.removeItem('account');
        navigate('/');
    };
    return (
        <section className="contact-us profile">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="single-head">
                            <div className="single-info">
                                <div className="d-flex flex-column align-items-center text-center mb-5">
                                    <img className="rounded-circle" width="150px"
                                         src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                                         alt=""/>
                                    <span className="font-weight-bold">Edogaru</span>
                                </div>
                                <ul>
                                    <li>
                                        <Link to="/change-password"><i className="bi bi-lock"></i> Đổi mật khẩu</Link>
                                    </li>
                                    <li>
                                        <a href="/" onClick={handleLogout}><i className="bi bi-box-arrow-in-right"></i> Đăng xuất</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12">
                        <div className="form-main">
                            <div className="title">
                                <h3>Hồ sơ của tôi</h3>
                                <p className="m-0">Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
                            </div>

                            <form className="form">
                                <div className="row">
                                    <div className="col-lg-12 col-12">
                                        <div className="form-group">
                                            <label>Họ và tên</label>
                                            <input value={info.fullname} name="name" type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-12">
                                        <div className="form-group sex">
                                            <label className="mr-4">Giới tính:</label>
                                            <div className="form-check form-check-inline mr-4 d-inline-flex  align-items-center">
                                                <input checked={info.gender === 'Nam'} className="form-check-input" type="radio"
                                                       name="sex" id="male" value="Nam"/>
                                                    <label className="form-check-label d-inline-block ml-2"
                                                           htmlFor="male">Nam</label>
                                            </div>
                                            <div className="form-check form-check-inline mr-4 d-inline-flex  align-items-center">
                                                <input checked={info.gender === 'Nữ'} className="form-check-input" type="radio"
                                                       name="sex" id="female" value="Nữ"/>
                                                <label className="form-check-label d-inline-block ml-2"
                                                       htmlFor="male">Nữ</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="form-group">
                                            <label>Số điện thoại<span>*</span></label>
                                            <input value={info.phone} name="phone" type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="form-group">
                                            <label>Email<span>*</span></label>
                                            <input value={info.personal_email} name="email_customer" type="email"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-12">
                                        <div className="form-group">
                                            <label>Địa chỉ<span>*</span></label>
                                            <input value={info.address} name="address" type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12">
                                        <div className="form-group">
                                            <label htmlFor="company">Tỉnh / Thành phố<span>*</span></label>
                                            <select className="region" name="city" id="company" value={info.province}>
                                                {provinces.map(province =>(
                                                    <option key={province.code} value={province.name}>
                                                        {province.name}
                                                    </option>)
                                                )}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12">
                                        <div className="form-group button">
                                            <button type="submit" className="btn">Lưu</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default function ProfilePage(){
    return(
        <>
            <Header/>
            <SectionBreadcrumb breadcrumbs={breadcrumbs}/>
            <SectionProfile/>
            <Footer/>
        </>
    )
};