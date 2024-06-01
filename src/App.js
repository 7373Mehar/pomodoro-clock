import './App.css';
import PomodoroSettings from './PomodoroSettings';
import SettingsContext from './SettingsContext';
import Timer from './Timer'
import { useState } from 'react';

function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <div>
        <main>
          <SettingsContext.Provider value={{
            showSettings,
            setShowSettings,
            workMinutes,
            breakMinutes,
            setWorkMinutes,
            setBreakMinutes
          }}>
              {showSettings ? <PomodoroSettings/> : <Timer/>}
          </SettingsContext.Provider>         
        </main>
    </div>
  );
}

export default App;
