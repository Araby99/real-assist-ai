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
    const [close, setClose] = useState(false);
    const [preview, setPreview] = useState(false);
    const [typeActive, setTypeActive] = useState("email");
    const [toneActive, setToneActive] = useState("professional");
    const [lengthActive, setLengthActive] = useState("short");
    /**
     * useEffect(() => {
        if (close) {
            container.current.style.transform = "scaleX(0)";
            setTimeout(() => {
                container.current.style.display = "none"
            }, 500);
        } else {
            container.current.style.display = "flex";
            setTimeout(() => {
                container.current.style.transform = "scaleX(1)";
            }, 50);
        }
    }, [close])
     */
    return (
        <>
            {close && (
                // <div className="z-50 fixed right-5 top-5 h-10 w-10 bg-slate-700 rounded-md flex justify-center items-center text-white cursor-pointer" onClick={() => setClose(false)}>
                //     <FontAwesomeIcon icon={faGear} className='setting-gear' />
                // </div>

                <div className="z-50 fixed right-5 top-1/2 transform -translate-y-1/2 h-10 w-10 bg-slate-700 rounded-md flex justify-center items-center text-white cursor-pointer" onClick={() => setClose(false)}>
                    <FontAwesomeIcon icon={faGear} className='setting-gear' />

                    {/* <img src="./logo.png" alt="RealAssist.AI" /> */}
                </div>
            )}
            {
                //  <div className="z-50 h-screen w-full bg-slate-800 bg-opacity-25 fixed top-0"> ${close ? "scale-x-0" : ""}
            }
            <div className="sticky top-0 right-0">
                <div className={`extenstion-container flex flex-col justify-between gap-3 right-0 bg-slate-800 h-screen width-500 ${close ? "closed p-0 overflow-hidden" : "opened p-5"}`}>
                    <Name />
                    <User setClose={setClose} />
                    <Preview preview={preview} />
                    <Types typeActive={typeActive} setTypeActive={setTypeActive} toneActive={toneActive} setToneActive={setToneActive} lengthActive={lengthActive} setLengthActive={setLengthActive} />
                    <Generate setPreview={setPreview} typeActive={typeActive} toneActive={toneActive} lengthActive={lengthActive} />
                </div>
            </div>
        </>
    );
}

export default App;
