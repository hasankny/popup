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
  const [font, setSelectedFont] = useState();
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
  };

  const emailValidation = () => {
    if (mail) {
      const regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (regex.test(mail) === false) {
        setError("Invalid email address!");
        return false;
      }
      return true;
    } else {
      setError("This field is required!");
      return false;
    }
  };

  const submitForm = () => {
    if (emailValidation()) {
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
        <div className="popup-container">
          <div className="popup-content" id="cookiesPopup">
            <button className="close">✖</button>
            <div className="popup-form">
              <p className="popup-headline">
                {props.headline ? props.headline : "NEW STUFF"}
              </p>
              <p className="popup-description">
                {props.description
                  ? props.description
                  : "Sign up for our newsletter and get 15% off your first order!"}
              </p>
              <div className="item">
                <div className="input-group">
                  <input
                    id="popup-name"
                    className="popup-input"
                    type="text"
                    name="popup-name"
                    placeholder="Your Name"
                    onChange={handleChangeName}
                  ></input>
                </div>
              </div>
              <div className="item">
                <div className="input-group">
                  <input
                    id="popup-name"
                    className="popup-input"
                    type="text"
                    name="popup-name"
                    placeholder="Email"
                    onChange={handleChangeMail}
                  ></input>
                </div>
                <span className="error-input">{error && error}</span>
              </div>
              <div className="item">
                <div className="input-group">
                  <select
                    id="popup-name"
                    className="popup-input"
                    type="text"
                    name="popup-name"
                    placeholder="Select Font"
                    onChange={(e) => handleChangeFont(e)}
                  >
                    {optionTemplate}
                  </select>
                </div>
              </div>
              <button className="popup-accept" onClick={submitForm}>
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
