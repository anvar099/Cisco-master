import React, { useState }  from "react";
import './styles.css';
import RV160W from '../../assets/img/RV160W-E-K9-G5_1.png'
import Arrow from '../../assets/img/Arrow_right.svg'
import WAP125 from '../../assets/img/WAP125-E-K9-EU_1.png'
import SF110D from '../../assets/img/SF110D-08HP_1.png'
import SG1101 from '../../assets/img/SG110-16HP_1.png';
import SG110 from '../../assets/img/SG110-16HP_2.png';
import Slider from "react-slick";
import {useHistory} from "react-router-dom"

import AboutModel from "../../components/aboutModel/aboutModel"
import AboutWAP12 from "../aboutModel/router/WAP12"
import AboutSF110 from "../aboutModel/router/SF110"
import AboutSG110 from "../aboutModel/router/SG110-16"
import AboutSG11024 from "../aboutModel/router/SG11024"

import { Text } from '../../containers/languages';

const Model = () => {

  const history = useHistory();
  const [about,setAbout] = useState(false)
  const handleAbout = ()=>{
    setAbout(true)
    setSF110(false);
    setSG110(false);
    setSG11024(false);
    setWAP12(false);
  }

  const [about1,setWAP12] = useState(false)
  const handleWAP12 = ()=>{
    setWAP12(true);
    setAbout(false)
    setSF110(false);
    setSG110(false);
    setSG11024(false);
  }

  const [about2,setSF110] = useState(false)
  const handleSF110 = ()=>{
    setSF110(true);
    setWAP12(false);
    setAbout(false)
    setSG110(false);
    setSG11024(false);
  }
  const [about3,setSG110] = useState(false)
  const handleSG110 = ()=>{
    setSG110(true)
    setSF110(false);
    setWAP12(false);
    setAbout(false)
    setSG11024(false);
  }
  const [about4,setSG11024] = useState(false)
  const handleSG11024 = ()=>{
    setSG11024(true);
    setSF110(false);
    setWAP12(false);
    setAbout(false)
    setSG110(false);
  }
    const settings =({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    });
    return (
      <>
      <div className="models" id="models">
        <h1 className="sectionTitle"><Text tid="modelsectionTitle" /></h1>
        <h2 className="sectionSubtitle"><Text tid="modelsectionSubtitle" /></h2>
        <div className="aaa">
        <Slider className="hello" {...settings}>
        <div className="model-box-main">
          <div className={'box ' + (about ? 'cactive' : '')}>
              <div className="image">
                <img src={RV160W} alt="RV160W" />
              </div>
              <button className="moreBtn" onClick={handleAbout} ><Text tid="modelmoreBtn" /><img src={Arrow} alt="Arrow" /></button>
              <h1 className="modelName">Cisco RV160 VPN</h1>
              <div className="descs">
                <div className="li">
                  <span />
                  <Text tid="modelli1" />
                </div>
                <div className="li">
                  <span />
                  <Text tid="modelli2" />
                </div>
              </div>
              <button  onClick={() => history.push('/pointofsales')} className="buyBtn"><Text tid="modelbuyBtn" /></button>
            </div>
            </div>
            <div className="model-box-main">
            <div className={'box' + (about1 ? ' cactive' : '')}>
              <div className="image">
                <img src={WAP125} alt="WAP125" />
              </div>
              <button className="moreBtn" onClick={handleWAP12}><Text tid="modelmoreBtn" /><img src={Arrow} alt="Arrow" /></button>
              <h1 className="modelName">Cisco WAP 125 Wireless</h1>
              <div className="descs">
                <div className="li">
                  <span />
                  <Text tid="modelli3" />
                </div>
                <div className="li">
                  <span />
                  <Text tid="modelli4" />
                </div>
              </div>
              <button  onClick={() => history.push('/pointofsales')} className="buyBtn"><Text tid="modelbuyBtn" /></button>
            </div>
            </div>
            <div className="model-box-main">
            <div className={'box' + (about2 ? ' cactive' : '')}>
              <div className="image">
                <img src={SF110D} alt="SF110D" />
              </div>
              <button className="moreBtn" onClick={handleSF110}><Text tid="modelmoreBtn" /><img src={Arrow} alt="Arrow" /></button>
              <h1 className="modelName">Cisco SF 110D</h1>
              <div className="descs">
                <div className="li">
                  <span />
                  <Text tid="modelli5" />
                </div>
                <div className="li">
                  <span />
                  <Text tid="modelli6" />
                </div>
                <div className="li">
                  <span />
                  <Text tid="modelli6-2" />
                </div>
              </div>
              <button onClick={() => history.push('/pointofsales')} className="buyBtn"><Text tid="modelbuyBtn" /></button>
            </div>
            </div>
            <div className="model-box-main">
            <div className={'box' + (about3 ? ' cactive' : '')}>
              <div className="image">
                <img src={SG1101} alt="SF110D" />
              </div>
              <button className="moreBtn" onClick={handleSG110}><Text tid="modelmoreBtn" /><img src={Arrow} alt="Arrow" /></button>
              <h1 className="modelName">Cisco Sg 110-16 HP</h1>
              <div className="descs">
                <div className="li">
                  <span />
                  <Text tid="modelli7" />
                </div>
                <div className="li">
                  <span />
                  <Text tid="modelli8" />
                </div>
                <div className="li">
                  <span />
                  <Text tid="modelli8-4" />
                </div>
              </div>
              <button  onClick={() => history.push('/pointofsales')} className="buyBtn"><Text tid="modelbuyBtn" /></button>
            </div>
            </div>
            <div className="model-box-main">
            <div className={'box' + (about4 ? ' cactive' : '')}>
              <div className="image">
                <img src={SG110} alt="SF110D" />
              </div>
              <button className="moreBtn" onClick={handleSG11024}><Text tid="modelmoreBtn" /><img src={Arrow} alt="Arrow" /></button>
              <h1 className="modelName">Cisco SF 110-24 EU</h1>
              <div className="descs">
                <div className="li">
                  <span />
                  <Text tid="modelli9" />
                </div>
                <div className="li">
                  <span />
                  <Text tid="modelli10" />
                </div>
                <div className="li">
                  <span />
                  <Text tid="modelli10-3" />
                </div>
              </div>
              <button  onClick={() => history.push('/pointofsales')} className="buyBtn"><Text tid="modelbuyBtn" /></button>
            </div>
            </div>
            </Slider>
            </div>
      </div>
      {about && !about1 && !about2 && !about3 && !about4 ?<AboutModel />: about1?<AboutWAP12 />: about2?<AboutSF110 />: about3?<AboutSG110 /> : about4?<AboutSG11024 /> : null}
      </>
    );
  
}
export default Model;
