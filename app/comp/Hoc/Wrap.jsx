import { motion } from "framer-motion";

const Wrapper = (Component) =>
  function HOC() {
    return (
      <section
        
        className=" sm:mx-16 lg:mx-24 "
      >
        

        <Component />
      </section>
    );
  };

export default Wrapper;