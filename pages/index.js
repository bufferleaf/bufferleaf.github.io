import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Parents from "../src/components/Parents";
import Layout from "../src/layouts/Layout";
import Admin from "../src/layouts/Admin";
const Index = () => {
  return (
    <Layout>
      {/* HOME */}
      <Home />
      {/* /HOME */}
      {/* ABOUT */}
      <About />
      {/* /ABOUT */}
      {/* NEWS */}
      <News />
      {/* /NEWS */}
      {/* PORTFOLIO */}
      <Parents />
      {/* /PORTFOLIO */}
      {/* NEWS */}
      <Admin />
      {/* /PORTFOLIO */}

      {/* CONTACT */}
      <Contact />
      {/* /CONTACT */}
    </Layout>
  );
};
export default Index;
