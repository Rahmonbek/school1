import React, { Component } from 'react'
import {FaDownload, FaFolder} from 'react-icons/fa'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './darslik.css'
import { Rate } from 'antd';
import { sinf11,sinf10,sinf9,sinf8,sinf7,sinf1,sinf2,sinf3,sinf4,sinf5,sinf6 } from './darslarjson'
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
const { TabPane } = Tabs;


export default class Darsliklar extends Component {

  render() {
    return (
      <div >








   <section style={{padding:'30px'}} ><h1>Darsliklar</h1>
   <Tabs defaultActiveKey="1"  size="40px">
    <TabPane
      tab={
        <span style={{fontSize:'24px'}}>
          <FaFolder style={{marginRight:'8px', position:'relative',top:'-3px'}}/>
          1-sinf
        </span>
      }
      key="1"
    >
      <Row>
  {sinf1.map(item=>{
    return(
  <Col md={12} lg={12} xl={6}>
  <div className="cart">
    <div className="kitob">
    <img src={item.img} alt={item.title} />
   </div>
    <div className="sharh">
      <h3 >{item.title}</h3>
      <p>{item.text}</p>
      <a   href={item.url}> <Button variant="primary"><FaDownload style={{marginRight:'20px',position:'relative',top:'-2px'}}/>Yuklab olish</Button></a>
    </div>
    </div>
  </Col>)}
  )}
  </Row>
    </TabPane>
    <TabPane
      tab={
        <span style={{fontSize:'24px'}}>
         <FaFolder style={{marginRight:'8px', position:'relative',top:'-3px'}}/>
          2-sinf
        </span>
      }
      key="2"
    >
       <Row>
  {sinf2.map(item=>{
    return(
  <Col md={12} lg={12} xl={6}>
  <div className="cart">
    <div className="kitob">
    <img src={item.img} alt={item.title}/>
   </div>
    <div className="sharh">
      <h3 >{item.title}</h3>
      <p>{item.text}</p>
      <a   href={item.url}> <Button variant="primary"><FaDownload style={{marginRight:'20px',position:'relative',top:'-2px'}}/>Yuklab olish</Button></a>
    </div>
    </div>
  </Col>)}
  )}
  </Row>
    </TabPane>
    <TabPane
      tab={
        <span style={{fontSize:'24px'}}>
        <FaFolder style={{marginRight:'8px', position:'relative',top:'-3px'}}/>
          3-sinf
        </span>
      }
      key="3"
    >
      <Row>
  {sinf3.map(item=>{
    return(
  <Col md={12} lg={12} xl={6}>
  <div className="cart">
    <div className="kitob">
    <img src={item.img} alt={item.title}/>
   </div>
    <div className="sharh">
      <h3 >{item.title}</h3>
      <p>{item.text}</p>
      <a   href={item.url}> <Button variant="primary"><FaDownload style={{marginRight:'20px',position:'relative',top:'-2px'}}/>Yuklab olish</Button></a>
    </div>
    </div>
  </Col>)}
  )}
  </Row>
    </TabPane>
    <TabPane
      tab={
        <span style={{fontSize:'24px'}}>
         <FaFolder style={{marginRight:'8px', position:'relative',top:'-3px'}}/>
          4-sinf
        </span>
      }
      key="4"
    >
      <Row>
  {sinf4.map(item=>{
    return(
  <Col md={12} lg={12} xl={6}>
  <div className="cart">
    <div className="kitob">
    <img src={item.img} alt={item.title}/>
   </div>
    <div className="sharh">
      <h3 >{item.title}</h3>
      <p>{item.text}</p>
      <a   href={item.url}> <Button variant="primary"><FaDownload style={{marginRight:'20px',position:'relative',top:'-2px'}}/>Yuklab olish</Button></a>
    </div>
    </div>
  </Col>)}
  )}
  </Row>
    </TabPane>
    <TabPane
      tab={
        <span style={{fontSize:'24px'}}>
         <FaFolder style={{marginRight:'8px', position:'relative',top:'-3px'}}/>
          5-sinf
        </span>
      }
      key="5"
    ><Row>
  {sinf5.map(item=>{
    return(
  <Col md={12} lg={12} xl={6}>
  <div className="cart">
    <div className="kitob">
    <img src={item.img} alt={item.title}/>
   </div>
    <div className="sharh">
      <h3 >{item.title}</h3>
      <p>{item.text}</p>
      <a   href={item.url}> <Button variant="primary"><FaDownload style={{marginRight:'20px',position:'relative',top:'-2px'}}/>Yuklab olish</Button></a>
    </div>
    </div>
  </Col>)}
  )}
  </Row>
      
    </TabPane>
    <TabPane
      tab={
        <span style={{fontSize:'24px'}}>
         <FaFolder style={{marginRight:'8px', position:'relative',top:'-3px'}}/>
          6-sinf
        </span>
      }
      key="6"
    >
      <Row>
  {sinf6.map(item=>{
    return(
  <Col md={12} lg={12} xl={6}>
  <div className="cart">
    <div className="kitob">
    <img src={item.img} alt={item.title}/>
   </div>
    <div className="sharh">
      <h3 >{item.title}</h3>
      <p>{item.text}</p>
      <a   href={item.url}> <Button variant="primary"><FaDownload style={{marginRight:'20px',position:'relative',top:'-2px'}}/>Yuklab olish</Button></a>
    </div>
    </div>
  </Col>)}
  )}
  </Row>
    </TabPane>
    <TabPane
      tab={
        <span style={{fontSize:'24px'}}>
         <FaFolder style={{marginRight:'8px', position:'relative',top:'-3px'}}/>
          7-sinf
        </span>
      }
      key="7"
    >
       <Row>
  {sinf7.map(item=>{
    return(
  <Col md={12} lg={12} xl={6}>
  <div className="cart">
    <div className="kitob">
    <img src={item.img} alt={item.title}/>
   </div>
    <div className="sharh">
      <h3 >{item.title}</h3>
      <p>{item.text}</p>
      <a   href={item.url}> <Button variant="primary"><FaDownload style={{marginRight:'20px',position:'relative',top:'-2px'}}/>Yuklab olish</Button></a>
    </div>
    </div>
  </Col>)}
  )}
  </Row>
    </TabPane>
    <TabPane
      tab={
        <span style={{fontSize:'24px'}}>
         <FaFolder style={{marginRight:'8px', position:'relative',top:'-3px'}}/>
          8-sinf
        </span>
      }
      key="8"
    >
       <Row>
  {sinf8.map(item=>{
    return(
  <Col md={12} lg={12} xl={6}>
  <div className="cart">
    <div className="kitob">
    <img src={item.img} alt={item.title}/>
   </div>
    <div className="sharh">
      <h3 >{item.title}</h3>
      <p>{item.text}</p>
      <a   href={item.url}> <Button variant="primary"><FaDownload style={{marginRight:'20px',position:'relative',top:'-2px'}}/>Yuklab olish</Button></a>
    </div>
    </div>
  </Col>)}
  )}
  </Row>
    </TabPane>
    <TabPane
      tab={
        <span style={{fontSize:'24px'}}>
         <FaFolder style={{marginRight:'8px', position:'relative',top:'-3px'}}/>
          9-sinf
        </span>
      }
      key="9"
    >
     <Row>
  {sinf9.map(item=>{
    return(
  <Col md={12} lg={12} xl={6}>
  <div className="cart">
    <div className="kitob">
    <img src={item.img} alt={item.title}/>
   </div>
    <div className="sharh">
      <h3 >{item.title}</h3>
      <p>{item.text}</p>
      <a   href={item.url}> <Button variant="primary"><FaDownload style={{marginRight:'20px',position:'relative',top:'-2px'}}/>Yuklab olish</Button></a>
    </div>
    </div>
  </Col>)}
  )}
  </Row>
    </TabPane>
    <TabPane
      tab={
        <span style={{fontSize:'24px'}}>
         <FaFolder style={{marginRight:'8px', position:'relative',top:'-3px'}}/>
          10-sinf
        </span>
      }
      key="10"
    >
       <Row>
  {sinf10.map(item=>{
    return(
  <Col md={12} lg={12} xl={6}>
  <div className="cart">
    <div className="kitob">
    <img src={item.img} alt={item.title}/>
   </div>
    <div className="sharh">
      <h3 >{item.title}</h3>
      <p>{item.text}</p>
      <a   href={item.url}> <Button variant="primary"><FaDownload style={{marginRight:'20px',position:'relative',top:'-2px'}}/>Yuklab olish</Button></a>
    </div>
    </div>
  </Col>)}
  )}
  </Row> 
    </TabPane>
    <TabPane
      tab={
        <span style={{fontSize:'24px'}}>
         <FaFolder style={{marginRight:'8px', position:'relative',top:'-3px'}}/>
          11-sinf
        </span>
      }
      key="11"
    >
    <Row>
  
  {sinf11.map(item=>{
    return(
  <Col md={12} lg={12} xl={6}>
  <div className="cart">
    <div className="kitob">
    <img src={item.img} alt={item.title}/>
   </div>
    <div className="sharh">
      <h3 >{item.title}</h3>
      <p>{item.text}</p>
      <a   href={item.url}> <Button variant="primary"><FaDownload style={{marginRight:'20px',position:'relative',top:'-2px'}}/>Yuklab olish</Button></a>
    </div>
    </div>
  </Col>)}
  )}
  </Row>
    </TabPane>
  </Tabs>
</section>
      </div>
    )
  }
}
