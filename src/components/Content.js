// ** React Imports
import { Fragment, useState } from "react";
// Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";

import { setStatus } from "../store/actions/appAction";
import "./Content.css";

const Content = (props) => {
  const [mail, setMail] = useState();
  const [name, setName] = useState();
  const [font, setSelectedFont] = useState("-1");
  const [error, setError] = useState();
  const dispatch = useDispatch();
  let optionTemplate = props.fontDataList.map((item, index) => (
    <option value={item.family} key={index}>
      {item.family}
    </option>
  ));

  const handleChangeMail = (e) => {
    setMail(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeFont = (e) => {
    setSelectedFont(e.target.value);
    console.log(e.target.value);
  };

  const formValidation = () => {
    let status = true;
    if (mail) {
      const regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (regex.test(mail) === false) {
        setError((prevState) => ({
          ...prevState,
          mail: "Invalid email address!",
        }));
        status = false;
      } else {
        setError((prevState) => ({
          ...prevState,
          mail: undefined,
        }));
      }
    } else {
      setError((prevState) => ({
        ...prevState,
        mail: "This field is required!",
      }));
      status = false;
    }
    if (!name) {
      setError((prevState) => ({
        ...prevState,
        name: "This field is required!",
      }));
      status = false;
    } else {
      setError((prevState) => ({
        ...prevState,
        name: undefined,
      }));
    }
    if (!font || font === "-1") {
      setError((prevState) => ({
        ...prevState,
        font: "This field is required!",
      }));
      status = false;
    } else {
      setError((prevState) => ({
        ...prevState,
        font: undefined,
      }));
    }
    return status;
  };

  const submitForm = () => {
    if (formValidation()) {
      setError(null);
      localStorage.setItem(
        "data",
        JSON.stringify({
          name,
          mail,
          font,
        })
      );
      dispatch(setStatus(true));
    }
  };
  return (
    <Fragment>
      <div className="ContentLayout">
        {/* <div className="content">
          <div className="content-bg"></div>
        </div> */}
        <div className="popup-container">
          <div className="popup-content">
            <button className="close">✖</button>
            <div className="popup-form">
              <div>
                <p className="popup-headline">
                  {props.headline ? props.headline : "NEW STUFF"}
                </p>
              </div>
              <div>
                <p className="popup-description">
                  {props.description
                    ? props.description
                    : "Sign up for our newsletter and get 15% off your first order!"}
                </p>
              </div>
              <div className="item">
                <div className="popup-input-group">
                  <input
                    id="popup-name"
                    className="popup-input"
                    type="text"
                    name="popup-name"
                    placeholder="Your Name"
                    onChange={handleChangeName}
                  ></input>
                </div>
                <span className="error-input">{error && error.name}</span>
              </div>
              <div className="item">
                <div className="popup-input-group">
                  <input
                    id="popup-name"
                    className="popup-input"
                    type="text"
                    name="popup-name"
                    placeholder="Email"
                    onChange={handleChangeMail}
                  ></input>
                </div>
                <span className="error-input">{error && error.mail}</span>
              </div>
              <div className="item">
                <div className="popup-input-group">
                  <select
                    id="popup-name"
                    className="popup-input"
                    type="text"
                    name="popup-name"
                    placeholder="Select Font"
                    onChange={(e) => handleChangeFont(e)}
                  >
                    <option value="-1" key="-1">
                      Select Font
                    </option>
                    {optionTemplate}
                  </select>
                </div>
                <span className="error-input">{error && error.font}</span>
              </div>
              <button className="popup-accept" onClick={(e) => submitForm()}>
                GET MY 30% OFF
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    headline: state.app.headline,
    description: state.app.description,
    successMessage: state.app.successMessage,
    fontDataList: state.app.fontList,
  };
};
export default connect(mapStateToProps)(Content);
