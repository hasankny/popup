// ** React Imports
import { Fragment, memo, useState, useEffect } from "react";

// Redux Imports
import { useSelector, useDispatch, connect } from "react-redux";

import { getFontList } from "./store/actions/appAction";

import "./App.css";
import Content from "./components/Content";
import GeneralSettings from "./components/GeneralSettings";
import SuccessContent from "./components/SuccessContent";

const App = (props) => {
  const dispatch = useDispatch();
  console.log("status", props.status);
  useEffect(() => {
    dispatch(getFontList());
  }, []);
  return (
    <Fragment>
      <div className="App">
        <GeneralSettings></GeneralSettings>
        {!props.status ? (
          <Content></Content>
        ) : (
          <SuccessContent></SuccessContent>
        )}
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    status: state.app.status,
  };
};
export default connect(mapStateToProps)(App);
