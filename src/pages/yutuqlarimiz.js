import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "../css/Yutuqlar.module.css";
import tav_img from "../img/tav_img.jpg";
import talab from "../img/talab.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Carousel } from "antd";
import axios from "axios";
import { idMaktab, url, user } from "../host/Host";
import FadeLoader from "react-spinners/FadeLoader";
import { Link, NavLink } from "react-router-dom";
import { Button,Nav, Navbar,} from "react-bootstrap";
import { Tooltip} from "antd";
import school1 from "../img/school1.jpg";



import {
  faDoorOpen,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from './BoshSahifa.module.css'
import NavBar from "./Navbar";
class Yutuqlar extends React.Component {
  state = {
    loader: true,
   yutuq: null,
    id: 0,
    school: null,
  };

  getSchool = () => {
    var v = user;
    axios.get(`${url}/school-by-admin/${v}`).then((res) => {
      this.setState({
        school: res.data,
        
      });
      axios.get(`${url}/achiviment/${idMaktab}`).then((res1) => {
        this.setState({
          yutuq: res1.data.reverse(),
          loader: false,
        });
       
      });
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
                <Tooltip
                  placement="left"
                  title={`${
                    this.state.school !== null
                      ? this.state.school.email
                      : "5maktabjizzax@gmail.com"
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
                        : "5maktabjizzax@gmail.com"
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
                  href={this.state.school!==null?this.state.school.telegram:""}
                >
                  <i className="fab fa-telegram"></i>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  style={{ borderTop: " 1px solid #1b6602" }}
                  className="ahref"
                  href={this.state.school!==null?this.state.school.instagram:""}
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  style={{ borderTop: " 1px solid #1b6602" }}
                  className="ahref"
                  href={this.state.school!==null?this.state.school.facebook:""}
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  style={{ borderTop: " 1px solid #1b6602" }}
                  className="ahref"
                  href={this.state.school!==null?this.state.school.youtube:""}
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
             <h1>Maktabimiz o'quvchilari va o'qituvchilari erishgan yutuqlar bilan tanishing</h1>

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
<div className={styles.yutuqlar}>
  <Container>
    {this.state.yutuq!==null?this.state.yutuq.map(item=>{
      return(
        <div className={styles.yutuq}>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <h4>
              {item.competition}
            </h4>
            <h5>
              {item.result}
            </h5>
            <p>
              <b>Ishtrokchilar: </b>{item.pupils}
            </p>
            <p>
              {item.text}
            </p>
          </Col>
          <Col lg={6} md={12} sm={12} style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
            <img src= {item.image} alt="..."/>
           
          </Col>
        </Row>
          </div>
      )
    }):''}
 
  </Container>
  </div>        
 </> )}
      </div>
  
    );
  }
}

export default Yutuqlar;
