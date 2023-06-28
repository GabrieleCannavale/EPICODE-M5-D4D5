import './App.css';
import LatestRelease from './components/latestRelease/LatestRelease';
import MyNavigationBar from './components/myNavigationBar/MyNavigationBar';

function App() {
  return (
    <div>
      <MyNavigationBar />
      <LatestRelease />
    </div>
  );
}

export default App;
