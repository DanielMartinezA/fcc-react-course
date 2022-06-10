import './App.css';
import HeaderComponent from './components/HeaderComponent'
import MainComponent from './components/MainComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  return (
    <div className="flex-wrapper">
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
