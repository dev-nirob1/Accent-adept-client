import bbcImage from './../../../assets/bbc.png'
import dellImage from './../../../assets/dell.09332c44.png'
import hp from './../../../assets/download.png'
import ibmImage from './../../../assets/ibm.bcec6b9a.png'
import lucasfilmImage from './../../../assets/lucasfilm.ef28c5a6.png'
import micorsoftImage from './../../../assets/microsoft.4a9a93f0.png'
import mitImage from './../../../assets/mit.1af911d7.png'
import nasaImage from './../../../assets/nasa.3bf5af29.png'
import penUImage from './../../../assets/pennsylvania.8c9f4108.png'
import usArmyImage from './../../../assets/usarmypng.png'

const ImageContainer = () => {

    return (
        <div className="flex gap-10 md:gap-24 items-center p-5">
            <img className='h-[50px] md:h-[90px]' src={bbcImage} alt="image" />
            <img className='h-[50px] md:h-[90px]' src={dellImage} alt="image" />
            <img className='h-[50px] md:h-[90px]' src={hp} alt="image" />
            <img className='h-[50px] md:h-[90px]' src={ibmImage} alt="image" />
            <img className='h-[50px] md:h-[90px]' src={lucasfilmImage} alt="image" />
            <img className='h-[50px] md:h-[90px]' src={micorsoftImage} alt="image" />
            <img className='h-[50px] md:h-[90px]' src={nasaImage} alt="image" />
            <img className='h-[50px] md:h-[90px]' src={mitImage} alt="image" />
            <img className='h-[50px] md:h-[90px]' src={penUImage} alt="image" />
            <img className='h-[50px] md:h-[90px]' src={usArmyImage} alt="image" />
        </div>
    );
};

export default ImageContainer;