import { Footer, Navbar } from "components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "sections";

const Page = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Explore />
    <GetStarted />
    <WhatsNew />
    <World />
    <Insights />
    <Feedback />
    <Footer />
  </>
);

export default Page;
