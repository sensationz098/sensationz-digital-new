import { useEffect, useState } from "react";
import { About, Contact, Hero, ClientList, Title, Navbar } from "../Components";
import Services from "../Components/Services/Services";
import Testimonials from "../Components/Testimonials/Testimonials";
import { BeatLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader-cover">
          <BeatLoader
            color={"#ff0000"}
            loading={loading}
            size={20}
            aria-label="Loading bouncer"
            data-testid="loader"
            className="loader"
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />

          <div className="container">
            <Title title={"our services"} subtitle={"what we offer"} />
            <Services />
          </div>
          <div className="container">
            <Title title={"about Us"} subtitle={"know more about us"} />
            <About />
          </div>
          <div className="container">
            <Title title={"clients"} subtitle={"Whom we have worked for?"} />

            <ClientList />
          </div>
          <div className="container">
            <Title title={"testimonials"} subtitle={"what client says?"} />
          </div>
          <Testimonials />
          <div className="container">
            <Title title={"contact us"} subtitle={"get in touch"} />

            <Contact />
          </div>
        </>
      )}
    </>
  );
}

export default App;
