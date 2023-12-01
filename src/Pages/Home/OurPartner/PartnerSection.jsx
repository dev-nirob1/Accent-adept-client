import SectionTitle from "../../../SharedComponents/SectionTitle";
import Marquee from "react-fast-marquee";
import ImageContainer from "./ImageContainer";
const PartnerSection = () => {
    return (
        <div className="mb-8 md:my-10 lg:my-16">
            <SectionTitle
                heading='Our Trusted Partners'
                description='Collaborating with industry leaders to deliver exceptional solutions.'
            ></SectionTitle>
            <Marquee
            speed={70}
            gradient={true}
            >
                <ImageContainer></ImageContainer>
            </Marquee>

        </div>
    );
};

export default PartnerSection;