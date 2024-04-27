import React from "react";

const TopHeader = () => {
  const headerRoutes = [
    "BERANDA",
    "BERITA",
    "PROFILE",
    "LAYANAN",
    "INFORMASI PUBLIK",
    "REGULASI",
    "PUBLIKASI",
    "PENGUMUMAN",
    "TERKINI",
  ];

  return (
    <div className="pl-48 lg:flex items-center justify-between h-[132px] bg-[#1474ae] border-b-white-1">
      <div className="mt-3 mr-[86px]">
        <img
          className="w-[207px]"
          src="https://www.kominfo.go.id/images/logo-big.png"
          alt="kominfo"
        />
      </div>
      <div className="flex flex-1 gap-5 px-2 items-center pr-5 mt-auto text-white-1 text-[14px] h-[50px] bg-[#253C80] font-medium">
        {headerRoutes.map((route, routeIndex) => (
          <>
            <div
              className={`h-[50px] flex items-center ${
                routeIndex === 0 ? "bg-[#2A3B48]" : ""
              }`}
              key={routeIndex}
            >
              {route}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default TopHeader;
