import React, { Component } from "react";
import styles from "../css/maktabmamuriyati.module.css";
// import Car from "react-multi-Car";
// import "react-multi-carousel/lib/styles.css";

import school1 from "../img/school19.jpg";

import { Container, Row, Col } from "react-bootstrap";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Aos from "aos";
import "aos/dist/aos.css";
// import {FadeLoader} from 'react-spinners'

import axios from "axios";
import { url, user } from "../host/Host";

import Global from "../host/Global";
import { FadeLoader } from "react-spinners";
import { Tooltip } from "antd";
import { Nav, Navbar } from "react-bootstrap";
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
                <div className={styles.body}>
                <MDBRow className='row-cols-1 row-cols-md-2  row-cols-lg-3'>
                    {this.state.direktor!==null?this.state.direktor.map(item=>{
 return(
  <MDBCol>
    <MDBCard data-aos="flip-right" className='h-100' style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', height:'630px', marginBottom:'30px'}} className={styles.card}>
    <div className={styles.card_img}>
             <img
               
                  src={item.image}
                  alt='...'
                  position='top'
                   style={{width:'100%', height:'100%'}}
                />
             </div>
      <MDBCardBody style={{textAlign:'center', padding:'20px 20px', display:'flex', flexDirection:'column', justifyContent:'center'}} className={styles.card_body}>
        <MDBCardTitle className={styles.boyd_title}>{item.full_name}</MDBCardTitle>
        <MDBCardText style={{fontSize:'18px', fontWeight:'500'}}>
          Maktab Direktori
        </MDBCardText>
      </MDBCardBody>
      <MDBCardFooter className={styles.card_footer} style={{backgroundColor:'#fff', padding:'30px 30px', borderTopColor:'#1EB2A6', minHeight:'160px', maxHeight:'400px'}}>
        <small className='text-muted' style={{fontSize:'16px', height:'auto'}}>
          <b style={{color:'#1EB2A6'}}>Mutaxasisligi: </b>{item.position}<br/>
          <b style={{color:'#1EB2A6'}}>Telefon raqami: </b>{item.phone}<br/>
          <b style={{color:'#1EB2A6'}}>Qo'shimcha: </b> {item.description==null? "Ma'lumot to'q":item.description}<br/>
        </small>
      </MDBCardFooter>
    </MDBCard>
  </MDBCol>


  )
           }):""}
   
       {this.state.orin1!==null?this.state.orin1.map(item=>{
             return(
              <MDBCol>
              <MDBCard data-aos="flip-right" className='h-100' style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', height:'630px', marginBottom:'30px'}} className={styles.card}>
              <div className={styles.card_img}>
             <img
               
                  src={item.image}
                  alt='...'
                  position='top'
                   style={{width:'100%', height:'100%'}}
                />
             </div>
                <MDBCardBody style={{textAlign:'center', padding:'20px 20px', display:'flex', flexDirection:'column', justifyContent:'center'}} className={styles.card_body}>
                  <MDBCardTitle className={styles.boyd_title}>{item.full_name}</MDBCardTitle>
                  <MDBCardText style={{fontSize:'18px', fontWeight:'500'}}>
                  O'quv va tarbiyaviy ishlar bo'yicha direktor o'rinbosari
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className={styles.card_footer} style={{backgroundColor:'#fff', padding:'30px 30px', borderTopColor:'#1EB2A6', minHeight:'160px'}}>
                  <small className='text-muted' style={{fontSize:'16px'}}>
                    <b style={{color:'#1EB2A6'}}>Mutaxasisligi: </b>{item.position}<br/>
                    <b style={{color:'#1EB2A6'}}>Telefon raqami: </b>{item.phone}<br/>
                    <b style={{color:'#1EB2A6'}}>Qo'shimcha: </b> {item.description==null? "Ma'lumot to'q":item.description}<br/>
                  </small>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          
              )
           }):""}
   
       {this.state.orin2!==null?this.state.orin2.map(item=>{
             return(
              <MDBCol>
              <MDBCard data-aos="flip-right" className='h-100' style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', height:'630px', marginBottom:'30px'}} className={styles.card}>
              <div className={styles.card_img}>
             <img
               
                  src={item.image}
                  alt='...'
                  position='top'
                   style={{width:'100%', height:'100%'}}
                />
             </div>
                <MDBCardBody style={{textAlign:'center', padding:'20px 20px', display:'flex', flexDirection:'column', justifyContent:'center'}} className={styles.card_body}>
                  <MDBCardTitle className={styles.boyd_title}>{item.full_name}</MDBCardTitle>
                  <MDBCardText style={{fontSize:'18px', fontWeight:'500'}}>
                  Ma'naviy-ma'rifiy ishlar bo'yicha direktor o'rinbosari
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className={styles.card_footer} style={{backgroundColor:'#fff', padding:'30px 30px', borderTopColor:'#1EB2A6', minHeight:'160px'}}>
                  <small className='text-muted' style={{fontSize:'16px'}}>
                    <b style={{color:'#1EB2A6'}}>Mutaxasisligi: </b>{item.position}<br/>
                    <b style={{color:'#1EB2A6'}}>Telefon raqami: </b>{item.phone}<br/>
                    <b style={{color:'#1EB2A6'}}>Qo'shimcha: </b> {item.description==null? "Ma'lumot to'q":item.description}<br/>
                  </small>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
            )
           }):""}
   
       {this.state.orin3!==null?this.state.orin3.map(item=>{
             return(
              <MDBCol>
              <MDBCard data-aos="flip-right" className='h-100' style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', height:'630px', marginBottom:'30px'}} className={styles.card}>
              <div className={styles.card_img}>
             <img
               
                  src={item.image}
                  alt='...'
                  position='top'
                   style={{width:'100%', height:'100%'}}
                />
             </div>
                <MDBCardBody style={{textAlign:'center', padding:'20px 20px', display:'flex', flexDirection:'column', justifyContent:'center'}} className={styles.card_body}>
                  <MDBCardTitle className={styles.boyd_title}>{item.full_name}</MDBCardTitle>
                  <MDBCardText style={{fontSize:'18px', fontWeight:'500'}}>
                  Ma'muriy-xo’jalik ishlar bo'yicha direktor o'rinbosari
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className={styles.card_footer} style={{backgroundColor:'#fff', padding:'30px 30px', borderTopColor:'#1EB2A6', minHeight:'160px'}}>
                  <small className='text-muted' style={{fontSize:'16px'}}>
                    <b style={{color:'#1EB2A6'}}>Mutaxasisligi: </b>{item.position}<br/>
                    <b style={{color:'#1EB2A6'}}>Telefon raqami: </b>{item.phone}<br/>
                    <b style={{color:'#1EB2A6'}}>Qo'shimcha: </b> {item.description==null? "Ma'lumot to'q":item.description}<br/>
                  </small>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>)
           }):""}
   
       {this.state.psixolog!==null?this.state.psixolog.map(item=>{
             return(
              <MDBCol>
              <MDBCard data-aos="flip-right" className='h-100' style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', height:'630px', marginBottom:'30px'}} className={styles.card}>
              <div className={styles.card_img}>
             <img
               
                  src={item.image}
                  alt='...'
                  position='top'
                   style={{width:'100%', height:'100%'}}
                />
             </div>
                <MDBCardBody style={{textAlign:'center', padding:'20px 20px', display:'flex', flexDirection:'column', justifyContent:'center'}} className={styles.card_body}>
                  <MDBCardTitle className={styles.boyd_title}>{item.full_name}</MDBCardTitle>
                  <MDBCardText style={{fontSize:'18px', fontWeight:'500'}}>
                  Maktab amaliyotchi psixologi
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className={styles.card_footer} style={{backgroundColor:'#fff', padding:'30px 30px', borderTopColor:'#1EB2A6', minHeight:'160px'}}>
                  <small className='text-muted' style={{fontSize:'16px'}}>
                    <b style={{color:'#1EB2A6'}}>Mutaxasisligi: </b>{item.position}<br/>
                    <b style={{color:'#1EB2A6'}}>Telefon raqami: </b>{item.phone}<br/>
                    <b style={{color:'#1EB2A6'}}>Qo'shimcha: </b> {item.description==null? "Ma'lumot to'q":item.description}<br/>
                  </small>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
              )
           }):""}
   
       {this.state.kasaba!==null?this.state.kasaba.map(item=>{
             return(
              <MDBCol>
              <MDBCard data-aos="flip-right" className='h-100' style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', height:'630px', marginBottom:'30px'}} className={styles.card}>
              <div className={styles.card_img}>
             <img
               
                  src={item.image}
                  alt='...'
                  position='top'
                   style={{width:'100%', height:'100%'}}
                />
             </div>
                <MDBCardBody style={{textAlign:'center', padding:'20px 20px', display:'flex', flexDirection:'column', justifyContent:'center'}} className={styles.card_body}>
                  <MDBCardTitle className={styles.boyd_title}>{item.full_name}</MDBCardTitle>
                  <MDBCardText style={{fontSize:'18px', fontWeight:'500'}}>
                  Kasaba uyushma raisi
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className={styles.card_footer} style={{backgroundColor:'#fff', padding:'30px 30px', borderTopColor:'#1EB2A6', minHeight:'160px'}}>
                  <small className='text-muted' style={{fontSize:'16px'}}>
                    <b style={{color:'#1EB2A6'}}>Mutaxasisligi: </b>{item.position}<br/>
                    <b style={{color:'#1EB2A6'}}>Telefon raqami: </b>{item.phone}<br/>
                    <b style={{color:'#1EB2A6'}}>Qo'shimcha: </b> {item.description==null? "Ma'lumot to'q":item.description}<br/>
                  </small>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
              )
           }):""}
   
       {this.state.kutubxona!==null?this.state.kutubxona.map(item=>{
             return(
              <MDBCol>
              <MDBCard data-aos="flip-right" className='h-100' style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', height:'630px', marginBottom:'30px'}} className={styles.card}>
              <div className={styles.card_img}>
             <img
               
                  src={item.image}
                  alt='...'
                  position='top'
                   style={{width:'100%', height:'100%'}}
                />
             </div>
                <MDBCardBody style={{textAlign:'center', padding:'20px 20px', display:'flex', flexDirection:'column', justifyContent:'center'}} className={styles.card_body}>
                  <MDBCardTitle className={styles.boyd_title}>{item.full_name}</MDBCardTitle>
                  <MDBCardText style={{fontSize:'18px', fontWeight:'500'}}>
                  Kutubxona mudirasi
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className={styles.card_footer} style={{backgroundColor:'#fff', padding:'30px 30px', borderTopColor:'#1EB2A6', minHeight:'160px'}}>
                  <small className='text-muted' style={{fontSize:'16px'}}>
                    <b style={{color:'#1EB2A6'}}>Mutaxasisligi: </b>{item.position}<br/>
                    <b style={{color:'#1EB2A6'}}>Telefon raqami: </b>{item.phone}<br/>
                    <b style={{color:'#1EB2A6'}}>Qo'shimcha: </b> {item.description==null? "Ma'lumot to'q":item.description}<br/>
                  </small>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
             )
           }):""}
   
       {this.state.chqbt!==null?this.state.chqbt.map(item=>{
             return(
              <MDBCol>
              <MDBCard data-aos="flip-right" className='h-100' style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', height:'630px', marginBottom:'30px'}} className={styles.card}>
              <div className={styles.card_img}>
             <img
               
                  src={item.image}
                  alt='...'
                  position='top'
                   style={{width:'100%', height:'100%'}}
                />
             </div>
                <MDBCardBody style={{textAlign:'center', padding:'20px 20px', display:'flex', flexDirection:'column', justifyContent:'center'}} className={styles.card_body}>
                  <MDBCardTitle className={styles.boyd_title}>{item.full_name}</MDBCardTitle>
                  <MDBCardText style={{fontSize:'18px', fontWeight:'500'}}>
                  Chaqiruvga qadar boshlang‘ich tayyorgarlik rahbari
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className={styles.card_footer} style={{backgroundColor:'#fff', padding:'30px 30px', borderTopColor:'#1EB2A6', minHeight:'160px'}}>
                  <small className='text-muted' style={{fontSize:'16px'}}>
                    <b style={{color:'#1EB2A6'}}>Mutaxasisligi: </b>{item.position}<br/>
                    <b style={{color:'#1EB2A6'}}>Telefon raqami: </b>{item.phone}<br/>
                    <b style={{color:'#1EB2A6'}}>Qo'shimcha: </b> {item.description==null? "Ma'lumot to'q":item.description}<br/>
                  </small>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
             )
           }):""}
   
       {this.state.yetakchi!==null?this.state.yetakchi.map(item=>{
             return(
              <MDBCol>
              <MDBCard data-aos="flip-right" className='h-100' style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', height:'630px', marginBottom:'30px'}} className={styles.card}>
             <div className={styles.card_img}>
             <img
               
                  src={item.image}
                  alt='...'
                  position='top'
                   style={{width:'100%', height:'100%'}}
                />
             </div>
                <MDBCardBody style={{textAlign:'center', padding:'20px 20px', display:'flex', flexDirection:'column', justifyContent:'center'}} className={styles.card_body}>
                  <MDBCardTitle className={styles.boyd_title}>{item.full_name}</MDBCardTitle>
                  <MDBCardText style={{fontSize:'18px', fontWeight:'500'}}>
                  Boshlang'ich tashkilot yoshlar yetakchisi
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className={styles.card_footer} style={{backgroundColor:'#fff', padding:'30px 30px', borderTopColor:'#1EB2A6', minHeight:'160px'}}>
                  <small className='text-muted' style={{fontSize:'16px'}}>
                    <b style={{color:'#1EB2A6'}}>Mutaxasisligi: </b>{item.position}<br/>
                    <b style={{color:'#1EB2A6'}}>Telefon raqami: </b>{item.phone}<br/>
                    <b style={{color:'#1EB2A6'}}>Qo'shimcha: </b> {item.description==null? "Ma'lumot to'q":item.description}<br/>
                  </small>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
             )
           }):""}
   
                  
                    

                    </MDBRow>
                    </div>
                </Container>           
          </>
        )}{" "}
      </div>
    );
  }
}
