import usa from '../img/language/language.png'

function HeaderTop() {
    return (
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <div className="header__top__left">
                            <ul>
                                <li><i className="fa fa-envelope"></i>k46-it-nlu@gmail.com</li>
                                {/*<li>Free Shipping for all Order of $99</li>*/}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9">
                        <div className="header__top__right">
                            {/*<div className="header__top__right__social">*/}
                            {/*    <a href="#"><i className="fa fa-facebook"></i></a>*/}
                            {/*    <a href="#"><i className="fa fa-twitter"></i></a>*/}
                            {/*    <a href="#"><i className="fa fa-linkedin"></i></a>*/}
                            {/*    <a href="#"><i className="fa fa-pinterest-p"></i></a>*/}
                            {/*</div>*/}
                            <div className="header__top__right__language">
                                <img src={usa} alt=""/>
                                <div>English</div>
                                <span className="arrow_carrot-down"></span>
                                <ul>
                                    <li><a href="#">Vietnam</a></li>
                                    <li><a href="#">English</a></li>
                                </ul>
                            </div>
                            <div className="header__top__right__auth">
                                <a href=""><i className="fa fa-user"></i>Đăng ký / Đăng nhập</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderTop;