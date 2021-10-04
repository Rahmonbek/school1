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

import React, { Component } from "react";
import { ContainerDashboard, XushKelibsiz } from "./StyleBoshSahifa";
import { Button, Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { NavbarContainer } from "./StyleBoshSahifa";
import rasm1 from "../img/vasily-koloda-8CqDvPuo_kI-unsplash.jpg";
import rasm2 from "../img/mira-kireeva-xTq26wLo5do-unsplash.jpg";
import rasm3 from "../img/javier-trueba-iQPr1XkF5F0-unsplash.jpg";
import sty from "./sty.module.css";
import gerb from "../img/pngegg.png";
import rasm41 from "../img/1.jpg";
import rasm42 from "../img/2.jpg";
import rasm43 from "../img/3.jpg";
import rasm44 from "../img/4.jpg";
import rasm45 from "../img/5.jpg";
import rasm46 from "../img/6.jpg";
import flagUZ from "../img/flagUZ.png";
import flagRU from "../img/flagRU.png";
import bg1t from "../img/bg1t.jpg";
import bg2t from "../img/bg2t.jpg";
import bg3t from "../img/bg3t.jpg";
import "../App.css";
import { Tooltip, Carousel, message } from "antd";
import style from "./BoshSahifa.module.css";
import { Link, NavLink } from "react-router-dom";
import BoshSahifaDavomi from "./BoshSahifaDavomi";
import MaktabTadbirlari from "./MaktabTadbirlari";
import Footer from "./Footer";
import NavBar from "./Navbar";
import maktab from "../img/1 g.jpg";
import FadeLoader from "react-spinners/FadeLoader";
import { getNews } from "../host/Config";
import { url, user } from "../host/Host";
import axios from "axios";
// import Clock from 'react-live-clock';
import headerT from "../img/priscilla-du-preez-XkKCui44iM0-unsplash.jpg";
import YouTube from "react-youtube";
import Global from "../host/Global";
import { Clock } from "./Clock";

export default class BoshSahifa extends Component {
  state = {
    loader: true,
    news: [],
    id: 0,
    school: null,
    clock: "00 : 00 : 00",
  };
  getSchool = () => {
    axios.get(`${url}/school-by-admin/${Global.user}`).then((res) => {
      this.setState({
        school: res.data,
      });
      setTimeout(() => {
        this.setState({
          loader: false,
        });
      }, 2000);
    });
  };
  getNews = () => {
    getNews()
      .then((res) => {
        if (window.location.href.indexOf("id=") === -1) {
          // var a = window.location.href.split("/");
          var v = user;

          this.setState({
            news: res.data,
            id: v,
          });
        } else {
          this.setState({
            news: res.data,
            id: window.location.href.slice(
              window.location.href.indexOf("=") + 1
            ),
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getNews();
    this.getSchool();
    window.addEventListener("load", () => {
      this.setState({
        loader: false,
      });
    });
    // window.alert('Sayt test rejimida ishlamoqda!!!')
    setInterval(() => {
      this.setState({ clock: Clock() });
    }, 1000);
  }
  render() {
    const props = {
      dots: false,
      infinite: true,
      speed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        {this.state.loader ? (
          <div className="loaderT">
            <FadeLoader color="blue" loading={this.state.loader} size={120} />
            <div>
              <p>Sayt test rejimida ishlamoqda</p>
            </div>
          </div>
        ) : (
          <div>
            {/* <NavBar/> */}

            <div className="iconsHead">
              <div>
                <Tooltip
                  placement="left"
                  title={`${
                    this.state.school !== null
                      ? this.state.school.email
                      : "ittower01@gmail.com"
                  }`}
                >
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
                  href="https://t.me/Xorazm_5_maktab"
                >
                  <i className="fab fa-telegram"></i>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  style={{ borderTop: " 1px solid #1b6602" }}
                  className="ahref"
                  href="https://www.instagram.com/5ummumtalimmaktabi/"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  style={{ borderTop: " 1px solid #1b6602" }}
                  className="ahref"
                  href="https://www.facebook.com/5-sonli-maktab-283432626789189/?ref=pages_you_manage"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  style={{ borderTop: " 1px solid #1b6602" }}
                  className="ahref"
                  href="https://www.youtube.com/channel/UCTU9AVjpeZQLSSh3rlwTpDw"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div>
                <Tooltip placement="left" title="+998 97 790 28 01">
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
                        : "+998 97 790 28 01"
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
                      className={style.NavbarCollapse}
                      aria-controls="basic-navbar-nav"
                      style={{
                        border: "none",
                        zIndex: 4567,
                      }}
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

                    <h1>
                      Xorazm viloyati Gurlan tumani{" "}
                      {this.state.school.school_number +
                        "-" +
                        this.state.school.type}
                    </h1>

                    <a target="_blank" href={`tel: ${this.state.school.phone}`}>
                      Biz bilan bog'laning
                    </a>
                  </Col>
                  <Col lg={7} md={7} sm={12} className={style.head_imgCol}>
                    <div className={style.head_img}>
                      <div className={style.comp}>
                        <img
                          src={
                            this.state.school !== null
                              ? this.state.school.b_r1
                              : rasm1
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
                      <p>{this.state.school.school_number} - maktab</p>
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

            {/* <div className="oq"></div> */}
            <div className={style.container}>
              <Row>
                <Col lg={4} md={6} sm={12}>
                  <div className={style.containercha}>
                    <img
                      src={
                        this.state.school !== null
                          ? this.state.school.b_c2 !== null
                            ? this.state.school.b_c2
                            : rasm2
                          : rasm2
                      }
                      className={style.image}
                    />
                    <div className={style.overlay}>
                      <h3>
                        Yangiliklar
                        <br />
                        <p>
                          Maktabimizga doir bo'lgan yangiliklardan xabardor
                          bo'ling
                        </p>
                      </h3>

                      <Link className={style.sah} to={`/yangiliklar/`}>
                        Sahifaga o'tish
                      </Link>
                      <br />
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <div
                    className={style.containercha}
                    id={style.containerChaCentre}
                  >
                    <img
                      src={
                        this.state.school !== null
                          ? this.state.school.b_c3 !== null
                            ? this.state.school.b_c3
                            : rasm2
                          : rasm2
                      }
                      className={style.image}
                    />
                    <div className={style.overlay}>
                      <h3>
                        Fotolavhalar
                        <br />{" "}
                        <p>
                          Endi siz maktabimizning fotolavhalarini ko'rishingiz
                          mumkin
                        </p>
                      </h3>

                      <Link className={style.sah} to={`/gallery/`}>
                        Sahifaga o'tish
                      </Link>
                      <br />
                    </div>
                  </div>
                </Col>

                <Col lg={4} md={6} sm={12}>
                  <div className={style.containercha}>
                    <img
                      src={
                        this.state.school !== null
                          ? this.state.school.b_c1 !== null
                            ? this.state.school.b_c1
                            : rasm2
                          : rasm2
                      }
                      className={style.image}
                    />
                    <div className={style.overlay}>
                      <h3>
                        Yutuqlarimiz
                        <br />{" "}
                        <p>
                          Sizda bizning biz erishgan yutuqlar bilan tanishib
                          chiqish imkoniyat bor
                        </p>
                      </h3>

                      <Link className={style.sah} to={`/yutuqlar/`}>
                        Sahifaga o'tish
                      </Link>
                      <br />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            <div className={style.containerRow}>
              <Row>
                <Col xs={12} sm={12} md={4} lg={4} className={style.col}>
                  <h3 className={style.tit}>Maktabga video sayohat</h3>
                  <div className={style.chiziq}></div>
                  {/* <img src={rasm1} className={style.img}/> */}
                  <YouTube
                    videoId={
                      this.state.school !== null
                        ? this.state.school.video !== null
                          ? this.state.school.video.slice(
                              this.state.school.video.indexOf("youtu.be/") + 9
                            )
                          : ""
                        : ""
                    }
                    opts={{
                      width: "100%",
                      height: "300px",
                      playerVars: {
                        // https://developers.google.com/youtube/player_parameters
                        autoplay: 0,
                      },
                    }}
                    className={style.video}
                  />
                  <p className={style.pp}>
                    Maktabimizga virtual sayohat qiling va siz bizning
                    maktabimiz haqida ko'proq ma'lumotga ega bo'ling.
                  </p>
                </Col>

                <Col xs={12} sm={12} md={8} lg={8} className={style.col}>
                  <h3 className={style.tit}>
                    Maktabdagi yangiliklari va o'zgarishlar
                  </h3>
                  <div className={style.chiziq}></div>
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                      <Row>
                        {this.state.news.map((item, key) => {
                          return key < 6 ? (
                            <Col lg={6}>
                              <Row>
                                <Col
                                  xs={3}
                                  sm={3}
                                  md={3}
                                  lg={3}
                                  className={style.colNews}
                                >
                                  <img
                                    src={item.image}
                                    className={style.rasm}
                                  />
                                </Col>
                                <Col
                                  xs={9}
                                  sm={9}
                                  md={9}
                                  lg={9}
                                  className={style.colNews}
                                  style={{
                                    paddingLeft: "10px",
                                    paddingRight: "8px",
                                  }}
                                >
                                  <Link to={`/yangiliklar/`}>
                                    <p>{item.title}</p>
                                    <h5>
                                      <i
                                        style={{ marginRight: "10px" }}
                                        className="far fa-calendar-alt"
                                      ></i>
                                      {item.published_time.substring(0, 10)}
                                    </h5>
                                  </Link>
                                </Col>
                              </Row>
                            </Col>
                          ) : (
                            ""
                          );
                        })}
                      </Row>
                    </Col>
                  </Row>
                  <br />
                  <Link to={`/yangiliklar/`}>
                    <button className={style.buttoncha}>
                      <span>Barchasini o'qish</span>
                    </button>
                  </Link>
                </Col>
              </Row>
            </div>
            <BoshSahifaDavomi />
            <MaktabTadbirlari />
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
