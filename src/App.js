import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import "aos/dist/aos.css"
import firebase from "firebase/app";
import firebaseConfig from './Components/firebaseConfig'

function App() {
  if (firebase.apps.length===0) {
    firebase.initializeApp(firebaseConfig);
   }
  return (
   <Home/>
  );
}
export default App;
