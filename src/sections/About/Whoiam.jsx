import { forwardRef } from "react";

const Whoiam = forwardRef(function Whoiam(_, ref) {
  return (
    <section ref={ref} className="whoiam">
      <div className="scrollText">
        <div className="track">
          <span>Senior Frontend Developer crafting scalable UI •</span>
          <span>Senior Frontend Developer crafting scalable UI •</span>
        </div>
      </div>
    </section>
  );
});

export default Whoiam;