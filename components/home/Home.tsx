import HomeHeader from "./HomeHeader";
import { Divider } from "antd";
import LinksTable from "./LinksTable";

const Home: React.FC = () => {
  return (
    <div>
      <HomeHeader />
      <Divider />
      <LinksTable />
    </div>
  );
};

export default Home;
