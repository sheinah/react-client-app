import React from "react";

const Images = () => {
  return (
    <div className="position-relative" style={{ marginTop: 60 }}>
      {/* Main charecter */}
      <div className="text-center flippable-img">
        <img
          style={{
            width: 400,
            margin: 20,
          }}
          src="/images/blog-3D.png"
          alt=""
        />
      </div>

      {/* Graph icon */}
      <div>
        <img
          className="position-absolute top-0 start-0"
          src="/images/graph-3d.png"
          alt=""
          style={{ width: 80 }}
        />
      </div>

      {/* Calender icon */}
      <div className="position-absolute bottom-50 end-80">
        <img src="/images/calendar-3d.png" alt="" style={{ width: 80 }} />
      </div>

      {/* Mail icon */}
      <div className="position-absolute bottom-0 end-0">
        <img src="/images/mail-3d.png" alt="" style={{ width: 150 }} />
      </div>

      {/* Contact icon */}
      <div className="position-absolute bottom-0 start-20">
        <img
          className="flippable-img"
          src="/images/contact-3d.png"
          alt=""
          style={{ width: 120 }}
        />
      </div>
    </div>
  );
};

export default Images;
