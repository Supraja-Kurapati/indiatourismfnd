import './App.css';
import NavOne from './NavBars/NavOne';
import NavComponents from './NavBars/NavComponents/NavComponents';
import NavRoutes from './NavBars/NavComponents/NavRoutes';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
     <NavOne/>
     <NavComponents/>
     
     <body>
     <NavRoutes/>
     <Footer/>

     </body>
    </div>
  );
}

export default App;
