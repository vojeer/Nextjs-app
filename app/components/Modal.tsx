import dynamic from "next/dynamic";
interface Modalprops {
    modalOpen: boolean,
    setModalOpen: (value: boolean) => boolean | void,
    children: React.ReactNode
}
const Modal: React.FC<Modalprops> = ({modalOpen,setModalOpen, children }) => {
    return (
        <div>
            <dialog id="my_modal_3" className= {`modal ${modalOpen ? 'modal-open': ''}`}>
               <div>
               <div className="modal-box">
                    <button onClick={() => setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    {children}
                </div>
               </div>
            </dialog>

        </div>
    )
};
export default dynamic (() => Promise.resolve(Modal), {ssr: false})