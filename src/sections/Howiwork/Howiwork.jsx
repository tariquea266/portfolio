import { forwardRef } from "react";

const Howiwork = forwardRef(function Howiwork(_, ref) {
  return (
    <section ref={ref} className="howiwork">
        <div className="howiworkContent">
          
          <span className="headingTag">Latest Project</span>
          <h2>From Idea to Production</h2>


        </div>
    </section>
  );
});

export default Howiwork;
