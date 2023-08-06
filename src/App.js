import { useState } from 'react';
import './App.css';
import Name from './components/Name'
import User from './components/User'
import Preview from './components/Preview'
import Types from './components/Types';
import Generate from './components/Generate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    const [close, setClose] = useState(true);
    const [preview, setPreview] = useState(false);
    const [typeActive, setTypeActive] = useState("email");
    const [toneActive, setToneActive] = useState("professional");
    const [lengthActive, setLengthActive] = useState("short");
    return (
        close ? (
            <div className="z-50 absolute right-5 top-5 h-10 w-10 bg-slate-700 rounded-md flex justify-center items-center text-white cursor-pointer" onClick={() => setClose(false)}>
                <FontAwesomeIcon icon={faGear} className='setting-gear' />
            </div>
        ) : (
            <div className="z-50 h-screen w-full bg-slate-800 bg-opacity-25 absolute top-0">
                <div className="extenstion-container flex flex-col justify-between gap-3 absolute p-5 right-0 bg-slate-800 h-screen w-2/5 lg:w-2/5 xl:w-2/6 2xl:w-1/4">
                    <Name />
                    <User setClose={setClose} />
                    <Preview preview={preview} />
                    <Types typeActive={typeActive} setTypeActive={setTypeActive} toneActive={toneActive} setToneActive={setToneActive} lengthActive={lengthActive} setLengthActive={setLengthActive} />
                    <Generate setPreview={setPreview} typeActive={typeActive} toneActive={toneActive} lengthActive={lengthActive} />
                </div>
            </div>
        )
    );
}

export default App;
