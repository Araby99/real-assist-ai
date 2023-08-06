import { faAlignJustify, faPencil, faVolumeHigh } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Email = ({ toneActive, setToneActive, lengthActive, setLengthActive }) => {
    return (
        <div className="flex flex-col gap-3">
            <div className="p-7 border border-slate-500 rounded-md flex flex-col gap-5">
                <p className="font-semi-bold text-white flex gap-2 items-center">
                    <FontAwesomeIcon icon={faVolumeHigh} />
                    Choose Tone
                </p>
                <div className="flex gap-3">
                    <button className={`${toneActive === "professional" ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-gray-700 hover:bg-gray-600 color-859BB4"} py-1 px-2 rounded inline-flex items-center gap-2`} onClick={() => setToneActive("professional")}>
                        <span>Professional</span>
                    </button>
                    <button className={`${toneActive === "infomational" ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-gray-700 hover:bg-gray-600 color-859BB4"} py-1 px-2 rounded inline-flex items-center gap-2`} onClick={() => setToneActive("infomational")}>
                        <span>Infomational</span>
                    </button>
                    <button className={`${toneActive === "casual" ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-gray-700 hover:bg-gray-600 color-859BB4"} py-1 px-2 rounded inline-flex items-center gap-2`} onClick={() => setToneActive("casual")}>
                        <span>Casual</span>
                    </button>
                </div>
            </div>
            <div className="p-7 border border-slate-500 rounded-md flex flex-col gap-5">
                <p className="font-semi-bold text-white flex gap-2 items-center">
                    <FontAwesomeIcon icon={faAlignJustify} />
                    Paragraph Length
                </p>
                <div className="flex gap-3">
                    <button className={`${lengthActive === "short" ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-gray-700 hover:bg-gray-600 color-859BB4"} py-1 px-2 rounded inline-flex items-center gap-2`} onClick={() => setLengthActive("short")}>
                        <span>Short</span>
                    </button>
                    <button className={`${lengthActive === "medium" ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-gray-700 hover:bg-gray-600 color-859BB4"} py-1 px-2 rounded inline-flex items-center gap-2`} onClick={() => setLengthActive("medium")}>
                        <span>Medium</span>
                    </button>
                    <button className={`${lengthActive === "long" ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-gray-700 hover:bg-gray-600 color-859BB4"} py-1 px-2 rounded inline-flex items-center gap-2`} onClick={() => setLengthActive("long")}>
                        <span>Long</span>
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <p className="font-semi-bold text-white flex gap-2 items-center">
                    <FontAwesomeIcon icon={faPencil} />
                    Input Command
                </p>
                <textarea id="message" rows="4" className="block p-2.5 w-full bg-inherit text-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write a thank you message for choosing our service. "></textarea>
            </div>
        </div>
    )
}

export default Email