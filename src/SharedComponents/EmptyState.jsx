import { FaRegSadTear } from 'react-icons/fa';

const EmptyState = () => {
    return (
        <div className="h-[30vh] w-full bg-gray-50 flex flex-col items-center justify-center text-gray-500">
            <FaRegSadTear className="text-4xl md:text-6xl mb-2 text-orange-500" />
            <h3 className="text-lg font-semibold">No Data Found</h3>
            <p className="text-base my-2">Sorry, but it seems there is no data to display.</p>
        
        </div>
    );
};

export default EmptyState;
