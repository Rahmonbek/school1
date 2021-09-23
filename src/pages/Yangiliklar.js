import React, { Component } from "react";
import yangilik1 from "../img/yangilik1.jpg";
import yangilik2 from "../img/yangilik2.jpg";
import new1 from "../img/new1.jpg";
import new2 from "../img/new2.jpg";
import new3 from "../img/new3.jpg";
import new4 from "../img/new4.jpg";
import styles from "../css/yangiliklar.module.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { url, user } from "../host/Host";

// import { Link } from "react-router-dom";
import { getNews } from "../host/Config";
import FadeLoader from "react-spinners/FadeLoader";
import { Carousel } from "antd";
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


// import {DownCircleOutlined} from '@ant-design/icons'

export default class Yangiliklar extends Component {
  state = {
    news: [],
    id: 0,
    loader: true,
    school: null,
  };
  getSchool = () => {
    var v = user;
    axios.get(`${url}/school-by-admin/${v}`).then((res) => {
      this.setState({
        school: res.data,
        loader: false,
      });

    });
  };

  getNews = () => {
    getNews()
      .then((res) => {
        if (window.location.href.indexOf("id=") === -1) {
          this.setState({
            news: res.data,
         
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

        this.setState({
        
        });

      });
  };
  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
    this.getNews();
    this.getSchool();
  }

  // onclick_new=(link)=>{
  //       <Link to="/${link}/uz"></Link>
  // }
  render() {
    const contentStyle = {
      width: "100%",
      objectFit: "cover",
      color: "#fff",
      lineHeight: "30vh",
      textAlign: "center",
      fontFamily: "Lobster",
    };
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
             <h1>Maktabimizdagi so'ngi yangiliklar bilan tanishing.</h1>

             <a target="_blank" href={`tel: ${ this.state.school !== null
                    ? this.state.school.phone:'#'}`}>Biz bilan bog'laning</a>
         </Col>
         <Col lg={7} md={7} sm={12} className={style.head_imgCol}>
         <div className={style.head_img}>
       
         <div className={style.comp}>

          <img src={ this.state.school !== null && this.state.school.m_h_h4 !== null
                  ? this.state.school.m_h_h4
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
</div>            <Container fluid>
              <div className={styles.yangi}>
                <h1 style={{ fontSize: "60px",fontWeight:'bold'}} data-aos="fade-up">
                  Yangiliklar
                </h1>
              </div>
              <div className={styles.line} data-aos="fade-up"></div>
              <Row>
                <Col lg={7}>
                  {this.state.news.length !== 0 ? (
                    <div className={styles.news} data-aos="zoom-in-right">
                      <img
                        src={this.state.news[this.state.id].image}
                        alt="Foto lavha"
                      />
                      <h3>{this.state.news[this.state.id].title}</h3>

                      <p className={styles.date1}>
                        <i
                          style={{ marginRight: "10px" }}
                          class="far fa-calendar-alt"
                        ></i>
                        {this.state.news[
                          this.state.id
                        ].published_time.substring(0, 10)}
                      </p>
                      <p>{this.state.news[this.state.id].text}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
                <Col lg={5}>
                  <div className={styles.recent_news} data-aos="zoom-in-left">
                    <div className={styles.title}>
                      <h3 style={{ color:'white', textAlign:'center' }}>So'nggi yangiliklar</h3>
                    </div>
                    <div className={styles.body}>
                      <Row>
                        {this.state.news.map((item, key) => {
                          return (
                            <Col
                              lg={12}
                              md={12}
                              sm={12}
                              style={{ marginBottom: "10px" }}
                              className={styles.body_card}
                            >
                              <MDBCard
                                onClick={() => {
                                  this.setState({ id: key });
                                }}
                                style={{ maxWidth: "540px" }}
                              >
                                <MDBRow className="g-0">
                                  <MDBCol md="4">
                                    <MDBCardImage
                                      src={item.image}
                                      alt="..."
                                      fluid
                                      style={{ margin: "7px" }}
                                    />
                                  </MDBCol>
                                  <MDBCol md="8">
                                    <MDBCardBody>
                                      <MDBCardTitle>{item.title}</MDBCardTitle>

                                      <MDBCardText>
                                        <small className="text-muted">
                                          <p className={styles.date}>
                                            <i
                                              style={{ marginRight: "10px" }}
                                              class="far fa-calendar-alt"
                                            ></i>
                                            {item.published_time.substring(
                                              0,
                                              10
                                            )}{" "}
                                          </p>{" "}
                                        </small>
                                      </MDBCardText>
                                    </MDBCardBody>
                                  </MDBCol>
                                </MDBRow>
                              </MDBCard>
                            </Col>
                          );
                        })}
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </div>
    );
  }
}
