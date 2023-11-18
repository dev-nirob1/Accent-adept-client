const Modal = () => {
    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box w-full">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click on ✕ button to close</p>
                <iframe className="w-full" width="560" height="315" src="https://www.youtube.com/embed/qYsHLUAlH_8?si=o69r-06gnUNSaYxn" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </dialog>
    );
};

export default Modal;
