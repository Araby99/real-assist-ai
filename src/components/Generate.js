import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners'

const Generate = ({ setPreview, typeActive, toneActive, lengthActive }) => {
    const [generate, setGenerate] = useState(false);
    const handleGenerate = () => {
        setGenerate(true);
        // some api calls
        setTimeout(() => {
            // as callback function
            const res = {
                type: typeActive,
                tone: toneActive,
                length: lengthActive
            }
            console.log(res);
            setPreview(true);
            setGenerate(false)
        }, 2000);
    }
    return (
        <button className="bg-blue-700 hover:bg-blue-600 text-white p-3 rounded gap-2 w-full block text-center" onClick={handleGenerate}>
            {generate ? (
                <ClipLoader
                    color="#fff"
                    size={22}
                    cssOverride={{ margin: "0 50px" }}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            ) : (
                <>
                    <span>Generate Draft</span>
                </>
            )}
        </button>
    )
}

export default Generate