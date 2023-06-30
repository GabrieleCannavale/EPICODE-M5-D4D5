import './App.css';
import LatestRelease from './components/latestRelease/LatestRelease';
import MyCarousel from './components/myCarousel/MyCarousel';
import MyNavigationBar from './components/myNavigationBar/MyNavigationBar';

function App() {
  return (
    <div>
      <MyNavigationBar />
      <MyCarousel />
      <LatestRelease />
    </div>
  );
}

export default App;
