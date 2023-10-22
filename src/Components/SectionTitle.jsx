
const SectionTitle = ({ heading, description }) => {
    return (
        <div className="w-10/12 md:w-3/4 mx-auto text-center mb-8 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-semibold mb-3 md:mb-5">{heading}</h1>
            <p className="text-base md:text-lg font-medium">{description}</p>
        </div>
    );
};

export default SectionTitle;