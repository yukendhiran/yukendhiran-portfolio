import { motion } from "framer-motion";

const Wrapper = (Component) =>
  function HOC() {
    return (
      <section
        
        className=" mx-24 "
      >
        

        <Component />
      </section>
    );
  };

export default Wrapper;