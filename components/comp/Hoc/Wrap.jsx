"ues client"
import { useInView } from "framer-motion";
import { useRef } from "react";

const Wrapper = (Component) => {
  function HOC() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <section ref={ref}>
          <section
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        className="sm:mx-16 lg:mx-24"
      >
        <Component />
      </section>
      </section>
      
    );
  }

  return HOC;
};

export default Wrapper;