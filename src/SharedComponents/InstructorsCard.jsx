
const InstructorsCard = ({ instructor, }) => {
    const { name, instructorImage, email, classTaken, language } = instructor;


    return (
        <div className="grid lg:grid-cols-2 p-5 lg:p-0 items-center rounded-lg bg-base-100 shadow-xl">
            <figure className="w-full">
                <img className="w-full lg:w-72 h-72 rounded-lg" src={instructorImage} alt="Album" />
            </figure>

            <div className="font-medium text-neutral-600 space-y-2 py-5 lg:py-0 lg:px-5">
                <h2 className="text-2xl"><span className="font-semibold text-neutral-700">Name:</span> {name}</h2>
                <p className="text-lg"><span className="font-semibold text-neutral-700">Email:</span> {email}</p>
                <p className="text-lg"><span className="font-semibold text-neutral-700">Classes Taken:</span> {classTaken}</p>
                <p className="text-base"><span className="font-semibold text-neutral-700">Course Name:</span> {language}</p>
                <div className="card-actions justify-start">
                    
                    <button onClick={() => document.getElementById('my_modal_3').showModal()} className="relative border border-purple-600 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Demo Class</span>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default InstructorsCard;