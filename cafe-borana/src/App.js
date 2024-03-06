import './App.css';
import Header from './components/header/Header';
import WhyChoose from './components/sectionWhyChoose/WhyChoose';
import Footer from './components/footer/Footer';
import Shop from './components/sectionShop/Shop';
import History from './components/sectionHistory/History';

function App() {

  return (

    <div>
      <Header></Header>
      <WhyChoose></WhyChoose>
      <Shop></Shop>
      <History></History>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
