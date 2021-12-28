import React, { Component } from "react";
import style from "../css/gallery.module.css";
import img1 from "../img/b1.JPG";
import img2 from "../img/b2.jpg";
import img3 from "../img/b3.jpg";
import img4 from "../img/b4.jpg";
import img5 from "../img/b5.jpg";
import img6 from "../img/b6.jpg";
import Xorazm from "../img/xorazm1.jpg";
import img7 from "../img/b7.png";
import FadeLoader from "react-spinners/FadeLoader";
import { idMaktab, url, user } from "../host/Host";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import Global from "../host/Global";
export default class Gallery extends Component {
  state = {
    school: [],
    loader: true,
  };
  getSchool = () => {
    
    var v = user;
    axios
      .get(`${url}/school-by-admin/${v}`)
      .then((res) => {
        this.setState({
          school: res.data,
        });
        setTimeout(() => {
          this.setState({
            loader: false,
          });
        }, 4000);

        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
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
          <div className={style.mat}>
            <br />
            <div className={style.header}>
              <img
                className={style.headerImgItem}
                alt=" "
                src={
                  Xorazm
                  
                  
                  
                  
                  
                }
              />
              <div className={style.sarlavha}>
                <h2>Bizning Fotogalareya</h2>
                <h1>Maktabimiz hayotidan fotolavhalar</h1>
              </div>
            </div>

            <Container>
              <Row style={{ justifyContent: "center" }}>
                <Col lg={6} md={6} cm={12}>
                  <div class={style.imagewrapper}>
                    <img src={img1} className="img-fluid" />
                   
                  </div>{" "}
                </Col>
                <Col lg={6} md={6} cm={12}>
                  <div class={style.imagewrapper}>
                    <img src={img2} className="img-fluid" />

                   
                  </div>
                </Col>
                <Col lg={6} md={6} cm={12}>
                  <div class={style.imagewrapper}>
                    <img src={img3} className="img-fluid" />
                    
                  </div>
                </Col>
                <Col lg={6} md={6} cm={12}>
                  <div class={style.imagewrapper}>
                    <img src={img4} className="img-fluid" />

                   
                  </div>
                </Col>
                <Col lg={6} md={6} cm={12}>
                  <div class={style.imagewrapper}>
                   
                    <img src={img5} className="img-fluid" />
                  </div>
                </Col>
                <Col lg={6} md={12} cm={12}>
                  <div class={style.imagewrapper}>
                   
                    <img src={img6} className="img-fluid" />
                  </div>
                </Col>
                <Col lg={6} md={12} cm={12}>
                  <div class={style.imagewrapper}>
                    <img src={img7} className="img-fluid" />
                   
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </div>
    );
  }
}
