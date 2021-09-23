import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "../css/qabul.module.css";
import tav_img from "../img/tav_img.jpg";
import talab from "../img/talab.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Carousel } from "antd";
import axios from "axios";
import { url, user } from "../host/Host";
import FadeLoader from "react-spinners/FadeLoader";
import { Link, NavLink } from "react-router-dom";
import { Button,Nav, Navbar,} from "react-bootstrap";
import { Tooltip} from "antd";
import school1 from "../img/school1.jpg";



import {
  faDoorOpen,
  faEnvelope,
  faNewspaper,
  faPhone,
  faSchool,
  faSearch,
  faSignInAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from './BoshSahifa.module.css'
class Qabul extends React.Component {
  state = {
    loader: true,
    qabul: [],
    id: 0,
    school: null,
  };

  getSchool = () => {
    var v = user;
    axios.get(`${url}/school-by-admin/${v}`).then((res) => {
      this.setState({
        school: res.data,
        loader: false,
      });
      console.log(res.data);
    });
  };

  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
    this.getSchool();
  }
  render() {
    return (
      <div>
        {this.state.loader ? (
          <div className="loaderT">
            <FadeLoader color="blue" loading={this.state.loader} size={120} />
          </div>
        ) : (
          <>
          <div className="iconsHead">
          <div>
            <Tooltip placement="left" title="ittower01@gmail.com">
              {" "}
              <a
                target="_blank"
                style={{ borderRadius: "10px 0px 0px 0px" }}
                className="ahref"
                href={`mailto: ${
                  this.state.school !== null
                    ? this.state.school.email
                    : "ittower01@gmail.com"
                }`}
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ fontSize: "25px" }}
                />
              </a>
            </Tooltip>
          </div>
          <div>
            <a
              target="_blank"
              style={{ borderTop: " 1px solid #1b6602" }}
              className="ahref"
              href="https://t.me/samarqand_33_maktab"
            >
              <i className="fab fa-telegram"></i>
            </a>
          </div>
          <div>
            <a
              target="_blank"
              style={{ borderTop: " 1px solid #1b6602" }}
              className="ahref"
              href="https://www.instagram.com/33_maktab_official/"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div>
            <a
              target="_blank"
              style={{ borderTop: " 1px solid #1b6602" }}
              className="ahref"
              href="https://www.facebook.com/people/Samarqand-Tuman-Idum/100072115398865/"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
          <div>
            <a
              target="_blank"
              style={{ borderTop: " 1px solid #1b6602" }}
              className="ahref"
              href="https://www.youtube.com/channel/UC4vQC9mOo5B6_imRFUA62Xg"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <div>
            <Tooltip placement="left" title="+998 93 082 03 72">
              {" "}
              <a
                target="_blank"
                className="ahref"
                style={{
                  borderTop: " 1px solid #1b6602",
                  borderRadius: "0px 0px 0px 10px",
                }}
                href={`tel: ${
                  this.state.school !== null
                    ? this.state.school.phone
                    : "+998 93 082 03 72"
                }`}
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{
                    fontSize: "25px",
                    borderRadius: "0px 0px 0px 10px",
                  }}
                />
              </a>{" "}
            </Tooltip>
          </div>
        </div>
        <div className={style.header}>
            <div className={style.navT}>
            <Navbar expand="lg">
<Container className={style.navT_item}>
<Navbar.Toggle aria-controls="basic-navbar-nav" style={{border:'none', zIndex:4567}} />
<Navbar.Collapse id="basic-navbar-nav" className={style.jkr} >
  <Nav className="me-auto" className={style.navT_nav}>
  <NavLink className={style.nlik} to={`/`}>
                <span className={style.lik}>Bosh sahifa</span>
              </NavLink>
              <NavLink className={style.nlik} to={`/hayot/`}>
                <span className={style.lik}>Maktab hayoti</span>
              </NavLink>
              <NavLink className={style.nlik} to={`/qabul/`}>
                <span className={style.lik}>Qabul</span>
              </NavLink>
              <NavLink className={style.nlik} to={`/yangiliklar/`}>
                <span className={style.lik}>Yangiliklar</span>
              </NavLink>
              <NavLink className={style.nlik} to={`/rahbariyat/`}>
                <span className={style.lik}>Maktab ma'muriyati</span>
              </NavLink>
              <NavLink className={style.nlik} to={`/alochilar/`}>
                <span className={style.lik}>Maktab a'lochilari</span>
              </NavLink>
          
    
  </Nav>
</Navbar.Collapse>
</Container>
</Navbar>
</div>
<Container><Row>
         <Col lg={5} md={5} sm={12} className={style.head_textCol}>
             {/* <p>Sifat va qulay narxlar</p> */}
             <h1>Qabul uchun ariza topshiring</h1>

             <a target="_blank" href={`tel: ${this.state.school.phone}`}>Biz bilan bog'laning</a>
         </Col>
         <Col lg={7} md={7} sm={12} className={style.head_imgCol}>
         <div className={style.head_img}>
       
         <div className={style.comp}>

          <img src={ this.state.school !== null && this.state.school.m_h_h3 !== null
                  ? this.state.school.m_h_h3
                  : school1}/>
              
   
          </div> 
         </div>
         </Col>
         </Row></Container><div className={style.di} style={{zIndex:'2'}}></div>
    
</div>
<div className={style.navG} 
data-aos="fade-bottom"
 data-aos-anchor-placement="bottom-top"
 >
<Navbar style={{position:"relative"}}expand="lg">

<Navbar.Brand><NavLink className={style.navB} style={{color:'white', textDecoration:'none'}} to="/"> 
        <div class={style.brand_text}>
           <p>{this.state.school.school_number} - maktab</p>
           </div>
        </NavLink></Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav"
 style={{zIndex:345, borderColor:'white'}} />
<Navbar.Collapse id="basic-navbar-nav" className={style.htr}>
<Nav className="me-auto" className={style.navT_nav}>
  <NavLink className={style.navLik} to={`/`}>
                <span className={style.lik}>Bosh sahifa</span>
              </NavLink>
              <NavLink className={style.navLik} to={`/hayot/`}>
                <span className={style.lik}>Maktab hayoti</span>
              </NavLink>
              <NavLink className={style.navLik} to={`/qabul/`}>
                <span className={style.lik}>Qabul</span>
              </NavLink>
              <NavLink className={style.navLik} to={`/yangiliklar/`}>
                <span className={style.lik}>Yangiliklar</span>
              </NavLink>
              <NavLink className={style.navLik} to={`/rahbariyat/`}>
                <span className={style.lik}>Maktab ma'muriyati</span>
              </NavLink>
              <NavLink className={style.navLik} to={`/alochilar/`}>
                <span className={style.lik}>Maktab a'lochilari</span>
              </NavLink>
          
    
  </Nav>
</Navbar.Collapse>

</Navbar>
</div>
<div  className={styles.body_makatab}>
       <div className={styles.dark_maktab}>
            <div className={styles.tavsilotlar}>
              <Container fluid style={{ padding: "0" }}>
                <Row>
                  <Col
                    style={{ padding: "0" }}
                    lg={4}
                    md={12}
                    sm={12}
                    className={styles.tavsilot}
                  >
                    <div className={styles.qabul_image} data-aos="zoom-in-down">
                      <Image
                        src={
                          this.state.school !== null
                            ? this.state.school.q !== null
                              ? this.state.school.q
                              : tav_img
                            : tav_img
                        }
                      />
                    </div>
                  </Col>
                  <Col
                    style={{ padding: "0" }}
                    lg={7}
                    md={12}
                    sm={12}
                    className={styles.tavsilottext}
                    data-aos="zoom-in-up"
                  >
                    <h3>Qabul jarayoni bo'yicha tafsilotlar</h3>

                    <p>
                      {this.state.school !== null
                        ? this.state.school.q_t !== null
                          ? this.state.school.q_t
                          : "Qabul jarayonlari bo'yicha tavsilotlar"
                        : "Qabul jarayonlari bo'yicha tavsilotlar"}
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className={styles.talim}>
              <Container fluid style={{ padding: "0" }}>
                <Row>
                  <Col style={{ padding: "0" }} lg={4} md={12} sm={12}>
                    <div className={styles.info} data-aos="zoom-in-up">
                      <div className={styles.qabul_talim}>
                        <Image src="https://image.flaticon.com/icons/png/512/906/906175.png" />
                      </div>
                      <h3>Ta'lim shakli</h3>
                      <p style={{fontSize:'20px', marginTop:'20px'}}>
                        {this.state.school !== null
                          ? this.state.school.q_talim !== null
                            ? this.state.school.q_talim
                            : "Ta'lim shakli to'g'risida ma'lumot"
                          : "Ta'lim shakli to'g'risida ma'lumot"}
                        {/* Bizning maktab ta’lim shakli kunduzgi bo’lib ta’lim jarayonlari 8:30 dan 16:00 gacha belgilangan. */}
                      </p>
                    </div>
                  </Col>
                  <Col style={{ padding: "0" }} lg={4} md={12} sm={12}>
                    <div className={styles.info} s data-aos="zoom-in-up">
                      <div className={styles.qabul_talim}>
                        <Image src="https://image.flaticon.com/icons/png/512/3829/3829933.png" />
                      </div>
                      <h3>Bitiruvchilar</h3>
                      <p style={{fontSize:'20px', marginTop:'20px'}}>
                        {this.state.school !== null
                          ? this.state.school.q_bitiruv !== null
                            ? this.state.school.q_bitiruv
                            : "Bitiruv to'g'risida ma'lumotlar"
                          : "Bitiruv to'g'risida ma'lumotlar"}

                        {/* 2019-2020 o‘quv yili yakuniga ko‘ra 106 nafar 11-sinf o‘quvchilari maktabni tamomlashdi va ulardan 42 nafar o‘quvchi Xalqaro Universitetlarga kirish imtihonlaridan muvaffaqiyatli o‘tishdi. */}
                      </p>
                    </div>
                  </Col>
                  <Col style={{ padding: "0" }} lg={4} md={12} sm={12}>
                    <div className={styles.info} data-aos="zoom-in-up">
                      <div className={styles.qabul_talim}>
                        <Image src="https://image.flaticon.com/icons/png/512/950/950145.png" />
                      </div>
                      <h3>O'quvchilar</h3>
                      <p style={{fontSize:'20px', marginTop:'20px'}}>
                        {this.state.school !== null
                          ? this.state.school.q_oquvchi !== null
                            ? this.state.school.q_oquvchi
                            : "O'quvchilar to'g'risida ma'lumot"
                          : "O'quvchilar to'g'risida ma'lumot"}
                        {/* 2019-2020 o‘quv yilida 5- sinfdan 11-sinfgacha bo’lgan 656 nafar o‘quvchi ta’lim oldi. */}
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className={styles.jarayon}>
              <Container fluid style={{ padding: "0" }}>
                <h1>Qabul jarayoni</h1>
                <div
                  className={styles.line}
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                ></div>
                <Carousel autoplay>
                  <div className={styles.jarayon_text}>
                    <h3>1. Onlayn royxatdan o'ting</h3>
                    <p>
                      {this.state.school !== null
                        ? this.state.school.q_j_online !== null
                          ? this.state.school.q_j_online
                          : "O'nline ro'yxatdan o'tish haqida"
                        : "O'nline ro'yxatdan o'tish haqida"}

                      {/* Ajoyib osoyishtalik butun qalbimni egallab oldi, xuddi bahorning shu shirin tonglari kabi, men butun qalbim bilan zavqlanaman. Men yolg'izman va borliq jozibasini his qilaman. */}
                    </p>
                  </div>

                  <div className={styles.jarayon_text}>
                    <h3>2. Ariza yozing</h3>
                    <p>
                      {this.state.school !== null
                        ? this.state.school.q_j_forma !== null
                          ? this.state.school.q_j_forma
                          : "Ro'yxatdan o'tishdagi ariza haqida ma'lumot"
                        : "Ro'yxatdan o'tishdagi ariza haqida ma'lumot"}

                      {/* Ajoyib osoyishtalik butun qalbimni egallab oldi, xuddi bahorning shu shirin tonglari kabi, men butun qalbim bilan zavqlanaman. Men yolg'izman va borliq jozibasini his qilaman. */}
                    </p>
                  </div>

                  <div className={styles.jarayon_text}>
                    <h3>3. Arizani ko'zdan kechiring</h3>
                    <p>
                      {this.state.school !== null
                        ? this.state.school.q_j_koz !== null
                          ? this.state.school.q_j_koz
                          : "Arizani ko'zdan kechirish haqida ma'lumot"
                        : "Arizani ko'zdan kechirish haqida ma'lumot"}

                      {/* Ajoyib osoyishtalik butun qalbimni egallab oldi, xuddi bahorning shu shirin tonglari kabi, men butun qalbim bilan zavqlanaman. Men yolg'izman va borliq jozibasini his qilaman. */}
                    </p>
                  </div>

                  <div className={styles.jarayon_text}>
                    <h3>4. Kerakli hujjatlarni to'plang</h3>
                    <p>
                      {this.state.school !== null
                        ? this.state.school.q_j_hujjat !== null
                          ? this.state.school.q_j_hujjat
                          : "Ro'yxatdan o'tish uchun kerak bo'ladigan hujjatlar to'g'risida ma'lumot"
                        : "Ro'yxatdan o'tish uchun kerak bo'ladigan hujjatlar to'g'risida ma'lumot"}
                      {/* Ajoyib osoyishtalik butun qalbimni egallab oldi, xuddi bahorning shu shirin tonglari kabi, men butun qalbim bilan zavqlanaman. Men yolg'izman va borliq jozibasini his qilaman. */}
                    </p>
                  </div>

                  <div className={styles.jarayon_text}>
                    <h3>5. Suhbat jarayoni</h3>
                    <p>
                      {this.state.school !== null
                        ? this.state.school.q_j_intervyu !== null
                          ? this.state.school.q_j_intervyu
                          : "Suhbat jarayoni haqida ma'lumot"
                        : "Suhbat jarayoni haqida ma'lumot"}

                      {/* Ajoyib osoyishtalik butun qalbimni egallab oldi, xuddi bahorning shu shirin tonglari kabi, men butun qalbim bilan zavqlanaman. Men yolg'izman va borliq jozibasini his qilaman. */}
                    </p>
                  </div>

                  <div className={styles.jarayon_text}>
                    <h3>6. So'nggi qaror</h3>
                    <p>
                      {this.state.school !== null
                        ? this.state.school.q_j_qaror !== null
                          ? this.state.school.q_j_qaror
                          : "So'ngi qaror haqida ma'lumot"
                        : "So'ngi qaror haqida ma'lumot"}

                      {/* Ajoyib osoyishtalik butun qalbimni egallab oldi, xuddi bahorning shu shirin tonglari kabi, men butun qalbim bilan zavqlanaman. Men yolg'izman va borliq jozibasini his qilaman. */}
                    </p>
                  </div>
                </Carousel>
              </Container>
            </div>

            <div className={styles.tavsilotlar}>
              <Container fluid style={{ padding: "0" }}>
                <Row>
                  <Col
                    style={{ padding: "0" }}
                    lg={4}
                    md={12}
                    sm={12}
                    className={styles.tavsilot}
                  >
                    <Image
                      src={
                        this.state.school !== null
                          ? this.state.school.q_imtihon_r !== null
                            ? this.state.school.q_imtihon_r
                            : talab
                          : talab
                      }
                      data-aos="zoom-in-up"
                    />
                  </Col>
                  <Col
                    style={{ padding: "0" }}
                    lg={8}
                    md={12}
                    sm={12}
                    className={styles.tavsilottext}
                    data-aos="zoom-in-up"
                  >
                    <h3>Imtihonda ishtirok etish talablari</h3>
                    <p>
                      {this.state.school !== null
                        ? this.state.school.q_imtihon_t !== null
                          ? this.state.school.q_imtihon_t
                          : "Imtixonda ishtirok etish talablari haqida ma'lumot"
                        : "Imtixonda ishtirok etish talablari haqida ma'lumot"}
                    </p>
                    {/* <p>
                            O‘quvchilarning ota-onasi yoki ota-onasining o‘rnini bosuvchi shaxslar quyidagi talablarni bajarishi shart:
                            – ro‘yxatdan o‘tish vaqtida o‘quvchining ID ko‘rsatib yuborilgan SMS xabarni qabul qiluvchi telefon raqamni aniq ko‘rsatilishi; – veb-ilova orqali uydan yoki infrastruktura mavjud bo‘lgan istalgan joydan o‘quvchi imtihonga qatnasha olishi uchun Internet tarmog‘i bo‘lgan hamda ZOOM ilovasi o‘rnatilgan kompyuter yoki planshet yoki smartfon bilan ta’minlashi; – o‘quvchiga tarmoq orqali sinovlarda qatnashishga tayyorlashi.
                            </p>
                            <p>
                            Ixtisoslashtirilgan maktabga saralash imtihonlarida ishtirok etish uchun hujjatlar davlat va nodavlat umumiy o‘rta ta’lim muassasalarining tartibli bosqichdagi sinflarini muvaffaqiyatli “4” va “5” baholariga tamomlagan o‘quvchilardan qabul qilinadi.
                            </p>
                            <p>
                            O‘quvchining taqdim etgan hujjatlari haqqoniyligi va farzandining sinovlarda shaffof ishtirokini taʼminlash ota-ona zimmasiga yuklatiladi.
                            </p> */}
                  </Col>
                </Row>
              </Container>
            </div>

            <div className={styles.muddat} data-aos="fade-up">
              <Container fluid style={{ padding: "0" }}>
                <div className={styles.muddat_header}>
                  <h1>Ma'lumotlar</h1>
                  <div className={styles.line}></div>
                </div>
                <Row className={styles.muddat_item}>
                  <Col style={{ padding: "0" }} lg={4} md={12} sm={12}>
                    <div className={styles.muddat_text1}>
                      <div>
                        <h3>O'quv yili</h3>
                        <p>
                          {this.state.school !== null
                            ? this.state.school.q_oquv_yili !== null
                              ? this.state.school.q_oquv_yili
                              : "O'quv yili"
                            : "O'quv yili"}
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col style={{ padding: "0" }} lg={4} md={12} sm={12}>
                    <div className={styles.muddat_text2}>
                      <div>
                        <h3>Hujjat topshirish muddati</h3>
                        <p>
                          {this.state.school !== null
                            ? this.state.school.q_muddat !== null
                              ? this.state.school.q_muddat
                              : "Muddati haqida ma'lumot"
                            : "Muddati haqida ma'lumot"}
                          {/* 10-20-sentabr kunlari */}
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col style={{ padding: "0" }} lg={4} md={12} sm={12}>
                    <div className={styles.muddat_text3}>
                      <div>
                        <h3>Imtihon kuni</h3>
                        <p>
                          {this.state.school !== null
                            ? this.state.school.q_imtihon !== null
                              ? this.state.school.q_imtihon
                              : "Imtixon kuni"
                            : "Imtixon kuni"}
                          {/* 25-sentabrdan 9-oktabrgacha */}
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>

            <Container fluid style={{ padding: "0" }}>
              <div className={styles.hujjat}>
                <div className={styles.hujjat_text} data-aos="fade-right">
                  <h3>Kerakli hujjatlar</h3>
                  <p style={{fontSize:'20px'}}>
                    <b>1.</b>
                    {this.state.school !== null
                      ? this.state.school.q_hujjat_t1 !== null
                        ? this.state.school.q_hujjat_t1
                        : "Kerakli hujjatlar to'g'risida ma'lumot"
                      : "Kerakli hujjatlar to'g'risida ma'lumot"}
                    {/* O‘quvchining tug‘ilganligi haqida guvohnoma (pdf-10Mb oshmagan holatda). */}
                  </p>
                  <p style={{fontSize:'20px'}}>
                    <b>2.</b>
                    {this.state.school !== null
                      ? this.state.school.q_hujjat_t2 !== null
                        ? this.state.school.q_hujjat_t2
                        : "Kerakli hujjatlar to'g'risida ma'lumot"
                      : "Kerakli hujjatlar to'g'risida ma'lumot"}
                    {/* 2019-2020 o‘quv yilini “4”va “5” baholarga bitirganligini tasdiqlovchi o‘quvchining tabeli. Maktab direktori tomonidan tasdiqlangan bo‘lishi kerak (pdf-10Mb oshmagan holatda). */}
                  </p>
                  <p style={{fontSize:'20px'}}>
                    <b>3.</b>
                    {this.state.school !== null
                      ? this.state.school.q_hujjat_t3 !== null
                        ? this.state.school.q_hujjat_t3
                        : "Kerakli hujjatlar to'g'risida ma'lumot"
                      : "Kerakli hujjatlar to'g'risida ma'lumot"}
                    {/* 3/4 Rasm (jpg/png/jpeg-formatida). */}
                  </p>
                  <p style={{fontSize:'20px'}}>
                    <b>Manzil:</b>
                    {this.state.school !== null
                      ? this.state.school.address !== null
                        ? this.state.school.address
                        : "Maktab manzili "
                      : "Maktab manzili "}
                    {/* Toshkent shahar, Yashnabod tumani, Mahtumquli ko’chasi Call-Center: 1206 (Ish vaqti 08:00dan – 20:00gacha) */}
                  </p>
                </div>
              </div>
            </Container>
            </div></div>
          </> )}
      </div>
  
    );
  }
}

export default Qabul;
