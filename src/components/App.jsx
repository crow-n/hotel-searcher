import React, { PureComponent } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import FastSearchPage from "../containers/page/FastSearchPage";
import DrawerContainer from "../containers/page/DrawerContainer";
import HotelsPage from "../components/page/HotelsPage";
import HotelDetailPage from "../containers/page/HotelDetailPage";

class App extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={FastSearchPage} />
          <Route exact path="/hotels" component={HotelsPage} />
          <Route exact path="/hotels/hoteldetail/:id" component={HotelDetailPage} />
          <Route path="/" component={DrawerContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
