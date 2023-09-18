import Image from 'next/image';

interface ServiceUiProps {
      img: string;
      name: string;
      description: string;
}
const ServiceUi: React.FC<ServiceUiProps> = ({ img, name, description }) => {
      return (
            <div className='flex items-center flex-col text-black'>
                  <Image width={200} height={200} src={img} alt={name} />
                  <h1 className='text-2xl font-bold mt-4'>{name}</h1>
                  <p className='text-center text-sm text-[#777] mt-4 leading-8'>{description}</p>
            </div>
      );
};

export default ServiceUi;
