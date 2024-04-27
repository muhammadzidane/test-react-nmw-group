import { HomeHoax } from "./components";

const HomeIndex: React.FC = () => {
  return (
    <div className="px-48">
      <div className="flex gap-7">
        <div className="flex flex-col gap-3">
          <div className="flex-1">
            <img
              className="w-full"
              src="https://web.kominfo.go.id/sites/default/files/kominfo-wamen-nezar-patria-adb-1000-su.jpg"
              alt="kominfo"
            />
          </div>

          <div className="grid grid-cols-3 gap-3 border-gray-1 border-b-[1px] pb-2 px-2">
            <div>
              <div className="text-[14px] text-gray-2 mb-2">20-12-2024</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>

            <div>
              <div className="text-[14px] text-gray-2 mb-2">20-12-2024</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>

            <div>
              <div className="text-[14px] text-gray-2 mb-2">20-12-2024</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
        </div>

        <div className="w-[500px] flex flex-col gap-2">
          <div>
            <img
              src="https://web.kominfo.go.id/sites/default/files/users/4896/kominfo-visi-indonesia-website.png"
              alt="kominfo"
            />
          </div>

          <div className="flex">
            <div className="w-1 h-[41px] border-[2px] border-red"></div>
            <div className="flex items-center px-4 bg-[#F0F0F0] font-semibold w-full h-[41px]">
              Makin Digital Makin Maju
            </div>
          </div>

          <HomeHoax />
          <HomeHoax />
          <HomeHoax />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-4 gap-5">
        <div>
          <div className="border border-gray-1">
            <div className="p-4 bg-[#60D1D8]">
              <div>TERBARU</div>
              <div className="text-[14px]">Rangkuman Berita</div>
            </div>
          </div>

          <div className="border border-gray-1">
            <div className="p-4">
              <div>SIARAN PERS</div>
              <div className="text-[14px]">Rangkuman Berita</div>
            </div>
          </div>

          <div className="border border-gray-1">
            <div className="p-4">
              <div>BERITA</div>
              <div className="text-[14px]">Rangkuman Berita</div>
            </div>
          </div>

          <div className="border border-gray-1">
            <div className="p-4">
              <div>PENGUMUMAN</div>
              <div className="text-[14px]">Rangkuman Berita</div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <img
              className="w-full"
              src="https://placehold.co/100x100"
              alt="HOAX"
            />
          </div>

          <div className="bg-white-1 shadow w-[75%] h-[300px]">
            <div className="flex gap-3 h-[50px]">
              <div className="w-[2px] bg-gray-3"></div>
              <div>
                <div className="text-[14px] text-gray-2">
                  BERITA PEMERINTAHAN
                </div>
                <div className="text-[12px] mt-2 text-gray-2">20-12-2024</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <img
              className="w-full"
              src="https://placehold.co/100x100"
              alt="HOAX"
            />
          </div>
        </div>

        <div>
          <div>
            <img
              className="w-full"
              src="https://placehold.co/100x100"
              alt="HOAX"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIndex;
