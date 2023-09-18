import { Button } from '@mui/material';
import { ChevronRight } from 'lucide-react';

interface PostCardProps {
      title: string;
      imageUrl: string;
      description: string;
      day: string;
}

const PostCard: React.FC<PostCardProps> = ({
      title,
      imageUrl,
      description,
      day,
}) => {
      return (
            <div className="border-2 text-black rounded-md pb-8 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-linear cursor-pointer">
                  <div
                        style={{ backgroundImage: `url('${imageUrl}')` }}
                        className="col-span-1 h-[237px] rounded-md bg-cover bg-no-repeat relative top-0 left-0"
                  ></div>
                  <h2 className="text-lg text-black font-semibold mt-4 px-4">
                        {day}
                  </h2>
                  <h1 className="text-2xl text-black font-bold mt-4 px-4">
                        {title}
                  </h1>

                  <p className=" text-sm text-[#777] mt-6 px-4 leading-8">
                        {description}
                  </p>

                  <Button className="mt-12 ml-4 text-[#777] hover:text-black capitalize">
                        Read more
                        <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
            </div>
      );
};

export default PostCard;
