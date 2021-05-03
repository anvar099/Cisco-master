import React  from "react";
import { Switch, Route, Router } from "react-router-dom";
import setAuthToken from "./utils/setAuthToken";
import { LanguageProvider } from "./containers/languages";
import history from "./history";
import loginPage from "../src/pages/login/loginPage";
import homePage from "./pages/homePage/homePage";
import AdminPanelPage from "./pages/admin_panel/adminPanelPage";
import PointOfSales from "./pages/PointSales/pointsales";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = (props) => {
  return (
    <LanguageProvider>
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={homePage} />
            <Route exact path="/admin" component={loginPage} />
            <Route exact path="/pointofsales" component={PointOfSales} />
            <AdminPanelPage />
          </Switch>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
