
import styles from './App.module.css';

import { Abaut } from './componets/About/About';
import { Navbar } from './componets/Navbar/Navbar';



function App() {
  return (
  <div className={styles.App}> 
  <Navbar/>
  <Abaut/>

   </div>
  );
}

export default App;

