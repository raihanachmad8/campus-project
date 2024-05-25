import Jumbotron from './partials/Jumbotron';
import Navigation from '../../components/Navigation';
import About from './partials/About';
import ShowCase from './partials/ShowCase';

const Home: React.FC = () => {
  return (
    <>
      <Navigation />
      <Jumbotron />
      <About />
      <ShowCase />
    </>
  );
};

export default Home;
