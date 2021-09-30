import React, { Component } from "react";
import styles from "../css/maktabHayoti.module.css";
import "../css/maktahayotiAli.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Carousel } from "antd";

import "bootstrap/dist/css/bootstrap.min.css";
import school2 from "../img/school2.jpg";
import school3 from "../img/school3.jpg";
import school4 from "../img/school4.jpg";
import school5 from "../img/school5.jpg";
import school7 from "../img/school7.jpg";
import school8 from "../img/school8.jpg";
import school9 from "../img/school9.jpg";
import school10 from "../img/school10.jpg";
import school11 from "../img/school11.jpg";
import school12 from "../img/school12.jpg";
import school13 from "../img/school13.jpg";
import { Tooltip } from "antd";
import school1 from "../img/school1.jpg";

import style from "./BoshSahifa.module.css";

// import { Link } from "react-router-dom";
import { DownCircleOutlined } from "@ant-design/icons";
import { BiStop, BiRightArrowAlt } from "react-icons/bi";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link, NavLink } from "react-router-dom";
import { Button, Nav, Navbar } from "react-bootstrap";

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

import { FadeLoader } from "react-spinners";
import axios from "axios";

import { Pannellum } from "pannellum-react";
import myImage from "../img/360.jpeg";

import Global from "../host/Global";
import { url, user } from "../host/Host";

