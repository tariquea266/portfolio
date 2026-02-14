import { forwardRef } from "react";

const WhoIAm = forwardRef(function WhoIAm(_, ref) {
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

export default WhoIAm;
