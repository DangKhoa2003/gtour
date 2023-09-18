interface HeadingProps {
      title: string;
      description: string;
}
const Heading: React.FC<HeadingProps> = ({ title, description }) => {
      return (
            <>
                  <h1 className="text-3xl font-bold text-center mt-12 text-black">
                        {title}
                  </h1>
                  <p className="text-lg text-center mb-12 mt-2 text-[#999999]">{description}</p>
            </>
      );
};

export default Heading;
