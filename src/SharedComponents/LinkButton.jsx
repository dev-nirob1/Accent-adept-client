import { Link } from "react-router-dom";

const LinkButton = ({name, to}) => {
    return (
        <div className='text-center mt-8'>
            <Link to={`/${to}`}><button className="bg-blue-600 text-white font-semibold text-lg rounded px-6 py-3 hover:bg-blue-700">{name}</button></Link>
        </div>
    );
};

export default LinkButton;