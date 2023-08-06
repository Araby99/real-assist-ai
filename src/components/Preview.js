import { faPaste, faRotateRight, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import ClipLoader from "react-spinners/ClipLoader";

const Preview = ({ preview }) => {
    const draft = useRef(null);
    const copy = () => {
        navigator.clipboard.writeText(draft.current.innerText);
        Swal.fire({
            title: 'Copied!',
            text: 'Text Copied To Clipboard',
            icon: 'success',
            confirmButtonText: 'Close',
            confirmButtonColor: '#1d4ed8'
        })
    }
    const [regenerate, setRegenerate] = useState(false);
    const handleRegenerate = () => {
        setRegenerate(true);
        // some api calls
        setTimeout(() => {
            // as callback function
            setRegenerate(false)
        }, 2000);
    }
    return preview ? (
        <div className="flex flex-col gap-5 h-full">
            <div className="p-5 border border-slate-500 rounded-md h-full">
                <p className="text-white text-regular" ref={draft}>
                    Thank you for choosing our real estate agency! It was a pleasure assisting you in finding your dream home. Your trust means the world to us, and we're here for any future needs.
                </p>
            </div>
            <div className="flex justify-end items-center gap-3">
                <button className="bg-blue-700 hover:bg-blue-600 text-white p-2 rounded inline-flex items-center gap-2" onClick={copy}>
                    <FontAwesomeIcon icon={faPaste} />
                    <span>Copy</span>
                </button>
                <button className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded inline-flex items-center gap-2" onClick={handleRegenerate}>
                    {regenerate ? (
                        <ClipLoader
                            color="#fff"
                            size={22}
                            cssOverride={{ margin: "0 50px" }}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    ) : (
                        <>
                            <FontAwesomeIcon icon={faRotateRight} />
                            <span>Regenerate</span>
                        </>
                    )}
                </button>
            </div>
            <hr className="h-1 border-0 dark:bg-gray-700" />
        </div>
    ) : (
        <div className="flex flex-col gap-5 h-full">
            <div className="p-5 border border-slate-500 rounded-md h-full flex justify-center items-center">
                <p className="flex flex-col gap-3 opacity-40 text-white">
                    <FontAwesomeIcon icon={faWandMagicSparkles} />
                    <span className="font-regular w-3/4 text-center m-auto">Preview Will be Generated here</span>
                </p>
            </div>
            <hr className="h-1 border-0 dark:bg-gray-700" />
        </div>
    );
}

export default Preview