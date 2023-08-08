import { useState } from 'react';
import './App.css';
import Name from './components/Name'
import User from './components/User'
import Preview from './components/Preview'
import Types from './components/Types';
import Generate from './components/Generate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    const [close, setClose] = useState(true);
    const [preview, setPreview] = useState(false);
    const [typeActive, setTypeActive] = useState("email");
    const [toneActive, setToneActive] = useState("professional");
    const [lengthActive, setLengthActive] = useState("short");
    const [stringResponse, setStringResponse] = useState("");
    return (
        <>
            {// <div className="z-50 fixed right-5 top-5 h-10 w-10 bg-slate-700 rounded-md flex justify-center items-center text-white cursor-pointer" onClick={() => setClose(false)}>
                //     <FontAwesomeIcon icon={faGear} className='setting-gear' />
                // </div>

                // <div className="z-50 fixed right-5 top-1/2 transform -translate-y-1/2 h-10 w-10 bg-slate-700 rounded-md flex justify-center items-center text-white cursor-pointer" onClick={() => setClose(false)}>
                //     <FontAwesomeIcon icon={faGear} className='setting-gear' />

                //     {/* <img src="./logo.png" alt="RealAssist.AI" /> */}
                // </div>
                //  <div className="z-50 h-screen w-full bg-slate-800 bg-opacity-25 fixed top-0"> ${close ? "scale-x-0" : ""}
            }
            {
                close && (
                    <>
                        <div className="absolute inset-y-1/3 right-10 text-white arrow-animation text-4xl">
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </div>
                        <div className="absolute inset-y-2/3 right-10 text-white arrow-animation text-4xl">
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </div>
                    </>
                )
            }
            <div className={`w-5 sticky top-0 right-0 bg-slate-800 h-screen cursor-pointer duration-700 ${close ? "side-close" : "side-open"}`} onClick={() => setClose(false)}></div>
            <div className="absolute top-0 right-0">
                <div className={`extenstion-container duration-700 flex flex-col justify-between gap-3 right-0 bg-slate-800 h-screen width-500 p-5 pl-0 ${close ? "closed" : "opened"}`}>
                    <Name />
                    <User setClose={setClose} />
                    <Types typeActive={typeActive} setTypeActive={setTypeActive} toneActive={toneActive} setToneActive={setToneActive} lengthActive={lengthActive} setLengthActive={setLengthActive} />
                    <Generate setStringResponse={setStringResponse} setPreview={setPreview} typeActive={typeActive} toneActive={toneActive} lengthActive={lengthActive} />
                    <Preview preview={preview} stringResponse={stringResponse} setStringResponse={setStringResponse} />
                </div>
            </div>
        </>
    );
}

export default App;
