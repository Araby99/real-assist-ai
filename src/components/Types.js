import { faEnvelope, faMessage, faPhone, faThumbtack } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Empty from "./Empty"
import Email from "./Email"

const Types = ({ typeActive, setTypeActive, toneActive, setToneActive, lengthActive, setLengthActive }) => {
    return (
        <>
            <div className="flex m-auto w-full">
                <button className={`px-1 flex justify-center text-sm items-center gap-1 text-white py-2 border-b border-white w-full ${typeActive === "note" ? "opacity-100" : "opacity-40"}`} onClick={() => setTypeActive("note")}>
                    <FontAwesomeIcon icon={faThumbtack} />
                    Create Note
                </button>
                <button className={`px-1 flex justify-center text-sm items-center gap-1 text-white py-2 border-b border-white w-full ${typeActive === "email" ? "opacity-100" : "opacity-40"}`} onClick={() => setTypeActive("email")}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    Send Email
                </button>
                <button className={`px-1 flex justify-center text-sm items-center gap-1 text-white py-2 border-b border-white w-full ${typeActive === "text" ? "opacity-100" : "opacity-40"}`} onClick={() => setTypeActive("text")}>
                    <FontAwesomeIcon icon={faMessage} />
                    Text
                </button>
                <button className={`px-1 flex justify-center text-sm items-center gap-1 text-white py-2 border-b border-white w-full ${typeActive === "call" ? "opacity-100" : "opacity-40"}`} onClick={() => setTypeActive("call")}>
                    <FontAwesomeIcon icon={faPhone} />
                    Log Call
                </button>
            </div>
            {
                {
                    'note': <Empty />,
                    'email': <Email toneActive={toneActive} setToneActive={setToneActive} lengthActive={lengthActive} setLengthActive={setLengthActive} />,
                    'text': <Empty />,
                    'call': <Empty />
                }[typeActive]
            }
        </>
    )
}

export default Types