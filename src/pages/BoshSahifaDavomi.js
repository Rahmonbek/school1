import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./BoshSahifaDavomi.module.css";
import { ButtonWrapper } from "./StyleBoshSahifa";
import ustoz1 from "../img/ustoz1.jpg";
import ustoz2 from "../img/ustoz2.jpg";
import school2 from "../img/school2.jpg";
import axios from "axios";
import Aos from "aos";

import { getExcellent, getPupil } from "../host/Config";

import { idMaktab, url, user } from "../host/Host";
export default class BoshSahifaDavomi extends Component {
  state = {
    loader: true,
    excellent: [],
    pupil: [],
    pupils: [],
    teachers: [],
    data: null,
    id: 0,
    school: null,
    class: [],
  };

  getExcellents = () => {
    // var a = window.location.href.split("/");
    var v = user;

    axios.get(`${url}/school-by-admin/${v}/`).then((res) => {
      axios
        .get(`${url}/excellent/`)
        .then((res1) => {
          let arrayOfExcellent = [];
          res1.data.forEach((val) => {
            if (val.school == res.data.id) arrayOfExcellent.push(val);
          });
          this.setState({
            excellent: arrayOfExcellent.slice(0, 2),
            loader: false,
          });
          /* ${idMaktab} */
        })
        .catch((err) => {
          this.setState({
            // excellent: res.data,
            loader: false,
          });
        });
      this.setState({ data: res.data });
    });
    axios
      .get(`${url}/class/`)
      .then((res) => {
        this.setState({
          class: res.data,
          loader: false,
        });
      })
      .catch((err) => {
        this.setState({ loader: false });
      });
  };

