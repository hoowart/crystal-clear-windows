// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaf32jJBNOgJUFjk0AIVXb-n-FbgdmzvM",
  authDomain: "ccwindow-fb6d6.firebaseapp.com",
  projectId: "ccwindow-fb6d6",
  storageBucket: "ccwindow-fb6d6.appspot.com",
  messagingSenderId: "969438137357",
  appId: "1:969438137357:web:31a9b79a55a68b37991944",
  measurementId: "G-RBHDGJVPY2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import Navbar from './components/Navbar'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
    <Navbar />
      <div className="container">
        <Routes>
          <Route index element={<About />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
