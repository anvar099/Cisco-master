import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { addRequest } from "../../actions";
import ToTop from "../../assets/img/arrowDown.svg";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { useForm } from "react-hook-form";
import { Text } from "../../containers/languages";
import "./styles.css";

const Login = (props) => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    props.addRequest(data);
    e.target.reset();
  };
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.up("xg"));

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const successMessage = () => (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle
        id="responsive-dialog-title"
        style={{ margin: "0 auto", color: "green" }}
      >
        <CheckCircleOutlineIcon fontSize="large" />
      </DialogTitle>
      <DialogContent>
        <DialogTitle style={{ marginTop: "-25px", textAlign: "center" }}>
          <Text tid="success" />
        </DialogTitle>
        <DialogContentText>
          <Text tid="dialogtext" />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={handleClose}
          style={{
            margin: "0 auto",
            marginTop: "-25px",
            backgroundColor: "blue",
            color: "white",
          }}
        >
          <Text tid="ok" />
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <>
      <section className="form" id="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>
            <Text tid="formtitle" />
          </h1>
          <div className="form_group">
            <span />
            <input
              className="formInput"
              id="fio"
              type="text"
              placeholder={Text({ tid: "formfio" })}
              required
              {...register("name")}
            />
          </div>
          <div className="form_group">
            <span />
            <input
              className="formInput"
              type="email"
              placeholder={Text({ tid: "formemail" })}
              required
              {...register("email")}
            />
          </div>
          <div className="form_group">
            <span />
            <input
              className="formInput"
              type="number"
              placeholder={Text({ tid: "formnumber" })}
              required
              {...register("number")}
            />
          </div>
          <div className="form_group">
            <span />
            <input
              className="formInput"
              type="text"
              placeholder={Text({ tid: "formcompany" })}
              required
              {...register("company")}
            />
          </div>
          <p>
            <Text tid="formparagraph" />
          </p>
          <div className="form-btn">
            <div className="form-btn">
              <button type="submit" onClick={handleClickOpen}>
                <Text tid="formbtn" />
              </button>
            </div>
          </div>
        </form>
        <a href="#header" className="toTopBtn">
          <img src={ToTop} alt="ToTop" />
        </a>
      </section>
      {props.userRequest.userRequest ? successMessage() : null}
    </>
  );
};
const mapStateToProps = (state) => {
  return { userRequest: state.userRequest };
};
export default connect(mapStateToProps, { addRequest })(Login);
