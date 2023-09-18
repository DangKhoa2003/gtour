interface CardNavProps {
      name: string;
      sales?: number;
      price: number;
      assess: number;
      image: string;
}

import { Star } from 'lucide-react';
const CardNav: React.FC<CardNavProps> = ({
      name,
      sales = null,
      price,
      assess,
      image,
}) => {
      return (
            <div
                  style={{ backgroundImage: `url('${image}')` }}
                  className='ml-4 w-72 h-44 rounded-md bg-cover bg-no-repeat relative top-0 left-0'
            >
                  <h1 className="text-xl text-white absolute bottom-12 left-6 font-bold">
                        {name}
                  </h1>
                  <div className="flex items-center absolute bottom-6 left-6">
                        {assess === 1 ? (
                              <>
                                    <Star className="h-5 w-5 mx-1 text-[#1ec6b6]" />
                                    <Star className="h-5 w-5 mx-1 text-white" />
                                    <Star className="h-5 w-5 mx-1 text-white" />
                                    <Star className="h-5 w-5 mx-1 text-white" />
                                    <Star className="h-5 w-5 mx-1 text-white" />
                              </>
                        ) : (
                              ''
                        )}

                        {assess === 2 ? (
                              <>
                                    <Star className="h-5 w-5 mx-1 text-[#1ec6b6]" />
                                    <Star className="h-5 w-5 mx-1 text-[#1ec6b6]" />
                                    <Star className="h-5 w-5 mx-1 text-white" />
                                    <Star className="h-5 w-5 mx-1 text-white" />
                                    <Star className="h-5 w-5 mx-1 text-white" />
                              </>
                        ) : (
                              ''
                        )}

                        {assess === 3 ? (
                              <>
                                    <Star className="h-5 w-5 mx-1 text-[#1ec6b6]" />
                                    <Star className="h-5 w-5 mx-1 text-[#1ec6b6]" />
                                    <Star className="h-5 w-5 mx-1 text-[#1ec6b6]" />
                                    <Star className="h-5 w-5 mx-1 text-white" />
                                    <Star className="h-5 w-5 mx-1 text-white" />
                              </>
                        ) : (
                              ''
                        )}

                        {assess === 4 ? (
                              <>
                                    <Star className="h-5 w-5 mx-1 text-[#1ec6b6]" />
                                    <Star className="h-5 w-5 mx-1 text-[#1ec6b6]" />
                                    <Star className="h-5 w-5 mx-1 text-[#1ec6b6]" />
                                    <Star className="h-5 w-5 mx-1 text-[#1ec6b6]" />
                                    <Star className="h-5 w-5 mx-1 text-white" />
                              </>
                        ) : (
                              ''
                        )}

                        {assess === 5 ? (
                              <>
                                    <Star className="h-5 w-5 mx-1 text-[#1ec6b6]" />
                                    <Star className="h-5 w-5 mx-1 text-[#1ec6b6]" />
                                    <Star className="h-5 w-5 mx-1 text-[#1ec6b6]" />
                                    <Star className="h-5 w-5 mx-1 text-[#1ec6b6]" />
                                    <Star className="h-5 w-5 mx-1 text-[#1ec6b6]" />
                              </>
                        ) : (
                              ''
                        )}
                  </div>

                  <div className="absolute top-12 left-0 bg-primary px-2 py-1">
                        {sales ? (
                              <span className="line-through text-muted-foreground text-base">
                                    ${sales}
                              </span>
                        ) : (
                              ''
                        )}
                        <span className="text-white font-bold text-lg ml-2">
                              ${price}
                        </span>
                  </div>
            </div>
      );
};

export default CardNav;