  getPupil = () => {
    getPupil()
      .then((res) => {
        this.setState({
          pupils: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
  getTeacher = () => {
    axios
      .get(`${url}/achieve-teacher-by-school/${idMaktab}/`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          teachers: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
  setPupils = (id) => {
    var pupil = {};
    if (this.state.pupils !== []) {
      this.state.pupils.map((item1) => {
        if (item1.id === id) {
          pupil = item1;
        }
      });
    }
    return pupil;
  };

  echoClasses = (id) => {
    var classes = {};
    if (this.state.class !== []) {
      this.state.class.map((item1) => {
        if (item1.id === id) {
          classes = item1;
        }
      });
    }
    return classes;
  };

  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
    this.getExcellents();
    this.getPupil();
    this.getTeacher();
    this.setState({ loader: false });
    // console.log(123);
  }

  render() {
    return (
      <div>
        {/* <div className={style.mapD} style={{width:'100%', height:'300px', position:'relative', marginBottom:'100px'}}>
   <Map/>
        </div> */}
        <div className={style.container}>
          <Container>
            <Row>
              <Col xs={0} sm={0} md={6} lg={6}></Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                <h1>Qabul uchun ariza topshiring</h1>
                <h3>Kuzgi qabul jarayoni hozir mavjud</h3>
                <p>
                  Biz o'quvchilarimizga shunchaki ta'lim beribgina qolmasdan,
                  shu bilan birga ularga kelajakda o'z o'rnilarini topishlariga
                  yordam beramiz.
                </p>
                <ButtonWrapper>
                  <button className="btn drawBorder">
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      href="https://my.maktab.uz/"
                      target="_blank"
                    >
                      Hoziroq ariza topshiring
                    </a>
                  </button>
                </ButtonWrapper>
              </Col>
            </Row>
          </Container>
        </div>
        <Container fluid style={{ backgroundColor: "white" }}>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <div className={style.tana}>
                <br />
                <br />
                <h1 className={style.sarlavha} style={{ fontSize: "30px" }}>
                  A'lochilar doskasi
                </h1>
                <div className={style.line}></div>
                <Container className={style.back}>
                  {/* <div className={style.line}></div> */}
                  <br />

                  <Row>
                    {this.state.excellent !== [] && this.state.class !== []
                      ? this.state.excellent.map((item) => {
                          var pupil = this.setPupils(item.pupil);
                          var classes = this.echoClasses(item.clas);
                          return (
                            <Col lg={6} md={6} sm={12}>
                              <div
                                className={style.card}
                                style={{ marginTop: "10px" }}
                              >
                                <div className={style.qizil}>
                                  Bizning faxrimiz
                                </div>
                                <img
                                  src={
                                    item.image !== null ? item.image : school2
                                  }
                                  alt=""
                                />
                                <p
                                  style={{
                                    // fontSize: "20px",
                                    textAlign: "center",
                                    marginTop: "20px",
                                    fontWeight: "bold",
                                    color: "black",
                                  }}
                                >
                                  {item.full_name}
                                </p>
                                <p
                                  style={{
                                    // fontSize: "18px",
                                    color: "black",
                                    textAlign: "center",
                                  }}
                                >
                                  {" "}
                                  {item.clas}
                                  {/* {this.echoClasses(pupil.clas).class_number} -
                                  "{this.echoClasses(pupil.clas).class_char}"
                                  sinf */}
                                </p>
                              </div>
                            </Col>
                            // (<div style={{padding:'10px'}}>
                            // <div className={style.card}>
                            // <div className={style.qizil}>Bizning faxrimiz</div>
                            //     <Row>
                            //                       <Col lg={5}>
                            //                         <img src={pupil.image !== null ? pupil.image : school2} alt="" />
                            //                       </Col>
                            //                       <Col lg={7}>
                            //                         <p style={{fontSize:'20px', marginTop: '20px', fontWeight:'bold', color:'black'}}>
                            //                          {pupil.full_name}
                            //                         </p>

                            //                         <p style={{fontSize:'18px', color:'black'}}>

                            //                           {this.echoClasses(pupil.clas).class_number} - "{this.echoClasses(pupil.clas).class_char}" sinf
                            //                         </p>

                            //                         {/* <div style={{ cursor: "pointer" }}>Baholarini ko'rish</div> */}
                            //                       </Col>
                            //                       </Row>
                            //                       {/* <p style={{fontSize:'18px', color:'black'}}>Ko'plab ko'rik tanlovlarda erishgan yuqori natijalari bilan maktabimiz nomini yuqori darajaga yetkazgan. Fanlar bo'yicha o'zlashtirishi, odob axloqi va maktabimizda o'tkaziladigan tadbirlarda faol ishtiroki bilan maktabimiz o'quvchilaridan ajralib turadi.
                            //                           Maktabimizning barcha o'qituvchilari bu o'quvchimizning o'zlashtirish darajasidan mamnun. Biz bunday yoshlarimiz bilan faxrlanamiz !!!
                            //                       </p> */}
                            //                     </div>
                            //                     </div>)
                          );
                        })
                      : ""}
                  </Row>
                </Container>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className={style.tana}>
                <br />
                <br />
                <h1 className={style.sarlavha} style={{ fontSize: "30px" }}>
                  O'qituvchilar doskasi
                </h1>
                <div className={style.line}></div>

                <Container className={style.back}>
                  {/* <div className={style.line}></div> */}
                  <br />
                  <Row>
                    {this.state.teachers.length !== 0
                      ? this.state.teachers.map((item) => {
                          return (
                            <Col lg={12} md={12} sm={12}>
                              <div style={{ padding: "10px" }}>
                                <div className={style.card}>
                                  <div className={style.bayroq}></div>
                                  <Row>
                                    <Col lg={5}>
                                      <img src={item.image} alt="" />
                                    </Col>
                                    <Col lg={7}>
                                      <p
                                        style={{
                                          // fontSize: "20px",
                                          marginTop: "20px",
                                          marginLeft: "20px",
                                          fontWeight: "bold",
                                          color: "black",
                                          width: "80%",
                                        }}
                                      >
                                        {item.full_name}
                                      </p>

                                      <p
                                        style={{
                                          // fontSize: "18px",
                                          color: "black",
                                          marginLeft: "20px",
                                        }}
                                      >
                                        {item.position}
                                      </p>

                                      {/* <div style={{ cursor: "pointer" }}>Baholarini ko'rish</div> */}
                                    </Col>
                                  </Row>
                                  {/* <p style={{fontSize:'18px', color:'black'}}>Ko'plab ko'rik tanlovlarda erishgan yuqori natijalari bilan maktabimiz nomini yuqori darajaga yetkazgan. Fanlar bo'yicha o'zlashtirishi, odob axloqi va maktabimizda o'tkaziladigan tadbirlarda faol ishtiroki bilan maktabimiz o'quvchilaridan ajralib turadi. 
     Maktabimizning barcha o'qituvchilari bu o'quvchimizning o'zlashtirish darajasidan mamnun. Biz bunday yoshlarimiz bilan faxrlanamiz !!!
 </p> */}
                                </div>
                              </div>
                            </Col>
                          );
                        })
                      : ""}
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
