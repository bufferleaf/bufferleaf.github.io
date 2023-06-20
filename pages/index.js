import Rum from "../src/components/Rum";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Events from "../src/components/Events";
import Layout from "../src/layouts/Layout";
import Admin from "../src/layouts/Admin";
const Index = () => {
  return (
    <Layout>
      {/* HOME */}
      <Home />
      {/* /HOME */}
      {/* ABOUT */}
      <Rum />
      {/* /ABOUT */}
      {/* PORTFOLIO */}
      <Events />
      {/* /PORTFOLIO */}
      {/* NEWS */}
      <Admin />
      {/* /PORTFOLIO */}
      {/* NEWS */}
      <News />
      {/* /NEWS */}
      {/* CONTACT */}
      <Contact />
      {/* /CONTACT */}
    </Layout>
  );
};
export default Index;
