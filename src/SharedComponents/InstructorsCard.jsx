
const InstructorsCard = ({ instructor, }) => {
    const { name, instructorImage, email, classTaken, className, } = instructor;


    return (
        <div className="grid grid-cols-2 items-center rounded-lg bg-base-100 shadow-xl">
            <figure>
                <img className="w-72 h-64 rounded-s-lg" src={instructorImage} alt="Album" />
            </figure>

            <div className="font-medium text-neutral-600 space-y-2">
                <h2 className="text-2xl"><span className="font-semibold text-neutral-700">Name:</span> {name}</h2>
                <p className="text-lg"><span className="font-semibold text-neutral-700">Email:</span> {email}</p>
                <p className="text-lg"><span className="font-semibold text-neutral-700">Classes Taken:</span> {classTaken}</p>
                <p className="text-base"><span className="font-semibold text-neutral-700">Name Of Class:</span> {className}</p>
                <div className="card-actions justify-start">
                    <button className="bg-blue-600 px-5 py-3 text-white rounded font-semibold text-base mt-5" onClick={() => document.getElementById('my_modal_3').showModal()}>Demo Class</button>
                </div>
            </div>

        </div>
    );
};

export default InstructorsCard;