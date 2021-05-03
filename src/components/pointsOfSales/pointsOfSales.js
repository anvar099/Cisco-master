import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllShops } from "../../actions";
import Close from "../../assets/img/close.svg";
import ArrowRight from "../../assets/img/Arrow_right.svg";
import { useHistory } from "react-router-dom";
import "./styles.css";

const PointOfSales = (props) => {
  const history = useHistory();
  useEffect(() => {
    props.getAllShops();
  }, [props]);
  return (
    <div className="pointsOfSales">
      <div className="container">
        <button className="closeBtn" onClick={() => history.push("/")}>
          <img src={Close} alt="Close" />
        </button>
        <h1 className="sectionTitle">Точки продаж</h1>
        <h2 className="sectionSubtitle">
          Краткая информация о партнерах, распространяющих нашу продукцию
        </h2>
        <div className="row">
          {props.shops.allShops.map((shop) => {
            return (
              <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                <div className="box">
                  <div className="logo">
                    <img
                      src={`http://manage.rosuniversitet.com:8081/img/shops/${shop.photo}`}
                      alt={shop.ShopName}
                    />
                  </div>
                  <a href={`${shop.url}`} target="_blank" rel="noreferrer">
                    На сайт <img src={ArrowRight} alt="ArrowRight" />
                  </a>
                  <div className="seller">{shop.shopName}</div>
                  <div className="sellerDesc">{shop.description}</div>
                  <div className="phone">
                    <h4>Телефон</h4>
                    <h3>{shop.number}</h3>
                  </div>
                  <div className="phone">
                    <h4>Адрес</h4>
                    <h3>{shop.location}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { shops: state.shops };
};

export default connect(mapStateToProps, { getAllShops })(PointOfSales);
