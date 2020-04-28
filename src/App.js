import React from 'react';

import { connect } from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeature, removeFeature } from './actions/actions';

const App = ({additionalFeatures, car, additionalPrice, addFeature, removeFeature}) => {
  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={additionalFeatures} addFeature={addFeature} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  addFeature,
  removeFeature
}

// wrap the component export in the connect function
//pass the component that we want to connect into the second call
//the first call will taje inb a function and an object
//function returns an object
//any property on the returned object gets added to the component props
const mapStateToProps = (state) => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default connect(() => {return {} }, {})(App); // function currying