export default class MaktabHayoti extends Component {
  state = {
    loading: true,
    data: [],
  };
  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
    // var a = window.location.href.split("/");
    var v = user;
    axios.get(`${url}/school-by-admin/${v}`).then((res) => {
      this.setState({ data: res.data });
      setTimeout(() => {
        this.setState({
          loading: false,
        });
      }, 2000);
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {this.state.loading === true ? (
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
                      this.state.data !== null
                        ? this.state.data.email
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
                      this.state.data !== null
                        ? this.state.data.phone
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
                    <Navbar.Toggle
                      aria-controls="basic-navbar-nav"
                      style={{ border: "none", zIndex: 4567 }}
                    />
                    <Navbar.Collapse
                      id="basic-navbar-nav"
                      className={style.jkr}
                    >
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
              <Container>
                <Row>
                  <Col lg={5} md={5} sm={12} className={style.head_textCol}>
                    {/* <p>Sifat va qulay narxlar</p> */}
                    <h1>Maktabimiz hayoti bilan tanishing.</h1>

                    <a target="_blank" href={`tel: ${this.state.data.phone}`}>
                      Biz bilan bog'laning
                    </a>
                  </Col>
                  <Col lg={7} md={7} sm={12} className={style.head_imgCol}>
                    <div className={style.head_img}>
                      <div className={style.comp}>
                        <img
                          src={
                            data !== null && data.m_h_h2 !== null
                              ? data.m_h_h2
                              : school1
                          }
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
              <div className={style.di}></div>
            </div>
            <div
              className={style.navG}
              data-aos="fade-bottom"
              data-aos-anchor-placement="bottom-top"
            >
              <Navbar style={{ position: "relative" }} expand="lg">
                <Navbar.Brand>
                  <NavLink
                    className={style.navB}
                    style={{ color: "white", textDecoration: "none" }}
                    to="/"
                  >
                    <div class={style.brand_text}>
                      <p>{this.state.data.school_number} - maktab</p>
                    </div>
                  </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  style={{ zIndex: 345, borderColor: "white" }}
                />
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

            <Container fluid className={styles.secondContainer} id="1">
              <Row>
                <Col lg={1} className={styles.iconPath}>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{ position: "absolute", top: "200px", left: "35px" }}
                  >
                    <BiStop style={{ fontSize: "40px", color: "#0F4C81" }} />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{ position: "absolute", top: "450px", left: "35px" }}
                  >
                    <BiStop style={{ fontSize: "40px", color: "#0F4C81" }} />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{ position: "absolute", top: "700px", left: "35px" }}
                  >
                    <BiStop style={{ fontSize: "40px", color: "#0F4C81" }} />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{ position: "absolute", top: "950px", left: "35px" }}
                  >
                    <BiStop style={{ fontSize: "40px", color: "#0F4C81" }} />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{
                      position: "absolute",
                      top: "1200px",
                      left: "35px",
                    }}
                  >
                    <BiStop style={{ fontSize: "40px", color: "#0F4C81" }} />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{
                      position: "absolute",
                      top: "1450px",
                      left: "35px",
                    }}
                  >
                    <BiStop style={{ fontSize: "40px", color: "#0F4C81" }} />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{
                      position: "absolute",
                      top: "1700px",
                      left: "35px",
                    }}
                  >
                    <BiStop style={{ fontSize: "40px", color: "#0F4C81" }} />
                  </div>
                </Col>
                <Col lg={11}>
                  <div className={styles.secondMain}>
                    <h1 className={styles.secondHeading} data-aos="zoom-in">
                      Tadbirlar va qadriyatlar
                    </h1>
                  </div>
                  <Container fluid>
                    <Row>
                      <Col lg={12}>
                        <p className={styles.secondText} data-aos="zoom-in-up">
                          {data !== null && data.m_h_tq !== null
                            ? data.m_h_tq
                            : `Uzoqlarda, tog'lar so'zining orqasida, Vokaliya va
                        Consonantia mamlakatlaridan uzoqroqda ko'r matnlar
                        yashaydi. Ular alohida yashashadi Alohida ular Semantika
                        qirg'og'idagi Bookmarksgroveda, katta til okeanida
                        yashaydilar. Duden nomli kichik daryo ularning joylari
                        bo'ylab oqadi va uni zarur regelialiya bilan ta'minlaydi.
                        Bu paradisematik mamlakat, unda jumlaning qovurilgan
                        qismlari og'zingizga uchadi. Hattoki qudratli ishora ham
                        ko'r-ko'rona matnlarni nazorat qila olmaydi, bu deyarli
                        nostografik hayot.`}
                        </p>
                      </Col>
                      <Col lg={12}>
                        <Row>
                          <Col xs={12} sm={12} md={12} lg={4}>
                            <div className={styles.box}>
                              <Image
                                src={
                                  data !== null && data.m_h_navruz !== null
                                    ? data.m_h_navruz
                                    : school1
                                }
                                className={styles.secondImage}
                                data-aos="zoom-in-up"
                              />
                              <span>Navro'z bayrami</span>
                            </div>
                          </Col>
                          <Col xs={12} sm={12} md={12} lg={4}>
                            <div className={styles.box}>
                              <Image
                                src={
                                  data !== null && data.m_h_mustaqillik !== null
                                    ? data.m_h_mustaqillik
                                    : school2
                                }
                                className={styles.secondImage}
                                data-aos="zoom-in-up"
                              />
                              <span>Mustaqillik kuni</span>
                            </div>
                          </Col>
                          <Col xs={12} sm={12} md={12} lg={4}>
                            <div className={styles.box}>
                              <Image
                                src={
                                  data !== null && data.m_h_bitiruv !== null
                                    ? data.m_h_bitiruv
                                    : school4
                                }
                                className={styles.secondImage}
                                data-aos="zoom-in-up"
                              />
                              <span>Bitiruv tadbiri</span>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={4} md={12} sm={12} className={styles.transport}>
                        <Image
                          style={{ width: "100%" }}
                          src={
                            data !== null && data.m_h_t !== null
                              ? data.m_h_t
                              : school5
                          }
                          className={styles.secondImage}
                          data-aos="zoom-in-up"
                        />
                      </Col>
                      <Col
                        lg={8}
                        md={12}
                        sm={12}
                        className={styles.transporttext}
                        data-aos="zoom-in-up"
                      >
                        <h1>Transport xizmati</h1>
                        <p>
                          {data.m_h_t_t !== null && data !== null
                            ? data.m_h_t_t
                            : `Talabalar shaharchasida sayohat qilishning ko'plab
                            variantlari mavjud. U erda ko'r-ko'rona matnlar
                            yashaydi. Alohida ular Semantika qirg'og'idagi
                            Bookmarksgroveda, katta til okeanida yashaydilar.
                            Duden nomli kichik daryo ularning joylari bo'ylab
                            oqadi va uni zarur regelialiya bilan ta'minlaydi. Bu
                            paradizmatik. Bu jumlaning qovurilgan qismlari uchib
                            ketadigan jannat matikasi mamlakati.`}
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </Col>
                <Col lg={12} className={styles.panoramic}>
                  <div className={styles.PannellumReactContainer}>
                    <Pannellum
                      className={styles.PannellumReact}
                      width="100%"
                      height="500px"
                      image={myImage}
                      pitch={10}
                      yaw={180}
                      hfov={110}
                      autoLoad
                      onLoad={() => {
                        console.log("panorama loaded");
                      }}
                    ></Pannellum>
                    <div className="paramumic_data">
                      <div>
                        <h2 style={{ width: "80%", marginLeft: "10%" }}>
                          {data.m_h_k_h !== null && data !== null
                            ? data.m_h_k_h
                            : `Talabalar shaharchasida sayohat qilishning ko'plab
                            variantlari mavjud.`}
                        </h2>
                        <h4
                          style={{
                            width: "80%",
                            marginLeft: "10%",
                            height: "200px",
                            overflowY: "auto",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {data.m_h_k_t !== null && data !== null
                            ? data.m_h_k_t
                            : `Talabalar shaharchasida sayohat qilishning ko'plab
                            variantlari mavjud. U erda ko'r-ko'rona matnlar
                            yashaydi.`}
                        </h4>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={1} className={styles.iconPath}>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{ position: "absolute", top: "200px", left: "35px" }}
                  >
                    <BiStop style={{ fontSize: "40px", color: "black" }} />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{ position: "absolute", top: "450px", left: "35px" }}
                  >
                    <BiStop style={{ fontSize: "40px", color: "black" }} />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{ position: "absolute", top: "700px", left: "35px" }}
                  >
                    <BiStop style={{ fontSize: "40px", color: "black" }} />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{ position: "absolute", top: "950px", left: "35px" }}
                  >
                    <BiStop style={{ fontSize: "40px", color: "black" }} />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{
                      position: "absolute",
                      top: "1200px",
                      left: "35px",
                    }}
                  >
                    <BiStop style={{ fontSize: "40px", color: "black" }} />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{
                      position: "absolute",
                      top: "1450px",
                      left: "35px",
                    }}
                  >
                    <BiStop style={{ fontSize: "40px", color: "black" }} />
                  </div>
                </Col>
                <Col lg={11} md={12} sm={12}>
                  <Row>
                    <Col
                      lg={4}
                      md={6}
                      sm={12}
                      className={styles.cardBolimlar}
                      data-aos="zoom-in-up"
                    >
                      <Image
                        src={
                          data.m_h_oshxona !== null && data !== null
                            ? data.m_h_oshxona
                            : school7
                        }
                      />
                      <div
                        style={{
                          background:
                            "linear-gradient(rgba(72, 142, 247, 0.974),rgba(3, 52, 177, 0.981),rgb(5, 47, 138), rgb(3, 25, 99))",
                          marginTop: "30px",
                          padding: "10%",
                          height: "450px",
                        }}
                      >
                        <h1>Maktab oshxonasi</h1>
                        <p>
                          {data.m_h_oshxona_t !== null && data !== null
                            ? data.m_h_oshxona_t
                            : `Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                            katta til okeanida yashaydilar. Dudenmut nomli kichik
                            daryo.`}
                        </p>
                        {/* <h3 style={{ marginBottom: "20px" }}>
                          <Link
                            to="/maktaboshxonasi/uz"
                            style={{
                              color: "rgba(255,255,255,0.7)",
                              textDecoration: "none",
                            }}
                          >
                            Batafsil{" "}
                            <BiRightArrowAlt
                              style={{
                                fontSize: "30px",
                                color: "rgba(255,255,255,0.7)",
                              }}
                            />
                          </Link>
                        </h3> */}
                      </div>
                    </Col>
                    <Col
                      lg={4}
                      md={6}
                      sm={12}
                      className={styles.cardBolimlar}
                      data-aos="zoom-in-up"
                    >
                      <Image
                        src={
                          data.m_h_sport !== null && data !== null
                            ? data.m_h_sport
                            : school8
                        }
                      />
                      <div
                        style={{
                          background:
                            "linear-gradient(rgba(72, 142, 247, 0.974),rgba(3, 52, 177, 0.981),rgb(5, 47, 138), rgb(3, 25, 99))",
                          marginTop: "30px",
                          padding: "10%",
                          height: "450px",
                        }}
                      >
                        <h1>Sport mashg'ulotlari</h1>
                        <p>
                          {data.m_h_sport_t !== null && data !== null
                            ? data.m_h_sport_t
                            : `
                            Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                            katta til okeanida yashaydilar. Dudenmut nomli kichik
                            daryo.`}
                        </p>
                        {/* <h3 style={{ marginBottom: "20px" }}>
                          <Link
                            to="/sportmashgulotlari/uz"
                            style={{
                              color: "rgba(255,255,255,0.7)",
                              textDecoration: "none",
                            }}
                          >
                            Batafsil{" "}
                            <BiRightArrowAlt
                              style={{
                                fontSize: "30px",
                                color: "rgba(255,255,255,0.7)",
                              }}
                            />
                          </Link>
                        </h3> */}
                      </div>
                    </Col>
                    <Col
                      lg={4}
                      md={6}
                      sm={12}
                      className={styles.cardBolimlar}
                      style={{ marginRight: "0%" }}
                      data-aos="zoom-in-up"
                    >
                      <Image
                        src={
                          data.m_h_musiqa !== null && data !== null
                            ? data.m_h_musiqa
                            : school9
                        }
                      />
                      <div
                        style={{
                          background:
                            "linear-gradient(rgba(72, 142, 247, 0.974),rgba(3, 52, 177, 0.981),rgb(5, 47, 138), rgb(3, 25, 99))",
                          marginTop: "30px",
                          padding: "10%",
                          height: "450px",
                        }}
                      >
                        <h1>San'at va madaniyat</h1>
                        <p>
                          {data.m_h_musiqa_t !== null && data !== null
                            ? data.m_h_musiqa_t
                            : `Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                            katta til okeanida yashaydilar. Dudenmut nomli kichik
                            daryo.`}
                        </p>
                        {/* <h3 style={{ marginBottom: "20px" }}>
                          <Link
                            to="/sanatvamadaniyat/uz"
                            style={{
                              color: "rgba(255,255,255,0.7)",
                              textDecoration: "none",
                            }}
                          >
                            Batafsil{" "}
                            <BiRightArrowAlt
                              style={{
                                fontSize: "30px",
                                color: "rgba(255,255,255,0.7)",
                              }}
                            />
                          </Link>
                        </h3> */}
                      </div>
                    </Col>
                    <Col
                      lg={4}
                      md={6}
                      sm={12}
                      className={styles.cardBolimlar}
                      data-aos="zoom-in-up"
                    >
                      <Image
                        src={
                          data.m_h_axborot !== null && data !== null
                            ? data.m_h_axborot
                            : school10
                        }
                      />
                      <div
                        style={{
                          background:
                            "linear-gradient(rgba(72, 142, 247, 0.974),rgba(3, 52, 177, 0.981),rgb(5, 47, 138), rgb(3, 25, 99))",
                          marginTop: "30px",
                          padding: "10%",
                          height: "450px",
                        }}
                      >
                        <h1>Axborot texnologiyalari</h1>
                        <p>
                          {data.m_h_axborot_t !== null && data !== null
                            ? data.m_h_axborot_t
                            : `Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                          katta til okeanida yashaydilar. Dudenmut nomli kichik
                          daryo.`}
                        </p>
                        {/* <h3 style={{ marginBottom: "20px" }}>
                          <Link
                            to="/axborottexnologiyalari/uz"
                            style={{
                              color: "rgba(255,255,255,0.7)",
                              textDecoration: "none",
                            }}
                          >
                            Batafsil{" "}
                            <BiRightArrowAlt
                              style={{
                                fontSize: "30px",
                                color: "rgba(255,255,255,0.7)",
                              }}
                            />
                          </Link>
                        </h3> */}
                      </div>
                    </Col>
                    <Col
                      lg={4}
                      md={6}
                      sm={12}
                      className={styles.cardBolimlar}
                      data-aos="zoom-in-up"
                    >
                      <Image
                        src={
                          data.m_h_xavfsizlik !== null && data !== null
                            ? data.m_h_xavfsizlik
                            : school11
                        }
                      />
                      <div
                        style={{
                          background:
                            "linear-gradient(rgba(72, 142, 247, 0.974),rgba(3, 52, 177, 0.981),rgb(5, 47, 138), rgb(3, 25, 99))",
                          marginTop: "30px",
                          padding: "10%",
                          height: "450px",
                        }}
                      >
                        <h1>Xavfsizlik va qo'riqlash</h1>
                        <p>
                          {data.m_h_xavfsizlik_t !== null && data !== null
                            ? data.m_h_xavfsizlik_t
                            : `Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                          katta til okeanida yashaydilar. Dudenmut nomli kichik
                          daryo.`}
                        </p>
                        {/* <h3 style={{ marginBottom: "20px" }}>
                          <Link
                            to="/xavfsizlikvaqoriqlash/uz"
                            style={{
                              color: "rgba(255,255,255,0.7)",
                              textDecoration: "none",
                            }}
                          >
                            Batafsil{" "}
                            <BiRightArrowAlt
                              style={{
                                fontSize: "30px",
                                color: "rgba(255,255,255,0.7)",
                              }}
                            />
                          </Link>
                        </h3> */}
                      </div>
                    </Col>
                    <Col
                      lg={4}
                      md={6}
                      sm={12}
                      className={styles.cardBolimlar}
                      style={{ marginRight: "0%" }}
                      data-aos="zoom-in-up"
                    >
                      <Image
                        src={
                          data.m_h_tibbiyot !== null && data !== null
                            ? data.m_h_tibbiyot
                            : school12
                        }
                      />
                      <div
                        style={{
                          background:
                            "linear-gradient(rgba(72, 142, 247, 0.974),rgba(3, 52, 177, 0.981),rgb(5, 47, 138), rgb(3, 25, 99))",
                          marginTop: "30px",
                          padding: "10%",
                          height: "450px",
                        }}
                      >
                        <h1>Sog'lik va salomatlik</h1>
                        <p>
                          {data.m_h_tibbiyot_t !== null && data !== null
                            ? data.m_h_tibbiyot_t
                            : `Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                          katta til okeanida yashaydilar. Dudenmut nomli kichik
                          daryo.`}
                        </p>
                        {/* <h3 style={{ marginBottom: "20px" }}>
                          <Link
                            to="/soglikvayaxshilik/uz"
                            style={{
                              color: "rgba(255,255,255,0.7)",
                              textDecoration: "none",
                            }}
                          >
                            Batafsil{" "}
                            <BiRightArrowAlt
                              style={{
                                fontSize: "30px",
                                color: "rgba(255,255,255,0.7)",
                              }}
                            />
                          </Link>
                        </h3> */}
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col lg={12}>
                  <Row>
                    <Col lg={6} md={6} sm={12} className={styles.director}>
                      <Image
                        src={
                          data.m_h_o_r !== null && data !== null
                            ? data.m_h_o_r
                            : school13
                        }
                      />
                    </Col>
                    <Col
                      lg={6}
                      md={6}
                      sm={12}
                      className={styles.director}
                      style={{
                        background:
                          "linear-gradient(rgba(72, 142, 247, 0.974),rgba(3, 52, 177, 0.981),rgb(5, 47, 138), rgb(3, 25, 99))",
                        padding: "10%",
                      }}
                    >
                      <p>
                        {data.m_h_o !== null && data !== null
                          ? data.m_h_o
                          : `Bizning maqsadimiz moliyaviy xizmatlar sohasining
                          markazida bo'lishdir, chunki korxonalar bo'ylab biznes
                          kengaymoqda.`}
                      </p>
                      <h1>
                        {data.m_h_o_t !== null && data !== null
                          ? data.m_h_o_t
                          : "Alisa"}
                      </h1>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </div>
    );
  }
}
