// ** React Imports
import { Fragment } from "react";
// Redux Imports
import { connect } from "react-redux";
// ** Third Party Components
import { Check } from 'react-feather';

import "./SuccessContent.css";

const SuccessContent = (props) => {
  return (
    <Fragment>
      <div className="ContentLayout">
        <div className="popup-container">
          <div className="popup-success-content">
            <Check color="green" size={64} />
            <span className="success-message">{props.successMessage ? props.successMessage : "Success"}</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    successMessage: state.app.successMessage,
  };
};
export default connect(mapStateToProps)(SuccessContent);
