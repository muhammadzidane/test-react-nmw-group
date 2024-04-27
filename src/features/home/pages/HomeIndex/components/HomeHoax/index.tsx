import React from "react";

const HomeHoax = () => {
  return (
    <div>
      <div className="flex gap-5">
        <div className="w-[100px] h-100px">
          <img
            className="w-full !rounded-full"
            src="https://placehold.co/100x100"
            alt="HOAX"
          />
        </div>
        <div>
          <div className="flex gap-2 items-center mb-2">
            <div className="text-[#FF0000] font-semibold text-[12px]">
              Hoaks
            </div>
            <div>25-02-2024 06:12 WIB</div>
          </div>
          <div>
            [HOAX] Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eligendi consequatur{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHoax;
