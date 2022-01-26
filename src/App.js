import Header from "./Components/Header";
import { OuterLayout } from './styles/Layouts';
import FaqServices from "./Components/FaqServices";
import MessagingSection from "./Components/MessagingSection";
import FaqTip from "./Components/FaqTip";
import Footer from "./Components/Footer";
import { Fade } from "react-reveal";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Orcamento from './pages/Orcamento';

function App() {
  return (
    <>
      <div className="App">

        <Router>
          <Header />
          <Switch>
            
            <Route path="/about">
              <About />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/orcamento">
              <Orcamento />
            </Route>

          </Switch>
        </Router>

        <OuterLayout>
          <Fade left>
            <MessagingSection />
          </Fade>
          <Fade right>
            <FaqServices />
          </Fade>
          <Fade left>
            <FaqTip />
          </Fade>
        </OuterLayout>

        <Fade bottom>
          <Footer />
        </Fade>
      </div>
    </>
  );
}

export default App;
