import React, { Component } from "react";
import styles from "../css/maktabmamuriyati.module.css";
// import Car from "react-multi-Car";
// import "react-multi-carousel/lib/styles.css";
import { Carousel as Car } from "antd";
import school1 from "../img/school19.jpg";
import school2 from "../img/school20.jpg";
import school3 from "../img/school25.jpg";
import school4 from "../img/school13.jpg";
import { Container, Row, Col } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
// import {FadeLoader} from 'react-spinners'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import axios from "axios";
import { url, user } from "../host/Host";
import { Carousel } from "react-bootstrap";
import Global from "../host/Global";
import { FadeLoader } from "react-spinners";
import { Tooltip } from "antd";
import { Button, Nav, Navbar } from "react-bootstrap";
import {NavLink} from 'react-router-dom'
// import school1 from "../img/school1.jpg";
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

import style from "./BoshSahifa.module.css";

export default class Maktabmamuriyati extends Component {
  state = {
    direktor: null,
    orin1: null,
    orin2: null,
    orin3: null,
    kutubxona: null,
    psixolog: null,
    kasaba: null,
    yetakchi: null,
    chqbt: null,
    loader: true,
    data: null,
  };
  getSchool = () => {
    var v = user;
    axios.get(`${url}/school-by-admin/${v}`).then((res) => {
      this.setState({ data: res.data });
    });
  };
  getStaff = () => {
    axios
      .get(`${url}/staff-by-school/${Global.schoolId}/`)
      .then((res) => {
        var direktor = [];
        var orin1 = [];
        var orin2 = [];
        var orin3 = [];
        var kutubxona = [];
        var psixolog = [];
        var kasaba = [];
        var yetakchi = [];
        var chqbt = [];
        res.data.map((item) => {
          if(item.speciality.length!==0){
            item.speciality.map(item1=>{
              if(item1===3){
                direktor.push(item)
              }
              if(item1===4){
                orin1.push(item)
              }
              if(item1===5){
                orin2.push(item)
              }
              if(item1===7){
                orin3.push(item)
              }
              if(item1===6){
                
                psixolog.push(item)
              }
              if(item1===9){
                yetakchi.push(item)
              }
              if(item1===8){
              
                kutubxona.push(item)
              }
              if(item1===9){
              
                kasaba.push(item)
              }
              if(item1===10){
                chqbt.push(item)
              }
    
            })
          }
    
        });
        this.setState({
          direktor: direktor,
          orin1: orin1,
          orin2: orin2,
          orin3: orin3,
          kutubxona: kutubxona,
          psixolog: psixolog,
          kasaba: kasaba,
          yetakchi: yetakchi,
          chqbt: chqbt,
        });
        setTimeout(() => {
          this.setState({
            loader: false,
          });
        }, 4000);
      })
      .catch((err) => {});
  };

  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
    this.getStaff();
    this.getSchool();
  }

  render() {
    const contentStyle = {
      height: "160px",
      color: "#fff",
      lineHeight: "160px",
      textAlign: "center",
      background: "#364d79",
    };

    return (
      <div>
        {this.state.loader === true ? (
          <div className="loaderT">
            <FadeLoader color="blue" loading={this.state.loader} size={120} />
          </div>
        ) : (
          <>
            {" "}
            <br />
            <br />
            <br />
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
            <div className={style.header} style={{ marginTop: "-60px" }}>
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
                        <NavLink className={style.nlik} to="/">
                          <span className={style.lik}>Bosh sahifa</span>
                        </NavLink>
                        <NavLink className={style.nlik} to="/hayot/">
                          <span className={style.lik}>Maktab hayoti</span>
                        </NavLink>
                        <NavLink className={style.nlik} to="/qabul/">
                          <span className={style.lik}>Qabul</span>
                        </NavLink>
                        <NavLink className={style.nlik} to="/yangiliklar/">
                          <span className={style.lik}>Yangiliklar</span>
                        </NavLink>
                        <NavLink className={style.nlik} to="/rahbariyat/">
                          <span className={style.lik}>Maktab ma'muriyati</span>
                        </NavLink>
                        <NavLink className={style.nlik} to="/alochilar/">
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
                    <h1>Maktabimiz ma'muriyati a'zolari bilan tanishing.</h1>

                    <a
                      target="_blank"
                      href={`tel: ${
                        this.state.data !== null ? this.state.data.phone : "#"
                      }`}
                    >
                      Biz bilan bog'laning
                    </a>
                  </Col>
                  <Col lg={7} md={7} sm={12} className={style.head_imgCol}>
                    <div className={style.head_img}>
                      <div className={style.comp}>
                        <img
                          src={
                            this.state.direktor !== null
                              ? this.state.direktor[0].image
                              : school1
                          }
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
              <div className={style.di} style={{ zIndex: "2" }}></div>
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
                      <p>
                        {this.state.data !== null
                          ? this.state.data.school_number
                          : ""}{" "}
                        - maktab
                      </p>
                    </div>
                  </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  style={{ zIndex: 345, borderColor: "white" }}
                />
                <Navbar.Collapse id="basic-navbar-nav" className={style.htr}>
                  <Nav className="me-auto" className={style.navT_nav}>
                    <NavLink className={style.navLik} to="/">
                      <span className={style.lik}>Bosh sahifa</span>
                    </NavLink>
                    <NavLink className={style.navLik} to="/hayot/">
                      <span className={style.lik}>Maktab hayoti</span>
                    </NavLink>
                    <NavLink className={style.navLik} to="/qabul/">
                      <span className={style.lik}>Qabul</span>
                    </NavLink>
                    <NavLink className={style.navLik} to="/yangiliklar/">
                      <span className={style.lik}>Yangiliklar</span>
                    </NavLink>
                    <NavLink className={style.navLik} to="/rahbariyat/">
                      <span className={style.lik}>Maktab ma'muriyati</span>
                    </NavLink>
                    <NavLink className={style.navLik} to="/alochilar/">
                      <span className={style.lik}>Maktab a'lochilari</span>
                    </NavLink>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
            <Container>
              <Row>
                {this.state.direktor !== null
                  ? this.state.direktor.map((item) => {
                      return (
                        <Col lg={6} md={6} sm={12}>
                          <div
                            className={styles.carddirektor}
                            data-aos="zoom-in-up"
                          >
                            <Row>
                              <Col
                                lg={12}
                                style={{
                                  border: "1px solid #0F4C81",
                                  backgroundColor: "#0F4C81",
                                  height: "400px",
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <img src={item.image} />
                                <p style={{ textAlign: "center" }}>
                                  Maktab direktori
                                </p>
                              </Col>
                              <Col
                                className={styles.cardwrap}
                                lg={12}
                                style={{
                                  border: "1px solid #0F4C81",
                                  backgroundColor: "#FCFCFC",
                                  paddingTop: "60px",
                                  height: "400px",
                                  overflowY: "auto",
                                }}
                              >
                                <Row>
                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      F.I.O:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.full_name}
                                    </span>
                                  </Col>
                                  {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Tug'ilgan sanasi:</span>
                                      <span className={styles.direktor}> 1974-yil</span>
                                        </Col> */}

                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      Mutaxasisligi:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.position}
                                    </span>
                                  </Col>
                                  {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Bitirgan oliygohi:</span>
                                      <span className={styles.direktor}>O'zbekiston Miliiy Universiteti</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>E-mail pochta:</span>
                                      <span className={styles.direktor}>alisherovich@gmail.com</span>
                                        </Col> */}
                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      Telefon raqami:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.phone}
                                    </span>
                                  </Col>
                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      Qo'shimcha:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.description}
                                    </span>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      );
                    })
                  : ""}

                {this.state.orin1 !== null
                  ? this.state.orin1.map((item) => {
                      return (
                        <Col lg={6} md={6} sm={12}>
                          <div
                            className={styles.carddirektor}
                            data-aos="zoom-in-up"
                          >
                            <Row>
                              <Col
                                lg={12}
                                style={{
                                  border: "1px solid #0F4C81",
                                  backgroundColor: "#0F4C81",
                                  height: "400px",
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <img src={item.image} />
                                <p style={{ textAlign: "center" }}>
                                  O'quv va tarbiyaviy ishlar bo'yicha direktor
                                  o'rinbosari
                                </p>
                              </Col>
                              <Col
                                className={styles.cardwrap}
                                lg={12}
                                style={{
                                  border: "1px solid #0F4C81",
                                  backgroundColor: "#FCFCFC",
                                  paddingTop: "60px",
                                }}
                              >
                                <Row>
                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      F.I.O:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.full_name}
                                    </span>
                                  </Col>
                                  {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Tug'ilgan sanasi:</span>
                                      <span className={styles.direktor}> 1974-yil</span>
                                        </Col> */}

                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      Mutaxasisligi:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.position}
                                    </span>
                                  </Col>
                                  {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Bitirgan oliygohi:</span>
                                      <span className={styles.direktor}>O'zbekiston Miliiy Universiteti</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>E-mail pochta:</span>
                                      <span className={styles.direktor}>alisherovich@gmail.com</span>
                                        </Col> */}
                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      Telefon raqami:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.phone}
                                    </span>
                                  </Col>
                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      Qo'shimcha:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.description}
                                    </span>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      );
                    })
                  : ""}

                {this.state.orin2 !== null
                  ? this.state.orin2.map((item) => {
                      return (
                        <Col lg={6} md={6} sm={12}>
                          <div
                            className={styles.carddirektor}
                            data-aos="zoom-in-up"
                          >
                            <Row>
                              <Col
                                lg={12}
                                style={{
                                  border: "1px solid #0F4C81",
                                  backgroundColor: "#0F4C81",
                                  height: "400px",
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <img src={item.image} />
                                <p style={{ textAlign: "center" }}>
                                  Ma'naviy-ma'rifiy ishlar bo'yicha direktor
                                  o'rinbosari
                                </p>
                              </Col>
                              <Col
                                className={styles.cardwrap}
                                lg={12}
                                style={{
                                  border: "1px solid #0F4C81",
                                  backgroundColor: "#FCFCFC",
                                  paddingTop: "60px",
                                  height: "400px",
                                  overflowY: "auto",
                                }}
                              >
                                <Row>
                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      F.I.O:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.full_name}
                                    </span>
                                  </Col>
                                  {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Tug'ilgan sanasi:</span>
                                      <span className={styles.direktor}> 1974-yil</span>
                                        </Col> */}

                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      Mutaxasisligi:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.position}
                                    </span>
                                  </Col>
                                  {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Bitirgan oliygohi:</span>
                                      <span className={styles.direktor}>O'zbekiston Miliiy Universiteti</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>E-mail pochta:</span>
                                      <span className={styles.direktor}>alisherovich@gmail.com</span>
                                        </Col> */}
                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      Telefon raqami:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.phone}
                                    </span>
                                  </Col>
                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      Qo'shimcha:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.description}
                                    </span>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      );
                    })
                  : ""}

                {this.state.orin3 !== null
                  ? this.state.orin3.map((item) => {
                      return (
                        <Col lg={6} md={6} sm={12}>
                          <div
                            className={styles.carddirektor}
                            data-aos="zoom-in-up"
                          >
                            <Row>
                              <Col
                                lg={12}
                                style={{
                                  border: "1px solid #0F4C81",
                                  backgroundColor: "#0F4C81",
                                  height: "400px",
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <img src={item.image} />
                                <p style={{ textAlign: "center" }}>
                                  Ma'muriy-xo’jalik ishlar bo'yicha direktor
                                  o'rinbosari
                                </p>
                              </Col>
                              <Col
                                className={styles.cardwrap}
                                lg={12}
                                style={{
                                  border: "1px solid #0F4C81",
                                  backgroundColor: "#FCFCFC",
                                  paddingTop: "60px",
                                }}
                              >
                                <Row>
                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      F.I.O:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.full_name}
                                    </span>
                                  </Col>
                                  {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Tug'ilgan sanasi:</span>
                                      <span className={styles.direktor}> 1974-yil</span>
                                        </Col> */}

                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      Mutaxasisligi:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.position}
                                    </span>
                                  </Col>
                                  {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Bitirgan oliygohi:</span>
                                      <span className={styles.direktor}>O'zbekiston Miliiy Universiteti</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>E-mail pochta:</span>
                                      <span className={styles.direktor}>alisherovich@gmail.com</span>
                                        </Col> */}
                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      Telefon raqami:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.phone}
                                    </span>
                                  </Col>
                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      Qo'shimcha:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.description}
                                    </span>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      );
                    })
                  : ""}

                {this.state.psixolog !== null
                  ? this.state.psixolog.map((item) => {
                      return (
                        <Col lg={6} md={6} sm={12}>
                          <div
                            className={styles.carddirektor}
                            data-aos="zoom-in-up"
                          >
                            <Row>
                              <Col
                                lg={12}
                                style={{
                                  border: "1px solid #0F4C81",
                                  backgroundColor: "#0F4C81",
                                  height: "400px",
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <img src={item.image} />
                                <p style={{ textAlign: "center" }}>
                                  Maktab amaliyotchi psixologi
                                </p>
                              </Col>
                              <Col
                                className={styles.cardwrap}
                                lg={12}
                                style={{
                                  border: "1px solid #0F4C81",
                                  backgroundColor: "#FCFCFC",
                                  paddingTop: "60px",
                                  height: "400px",
                                  overflowY: "auto",
                                }}
                              >
                                <Row>
                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      F.I.O:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.full_name}
                                    </span>
                                  </Col>
                                  {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Tug'ilgan sanasi:</span>
                                      <span className={styles.direktor}> 1974-yil</span>
                                        </Col> */}

                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      Mutaxasisligi:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.position}
                                    </span>
                                  </Col>
                                  {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Bitirgan oliygohi:</span>
                                      <span className={styles.direktor}>O'zbekiston Miliiy Universiteti</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>E-mail pochta:</span>
                                      <span className={styles.direktor}>alisherovich@gmail.com</span>
                                        </Col> */}
                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      Telefon raqami:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.phone}
                                    </span>
                                  </Col>
                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      Qo'shimcha:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.description}
                                    </span>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      );
                    })
                  : ""}

                {this.state.kasaba !== null
                  ? this.state.kasaba.map((item) => {
                      return (
                        <Col lg={6} md={6} sm={12}>
                          <div
                            className={styles.carddirektor}
                            data-aos="zoom-in-up"
                          >
                            <Row>
                              <Col
                                lg={12}
                                style={{
                                  border: "1px solid #0F4C81",
                                  backgroundColor: "#0F4C81",
                                  height: "400px",
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <img src={item.image} />
                                <p style={{ textAlign: "center" }}>
                                  Kasaba uyushma raisi
                                </p>
                              </Col>
                              <Col
                                className={styles.cardwrap}
                                lg={12}
                                style={{
                                  border: "1px solid #0F4C81",
                                  backgroundColor: "#FCFCFC",
                                  paddingTop: "60px",
                                }}
                              >
                                <Row>
                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      F.I.O:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.full_name}
                                    </span>
                                  </Col>
                                  {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Tug'ilgan sanasi:</span>
                                      <span className={styles.direktor}> 1974-yil</span>
                                        </Col> */}

                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      Mutaxasisligi:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.position}
                                    </span>
                                  </Col>
                                  {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Bitirgan oliygohi:</span>
                                      <span className={styles.direktor}>O'zbekiston Miliiy Universiteti</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>E-mail pochta:</span>
                                      <span className={styles.direktor}>alisherovich@gmail.com</span>
                                        </Col> */}
                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      Telefon raqami:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.phone}
                                    </span>
                                  </Col>
                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      Qo'shimcha:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.description}
                                    </span>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      );
                    })
                  : ""}

                {this.state.kutubxona !== null
                  ? this.state.kutubxona.map((item) => {
                      return (
                        <Col lg={6} md={6} sm={12}>
                          <div
                            className={styles.carddirektor}
                            data-aos="zoom-in-up"
                          >
                            <Row>
                              <Col
                                lg={12}
                                style={{
                                  border: "1px solid #0F4C81",
                                  backgroundColor: "#0F4C81",
                                  height: "400px",
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <img src={item.image} />
                                <p style={{ textAlign: "center" }}>
                                  Kutubxona mudirasi
                                </p>
                              </Col>
                              <Col
                                className={styles.cardwrap}
                                lg={12}
                                style={{
                                  border: "1px solid #0F4C81",
                                  backgroundColor: "#FCFCFC",
                                  paddingTop: "60px",
                                  height: "400px",
                                  overflowY: "auto",
                                }}
                              >
                                <Row>
                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      F.I.O:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.full_name}
                                    </span>
                                  </Col>
                                  {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Tug'ilgan sanasi:</span>
                                      <span className={styles.direktor}> 1974-yil</span>
                                        </Col> */}

                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      Mutaxasisligi:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.position}
                                    </span>
                                  </Col>
                                  {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Bitirgan oliygohi:</span>
                                      <span className={styles.direktor}>O'zbekiston Miliiy Universiteti</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>E-mail pochta:</span>
                                      <span className={styles.direktor}>alisherovich@gmail.com</span>
                                        </Col> */}
                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      Telefon raqami:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.phone}
                                    </span>
                                  </Col>
                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      Qo'shimcha:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.description}
                                    </span>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      );
                    })
                  : ""}

                {this.state.chqbt !== null
                  ? this.state.chqbt.map((item) => {
                      return (
                        <Col lg={6} md={6} sm={12}>
                          <div
                            className={styles.carddirektor}
                            data-aos="zoom-in-up"
                          >
                            <Row>
                              <Col
                                className={styles.cardwrap}
                                lg={12}
                                style={{
                                  border: "1px solid #0F4C81",
                                  backgroundColor: "#FCFCFC",
                                  paddingTop: "60px",
                                }}
                              >
                                <Row>
                                  <Col
                                    lg={12}
                                    style={{
                                      border: "1px solid #0F4C81",
                                      backgroundColor: "#0F4C81",
                                      height: "400px",
                                      display: "flex",
                                      flexDirection: "column",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}
                                  >
                                    <img src={item.image} />
                                    <p style={{ textAlign: "center" }}>
                                      Chaqiruvga qadar boshlang‘ich tayyorgarlik
                                      rahbari
                                    </p>
                                  </Col>
                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      F.I.O:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.full_name}
                                    </span>
                                  </Col>
                                  {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Tug'ilgan sanasi:</span>
                                      <span className={styles.direktor}> 1974-yil</span>
                                        </Col> */}

                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      Mutaxasisligi:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.position}
                                    </span>
                                  </Col>
                                  {/* <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>Bitirgan oliygohi:</span>
                                      <span className={styles.direktor}>O'zbekiston Miliiy Universiteti</span>
                                        </Col>
                                        <Col lg={12} style={{marginBottom:'5px'}}>
                                        <span className={styles.direktorbr}>E-mail pochta:</span>
                                      <span className={styles.direktor}>alisherovich@gmail.com</span>
                                        </Col> */}
                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      Telefon raqami:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.phone}
                                    </span>
                                  </Col>
                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      Qo'shimcha:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.description}
                                    </span>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      );
                    })
                  : ""}

                {this.state.yetakchi !== null
                  ? this.state.yetakchi.map((item) => {
                      return (
                        <Col lg={6} md={6} sm={12}>
                          <div
                            className={styles.carddirektor}
                            data-aos="zoom-in-up"
                          >
                            <Row>
                              <Col
                                lg={12}
                                style={{
                                  border: "1px solid #0F4C81",
                                  backgroundColor: "#0F4C81",
                                  height: "400px",
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <img src={item.image} />
                                <p style={{ textAlign: "center" }}>
                                  Boshlang'ich tashkilot yoshlar yetakchisi
                                </p>
                              </Col>
                              <Col
                                className={styles.cardwrap}
                                lg={12}
                                style={{
                                  border: "1px solid #0F4C81",
                                  backgroundColor: "#FCFCFC",
                                  paddingTop: "60px",
                                  height: "400px",
                                  overflowY: "auto",
                                }}
                              >
                                <Row>
                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      F.I.O:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.full_name}
                                    </span>
                                  </Col>
                                  {/* <Col lg={12} style={{marginBottom:'5px'}}>
                          <span className={styles.direktorbr}>Tug'ilgan sanasi:</span>
                        <span className={styles.direktor}> 1974-yil</span>
                          </Col> */}

                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      Mutaxasisligi:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.position}
                                    </span>
                                  </Col>
                                  {/* <Col lg={12} style={{marginBottom:'5px'}}>
                          <span className={styles.direktorbr}>Bitirgan oliygohi:</span>
                        <span className={styles.direktor}>O'zbekiston Miliiy Universiteti</span>
                          </Col>
                          <Col lg={12} style={{marginBottom:'5px'}}>
                          <span className={styles.direktorbr}>E-mail pochta:</span>
                        <span className={styles.direktor}>alisherovich@gmail.com</span>
                          </Col> */}
                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      Telefon raqami:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.phone}
                                    </span>
                                  </Col>
                                  <Col lg={12} style={{ marginBottom: "5px" }}>
                                    <span className={styles.direktorbr}>
                                      Qo'shimcha:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.description}
                                    </span>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      );
                    })
                  : ""}

                <Col lg={6} md={6} sm={12}>
                  <Car
                    autoplay
                    className={styles.sliderComment}
                    //  style={{backgroundColor:'lightgrey'}}
                  >
                    {this.state.direktor !== null
                      ? this.state.direktor.map((item) => {
                          return (
                            <div>
                              <article className="review" data-aos="zoom-in-up">
                                <div
                                  className={styles.imgcontainer}
                                  style={{ marginTop: "10px" }}
                                >
                                  <img
                                    src={item.image}
                                    className={styles.personimg}
                                  />
                                  <span className={styles.quoteicon}>
                                    <FaQuoteRight />
                                  </span>
                                </div>
                                <h4 className={styles.author}>
                                  {item.full_name}
                                </h4>
                                <p className={styles.job}>Maktab direktori</p>
                                <br />
                              </article>
                            </div>
                          );
                        })
                      : ""}
                    {this.state.orin1 !== null
                      ? this.state.orin1.map((item) => {
                          return (
                            <div>
                              <article className="review" data-aos="zoom-in-up">
                                <div
                                  className={styles.imgcontainer}
                                  style={{ marginTop: "10px" }}
                                >
                                  <img
                                    src={item.image}
                                    className={styles.personimg}
                                  />
                                  <span className={styles.quoteicon}>
                                    <FaQuoteRight />
                                  </span>
                                </div>
                                <h4 className={styles.author}>
                                  {item.full_name}
                                </h4>
                                <p className={styles.job}>
                                  O'quv va tarbiyaviy ishlar bo'yicha direktor
                                  o'rinbosari
                                </p>
                                <br />
                              </article>
                            </div>
                          );
                        })
                      : ""}
                    {this.state.orin2 !== null
                      ? this.state.orin2.map((item) => {
                          return (
                            <div>
                              <article className="review" data-aos="zoom-in-up">
                                <div
                                  className={styles.imgcontainer}
                                  style={{ marginTop: "10px" }}
                                >
                                  <img
                                    src={item.image}
                                    className={styles.personimg}
                                  />
                                  <span className={styles.quoteicon}>
                                    <FaQuoteRight />
                                  </span>
                                </div>
                                <h4 className={styles.author}>
                                  {item.full_name}
                                </h4>
                                <p className={styles.job}>
                                  Ma'naviy-ma'rifiy ishlar bo'yicha direktor
                                  o'rinbosari
                                </p>
                                <br />
                              </article>
                            </div>
                          );
                        })
                      : ""}
                    {this.state.orin3 !== null
                      ? this.state.orin3.map((item) => {
                          return (
                            <div>
                              <article className="review" data-aos="zoom-in-up">
                                <div
                                  className={styles.imgcontainer}
                                  style={{ marginTop: "10px" }}
                                >
                                  <img
                                    src={item.image}
                                    className={styles.personimg}
                                  />
                                  <span className={styles.quoteicon}>
                                    <FaQuoteRight />
                                  </span>
                                </div>
                                <h4 className={styles.author}>
                                  {item.full_name}
                                </h4>
                                <p className={styles.job}>
                                  Ma'muriy-xo’jalik ishlar bo'yicha direktor
                                  o'rinbosari
                                </p>
                                <br />
                              </article>
                            </div>
                          );
                        })
                      : ""}
                    {this.state.psixolog !== null
                      ? this.state.psixolog.map((item) => {
                          return (
                            <div>
                              <article className="review" data-aos="zoom-in-up">
                                <div
                                  className={styles.imgcontainer}
                                  style={{ marginTop: "10px" }}
                                >
                                  <img
                                    src={item.image}
                                    className={styles.personimg}
                                  />
                                  <span className={styles.quoteicon}>
                                    <FaQuoteRight />
                                  </span>
                                </div>
                                <h4 className={styles.author}>
                                  {item.full_name}
                                </h4>
                                <p className={styles.job}>
                                  Maktab amaliyotchi psixologi
                                </p>
                                <br />
                              </article>
                            </div>
                          );
                        })
                      : ""}
                    {this.state.kasaba !== null
                      ? this.state.kasaba.map((item) => {
                          return (
                            <div>
                              <article className="review" data-aos="zoom-in-up">
                                <div
                                  className={styles.imgcontainer}
                                  style={{ marginTop: "10px" }}
                                >
                                  <img
                                    src={item.image}
                                    className={styles.personimg}
                                  />
                                  <span className={styles.quoteicon}>
                                    <FaQuoteRight />
                                  </span>
                                </div>
                                <h4 className={styles.author}>
                                  {item.full_name}
                                </h4>
                                <p className={styles.job}>
                                  Kasaba uyushma raisi
                                </p>
                                <br />
                              </article>
                            </div>
                          );
                        })
                      : ""}
                    {this.state.kutubxona !== null
                      ? this.state.kutubxona.map((item) => {
                          return (
                            <div>
                              <article className="review" data-aos="zoom-in-up">
                                <div
                                  className={styles.imgcontainer}
                                  style={{ marginTop: "10px" }}
                                >
                                  <img
                                    src={item.image}
                                    className={styles.personimg}
                                  />
                                  <span className={styles.quoteicon}>
                                    <FaQuoteRight />
                                  </span>
                                </div>
                                <h4 className={styles.author}>
                                  {item.full_name}
                                </h4>
                                <p className={styles.job}>Kutubxona mudirasi</p>
                                <br />
                              </article>
                            </div>
                          );
                        })
                      : ""}
                    {this.state.chqbt !== null
                      ? this.state.chqbt.map((item) => {
                          return (
                            <div>
                              <article className="review" data-aos="zoom-in-up">
                                <div
                                  className={styles.imgcontainer}
                                  style={{ marginTop: "10px" }}
                                >
                                  <img
                                    src={item.image}
                                    className={styles.personimg}
                                  />
                                  <span className={styles.quoteicon}>
                                    <FaQuoteRight />
                                  </span>
                                </div>
                                <h4 className={styles.author}>
                                  {item.full_name}
                                </h4>
                                <p className={styles.job}>
                                  Chaqiruvga qadar boshlang‘ich tayyorgarlik
                                  rahbari
                                </p>
                                <br />
                              </article>
                            </div>
                          );
                        })
                      : ""}
                    {this.state.yetakchi !== null
                      ? this.state.yetakchi.map((item) => {
                          return (
                            <div>
                              <article className="review" data-aos="zoom-in-up">
                                <div
                                  className={styles.imgcontainer}
                                  style={{ marginTop: "10px" }}
                                >
                                  <img
                                    src={item.image}
                                    className={styles.personimg}
                                  />
                                  <span className={styles.quoteicon}>
                                    <FaQuoteRight />
                                  </span>
                                </div>
                                <h4 className={styles.author}>
                                  {item.full_name}
                                </h4>
                                <p className={styles.job}>
                                  Boshlang'ich tashkilot yoshlar yetakchisi
                                </p>
                                <br />
                              </article>
                            </div>
                          );
                        })
                      : ""}
                  </Car>
                </Col>
              </Row>
            </Container>
          </>
        )}{" "}
      </div>
    );
  }
}
