// import Modal from "../Pages/Modal/Modal";

const InstructorsCard = ({ instructor, }) => {
    const { name, image, email, classesTaken, languagesTaught, } = instructor;


    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="text-lg">{email}</p>
                <p className="text-lg">Classes Taken: {classesTaken}</p>
                <p className="text-base">Name Of Class: {languagesTaught}</p>
                <div className="card-actions justify-end">
                    <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Demo Class</button>
                </div>
            </div>

        </div>
    );
};

export default InstructorsCard;