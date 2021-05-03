import React, { useState } from 'react'
import {useHistory} from "react-router-dom"
import WAP125 from '../../../assets/img/WAP125-E-K9-EU_1.png';
import { Text } from '../../../containers/languages';

const AboutModel = () => {
  
  const history = useHistory();
  const description = "description"
  const characteristics = "characteristics"
  const features = "features"

  const [currentData, setCurrentData] = useState("")

  const handleDescription = () => {
      setCurrentData(description)
  }
  const handleCharacteristics = () => {
      setCurrentData(characteristics)
  }
  const handleFeatures = () => {
      setCurrentData(features)
  }
  return(
    <div className="aboutModel">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-5">
              <div className="text">
                <div className="modelName"><Text tid="modelName-1" /> <span /></div>
                <div className="tab_buttons">
                    <button className={currentData === "" || currentData === description ? 'active' : ''} onClick={handleDescription} data-tab-open="description"><Text tid="description" />
                    </button>
                    <button className={currentData === characteristics ? 'active' : ''} data-tab-open="characteristics" onClick={handleCharacteristics}><Text tid="characteristics" />
                    </button>
                    <button className={currentData === features ? 'active' : ''} data-tab-open="features" onClick={handleFeatures}><Text tid="features" /></button>
                </div>
                <div className="tab_contents">
                <div className={`tab_content ${currentData === description || currentData ==="" ? "active" : ""}`}>
                    <div className="modelDesc">
                    <Text tid="about31" />
                    </div>
                    <div className="lines">
                      <div className="line">
                        <div className="half">
                        <Text tid="about32" />  
                        </div>
                        <div className="half">
                        <Text tid="about18" />  
                        </div>
                      </div>
                      <div className="line">
                        <div className="half">
                        IPv6
                        </div>
                        <div className="half">
                        <Text tid="about18" />  
                        </div>
                      </div>
                      <div className="line">
                        <div className="half">
                        WPA/WPA2
                        </div>
                        <div className="half">
                        <Text tid="about18" />  
                        </div>
                      </div>
                      <div className="line">
                        <div className="half">
                        <Text tid="about33" />  
                        </div>
                        <div className="half">
                        <Text tid="about18" />  
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`tab_content ${currentData === characteristics ? "active" : ""}`}>
                  <div className="modelDesc">
                  <Text tid="about34" />  
                    </div>
                    <div className="lines">
                      <div className="line">
                        <div className="half">
                        <Text tid="about17" />  
                        </div>
                        <div className="half">
                        IEEE 802.11 ac, 802.11 n, 802.11 g, 802.11 b, 802.3 af, 802.3 u, 802.1 X, 802.1 Q (VLAN), 802.1 D, 802.11 i, 802.11 e, IPv4/6
                        </div>
                      </div>
                      <div className="line">
                        <div className="half">
                        <Text tid="about35" />  
                        </div>
                        <div className="half">
                        <Text tid="about36" />  
                        </div>
                      </div>
                      <div className="line">
                        <div className="half">
                        <Text tid="about21" />  
                        </div>
                        <div className="half">
                        <Text tid="about37" />  
                        </div>
                      </div>
                      <div className="line">
                        <div className="half">
                        <Text tid="about8" />  
                        </div>
                        <div className="half">
                        <Text tid="about9" />  
                        </div>
                      </div>
                      <div className="line">
                        <div className="half">
                        <Text tid="about10" />  
                        </div>
                        <div className="half">
                          Linux
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`tab_content ${currentData === features ? "active" : ""}`}>
                    <div className="descs">
                      <div className="li">
                        <span />
                        <Text tid="about38" />  
                      </div>
                      <div className="li">
                        <span />
                        <Text tid="about39" />  
                      </div>
                      <div className="li">
                        <span />
                        <Text tid="about40" />  
                      </div>
                      <div className="li">
                        <span />
                        <Text tid="about41" />  
                      </div>
                      <div className="li">
                        <span />
                        <Text tid="about42" />  
                      </div>
                      <div className="li">
                        <span />
                        <Text tid="about43" />  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 ml-auto">
              <div className="image">
                <img src={WAP125} alt="WAP125" />
              </div>
              <button onClick={() => history.push('/pointofsales')} className="buyBtn"><Text tid="modelbuyBtn" /></button>
            </div>
          </div>
        </div>
      </div>
     
  )
}
//DRY-DO Not Repeat yourself
export default AboutModel;