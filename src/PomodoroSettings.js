import ReactSlider from "react-slider";
import './slider.css'
import { useContext } from "react";
import SettingsContext from "./SettingsContext";
import BackButton from "./BackButton";

function PomodoroSettings(){
    
    const settignsInfo = useContext(SettingsContext);

    return (
        <div style={{textAlign:'left'}}>
            <label>work: {settignsInfo.workMinutes}:00</label>
            <ReactSlider 
                className={'slider'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={settignsInfo.workMinutes}
                onChange={newValue => settignsInfo.setWorkMinutes(newValue)}
                min={1}
                max={120}
            />
            <label>break: {settignsInfo.breakMinutes}:00 </label>
            <ReactSlider 
                className={'slider-green'}
                thumbClassName={'slider-green-thumb'}
                trackClassName={'track'}
                value={settignsInfo.breakMinutes}
                onChange={newValue => settignsInfo.setBreakMinutes(newValue)}
                min={1}
                max={120}
            />
            <div style={{textAlign:'center', marginTop:'20px'}}>
                <BackButton onClick={() => settignsInfo.setShowSettings(false)}/>
            </div>
            
        </div>
    );
}

export default PomodoroSettings;