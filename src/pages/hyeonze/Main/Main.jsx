import Feeds from './Feeds/Feeds';
import MainRight from './MainRight/MainRight';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <Feeds />
      <Feeds />
      <Feeds />
      <Feeds />
      <MainRight />
    </div>
  );
};

export default Main;
