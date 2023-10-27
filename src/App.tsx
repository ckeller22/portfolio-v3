import { useState } from 'react';
import './App.css';
// import EmailSideBar from './components/sidebar/EmailSideBar';
// import SocialSideBar from './components/sidebar/SocialSideBars';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = (event) => {
    setDarkMode(!darkMode);
    console.log('🚀 ~ file: App.tsx:11 ~ handleClick ~ darkMode:', darkMode);
  };

  return (
    <div>
      <button
        type="button"
        aria-label="switch"
        className="py-2 px-4 bg-black text-white "
        onClick={handleClick}
      >
        switch
      </button>
    </div>
  );
}

export default App;
