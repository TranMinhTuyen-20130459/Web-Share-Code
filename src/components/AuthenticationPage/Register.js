import authenticationImage from '../../img/authentication/authentication.png';
import Header from '../Commons/Header';
import Footer from '../Commons/Footer';
import breadcrumb_1 from "../../img/breadcrumb/breadcrumb_1.png";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {Provider, useDispatch, useSelector} from "react-redux";
import {registerError} from "../../redux/Action";
import {isEmail, isEmpty} from "./Utils";
import {errorRegisterSelector} from "../../redux/Selectors";
import {store} from "../../redux/Store";

function Breadcrumb(){
    return(
        <section className="breadcrumb-section set-bg" style={{ backgroundImage: `url(${breadcrumb_1})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="breadcrumb__text">
                            <div className="breadcrumb__option">
                                <Link to="/">Trang chủ</Link>
                                <Link to="/register">Đăng ký</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
function SectionRegister(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_pass,setConfirm_pass] = useState("");
    const [error,setError] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        if(isEmpty(email) || isEmpty(password) || isEmpty(confirm_pass)){
            setError("Hãy điền đầy đủ thông tin");
            e.preventDefault();
            dispatch(registerError({
                error: "Hãy điền đầy đủ thông tin"
            }))
        }else if(!isEmail(email)){
            setError("Nhập đúng định dạng email");
            e.preventDefault();
            dispatch(registerError({
                error: "Nhập đúng định dạng email"
            }))
        }else if(password.localeCompare(confirm_pass) !==0){
            setError("Xác thực mật khẩu không chính xác");
            e.preventDefault();
            dispatch(registerError({
                error: "Xác thực mật khẩu không chính xác"
            }))
        }
        else{
            setError("");
            e.preventDefault();
            dispatch(registerError({
                error: ""
            }))
        }
    }
    const handleInputEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handleInputPassword = (e) =>{
        setPassword(e.target.value)
    }
    const handleInputRePassword = (e) =>{
        setConfirm_pass(e.target.value)
    }
    return(
        <section className="form-input py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-12 d-flex align-items-center">
                        <img width="80%" src={authenticationImage} alt=""/>
                    </div>
                    <div className="col-lg-5 col-md-5 col-12">
                        <div className="h-100 d-flex align-items-center">
                            <form id="form-register" className="m-0 p-5 text-center" onSubmit={handleSubmit}>
                                <h5 className="mb-4">Đăng Ký</h5>
                                {error && <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>}
                                <input value={email} onChange={handleInputEmail} id="email" className="w-100 mb-3" type="text" placeholder="Email" name="email"/>
                                <input value={password} onChange={handleInputPassword} id="password" className="w-100 mb-3" type="password" placeholder="Mật khẩu"
                                       name="password"/>
                                <input value={confirm_pass} onChange={handleInputRePassword} id="confirm-pass" className="w-100 mb-4" type="password"
                                       placeholder="Nhập lại mật khẩu" name="confirm-pass"/>
                                <button className="btn next w-100 mb-3">Tiếp theo</button>
                                <span className="shotcut">Bạn đã có tài khoản? <Link
                                    to="/login">Đăng nhập</Link></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default function RegisterPage(){
    return(
        <>
            <Header/>
            <Breadcrumb/>
            <SectionRegister/>
            <Footer/>
        </>
    )
};