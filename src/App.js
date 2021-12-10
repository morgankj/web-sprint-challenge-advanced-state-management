import React, { useEffect } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import { fetchSmurfs } from "./actions";

import { connect } from 'react-redux';

const App = (props) => {
  const { isLoading, error } = props;

  useEffect(() => {
    props.fetchSmurfs();
  }, [])

  if (isLoading) {
    return(
      <h2>Retrieving smurfs...</h2>
    )
  }

  if (error) {
    return(
      <h2>Cannot retrieve Smurfs: {error} </h2>
    )
  }

  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList />
        <AddForm />
      </main>
    </div>
  );
}

const mapStateToProps = state => {
  return({
    allSmurfs: state.allSmurfs,
    isLoading: state.isLoading,
    error: state.error
  })
}

export default connect(mapStateToProps, { fetchSmurfs })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.