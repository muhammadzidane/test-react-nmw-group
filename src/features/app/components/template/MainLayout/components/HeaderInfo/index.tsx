import React from "react";

const HeaderInfo = () => {
  return (
    <div className="px-48 flex gap-3 h-[54px] bg-[#363B40] pt-2">
      <div className="flex items-center px-3 text-white-1 text-[13px] font-semibold border-r-[1px] border-l-[1px] border-gray-2">
        TERKINI
      </div>
      <div className="flex items-center text-white-1 !font-thin">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
        accusantium, in
      </div>
      <div className="flex items-center text-gray-2 text-[12px]">
        3 days ago
      </div>
    </div>
  );
};

export default HeaderInfo;
