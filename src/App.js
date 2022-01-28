import Header from "./Components/Header";
import { OuterLayout } from './styles/Layouts';
import FaqServices from "./Components/FaqServices";
import MessagingSection from "./Components/MessagingSection";
import FaqTip from "./Components/FaqTip";
import Footer from "./Components/Footer";
import { Fade } from "react-reveal";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Orcamento from './pages/Orcamento';
import Services from './pages/Services';
import ProjectsSection from './Components/ProjectsSection'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/orcamento">
            <Orcamento />
          </Route>

          <Route path="/services">
            <Services />
          </Route>

          <OuterLayout>
            {/* <Fade left>
            <CardSection />
          </Fade> */}
            <Fade left>
              <MessagingSection />
            </Fade>
            <Fade right>
              <FaqServices />
            </Fade>
            <Fade right>
              <ProjectsSection />
            </Fade>
            <Fade left>
              <FaqTip />
            </Fade>
          </OuterLayout>

        </Switch>
        <Fade bottom>
          <Footer />
        </Fade>
      </Router>
    </>
  );
}

export default App;
