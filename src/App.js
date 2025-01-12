import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Pricing from './Components/Pages/Pricing/Pricing';
import AboutUsPage from './Components/Pages/AboutUsPage/AboutUsPage';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import NoMatch from './Components/NoMatch/NoMatch';
import MemberShifFrom from './Components/Pages/MemberShifFrom/MemberShifFrom';
import OurClasses from './Components/Pages/OurClasses/OurClasses';
import Payment from './Components/Pages/Payment/Payment';
import ServicesDetails from './Components/Pages/OurServices/ServicesDetails';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/pricing/">
          <Pricing />
        </Route>
        <Route path="/aboutUs">
          <AboutUsPage />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/classes">
        <OurClasses />
        </Route>
        <Route path="/service">
          <ServicesDetails />
        </Route>
        <Route path="/form">
          <MemberShifFrom />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
