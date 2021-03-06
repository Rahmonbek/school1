import React, { Component } from 'react';
import style from '../css/alochilar.module.css';
import img from '../img/pl.jpg';
import styles from '../css/maktabHayoti.module.css';
import { DownCircleOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import { Container, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';
import school1 from '../img/school1.jpg';
import school2 from '../img/school2.jpg';
import school3 from '../img/school3.jpg';
import school4 from '../img/school4.jpg';
import school5 from '../img/school5.jpg';
import Aos from 'aos';
import { getExcellent, getPupil, getSchool } from '../host/Config';
import { idMaktab, url, user } from '../host/Host';
import { FadeLoader } from 'react-spinners';
import Global from '../host/Global';

export default class Alochilar extends Component {
  state = {
    loader: true,
    excellent: [],
    pupil: [],
    pupils: [],
    data: null,
    id: 0,
    school: null,
    class: [],
  };

  getExcellents = () => {
    // var a = window.location.href.split("/");
    var v = user;

    axios.get(`${url}/school-by-admin/${v}/`).then((res) => {
      this.setState({ data: res.data });
      axios
        .get(`${url}/excellent/`)
        .then((res1) => {
          let arrayOfExcellent=[]
          res1.data.forEach(val=>{
            if(val.school==res.data.id) arrayOfExcellent.push(val)
          })
          this.setState({
            excellent: arrayOfExcellent.reverse(),
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
    });
    axios
      .get(`${url}/class/`)
      .then((res) => {
        this.setState({
          class: res.data,
        });
      })
      .catch((err) => {
       
        // this.setState({loader:false})
      });
  };

  getPupil = () => {
    getPupil()
      .then((res) => {
        this.setState({
          pupils: res.data,
        });
      })
      .catch((err) => console.log('err'));
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
    console.log(id, this.state.class);
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
      duration: 4000,
    });
    this.getExcellents();
    this.getPupil();
    console.log(this.state.excellent);
    window.addEventListener('load', () => {
      // this.setState({
      //   loader:false
      // })
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {this.state.loader ? (
          <div className='loaderT'>
            <FadeLoader color='blue' loading={this.state.loader} size={120} />
          </div>
        ) : (
          <>
            <div className={styles.headerSliderText}>
              <h3 style={{ fontFamily: 'font', fontWeight: '900' }}>
                Maktab A'lochilari
              </h3>
              <div className={styles.headerIcons}>
                <a href='#1'>
                  <DownCircleOutlined
                    style={{ fontSize: '40px', color: 'white' }}
                    className={styles.headerIcon}
                  />
                </a>
              </div>
            </div>
            <Carousel autoplay className={styles.sliderHeader}>
              <div>
                <Image
                  src={
                    data !== null && data.m_h_h1 !== null
                      ? data.m_h_h1
                      : school1
                  }
                  className={styles.headerImage}
                />
              </div>
              <div>
                <Image
                  src={
                    data !== null && data.m_h_h2 !== null
                      ? data.m_h_h2
                      : school1
                  }
                  className={styles.headerImage}
                />
              </div>
              <div>
                <Image
                  src={
                    data !== null && data.m_h_h3 !== null
                      ? data.m_h_h3
                      : school3
                  }
                  className={styles.headerImage}
                />
              </div>
              <div>
                <Image
                  src={
                    data !== null && data.m_h_h4 !== null
                      ? data.m_h_h4
                      : school4
                  }
                  className={styles.headerImage}
                />
              </div>
              <div>
                <Image
                  src={
                    data !== null && data.m_h_h5 !== null
                      ? data.m_h_h5
                      : school5
                  }
                  className={styles.headerImage}
                />
              </div>
            </Carousel>

            <div style={{ width: '100%', backgroundColor: 'white' }}>
              <br />
              <br />
              <br />
              <br />
              <h1 className={style.sarlavha}>A'lochilar doskasi</h1>
              <div className={style.line}></div>
              <div className={style.tana}>
                {this.state.excellent !== []
                  ? this.state.excellent.map((item) => {
                      var pupil = this.setPupils(item.pupil);
                      var classes = this.echoClasses(pupil.clas);
                      return (
                        <div className={style.card}>
                          <div className={style.image}>
                            <img
                              src={ item.image !== null ? item.image : school2}
                              alt=''
                            />
                          </div>
                          <div className={style.content}>
                            <p>
                              <b>O'quvchi: </b> {item.full_name}
                            </p>
                            <p>
                              <b>Tug'ilgan sanasi: </b> {item.birth_day}
                            </p>
                            <p>
                              <b>Sinfi: </b>
                              {item.clas}
                              {/*  {this.echoClasses(item.clas).class_number} - "
                              {this.echoClasses(item.clas).class_char}" sinf */}
                            </p>

                            {/* <div style={{ cursor: "pointer" }}>Baholarini ko'rish</div> */}
                          </div>
                        </div>
                      );
                    })
                  : ''}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
