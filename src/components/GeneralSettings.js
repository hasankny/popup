// ** React Imports
import { Fragment } from "react";
// Redux Imports
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import {
  setHeadline,
  setDescription,
  setSuccessMessage,
} from "../store/actions/appAction";

import "./GeneralSettings.css";

const GeneralSettings = (props) => {
  const dispatch = useDispatch();

  const handleChangeHeadline = (e) => {
    dispatch(setHeadline(e.target.value));
    console.log("Headline", props.headline);
  };
  const handleChangeDescription = (e) => {
    dispatch(setDescription(e.target.value));
    console.log("Description", props.description);
  };
  const handleChangeSuccessMessage = (e) => {
    dispatch(setSuccessMessage(e.target.value));
    console.log("SuccessMessage", props.successMessage);
  };

  return (
    <Fragment>
      <div className="SettingLayout">
        <span className="form-title">General Settings</span>
        <div className="settings-form">
          <div className="item">
            <label className="label-input label-headline" htmlFor="settings-headline">
              Headline
            </label>
            <div className="input-group">
              <input
                id="settings-headline"
                className="settings-input"
                type="text"
                name="settings-headline"
                placeholder="Enter Headline..."
                onChange={handleChangeHeadline}
              ></input>
            </div>
          </div>
          <div className="item">
            <label className="label-input" htmlFor="settings-description">
              Description
            </label>
            <div className="input-group">
              <textarea
                id="settings-description"
                className="settings-input"
                type="text"
                name="settings-description"
                placeholder="Enter Description..."
                onChange={handleChangeDescription}
              ></textarea>
            </div>
          </div>
          <div className="item">
            <label className="label-input" htmlFor="settings-success-message">
              Success Message
            </label>
            <div className="input-group">
              <input
                id="settings-success-message"
                className="settings-input"
                type="text"
                name="settings-success-message"
                placeholder="Enter Success Message..."
                onChange={handleChangeSuccessMessage}
              ></input>
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
  };
};
export default connect(mapStateToProps)(GeneralSettings);
