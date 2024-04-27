// Components
import { Content, MainHeader, TopHeader, HeaderInfo } from "./components";

const MainLayout: React.FC = () => (
  <div className="w-[100vw] h-[100vh] overflow-x-hidden pb-10">
    <div className="mb-5">
      <TopHeader />
      <MainHeader />
      <HeaderInfo />
    </div>

    <Content />
  </div>
);

export default MainLayout;
