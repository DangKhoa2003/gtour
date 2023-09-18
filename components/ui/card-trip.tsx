interface CardTripProps {
      title: string;
      sales?: number;
      location: string;
      price: number;
      assess: number;
      imageUrl: string;
      time: string;
}

import { Clock10, Star } from 'lucide-react';
const CardTrip = ({ data }: { data: CardTripProps }) => {
      return (
            <div className="border-2 rounded-md pb-8 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-linear cursor-pointer">
                  <div
                        style={{ backgroundImage: `url('${data.imageUrl}')` }}
                        className="col-span-1 h-[237px] rounded-md bg-cover bg-no-repeat relative top-0 left-0"
                  >
                        <div className="absolute top-40 left-0 bg-primary px-2 py-1">
                              {data.sales ? (
                                    <span className="line-through text-muted-foreground text-base">
                                          ${data.sales}
                                    </span>
                              ) : (
                                    ''
                              )}
                              <span className="text-white font-bold text-lg ml-2">
                                    ${data.price}
                              </span>
                        </div>

                        {data.sales && (
                              <span className="absolute -right-4 -top-4 bg-teal-500 text-white rounded-[50%] py-2 px-1">
                                    Sale
                              </span>
                        )}
                  </div>
                  <h1 className="text-2xl text-black font-bold mt-4 px-4">
                        {data.title}
                  </h1>
                  <p className="text-[#999] text-sm mt-2 px-4">
                        {data.location}
                  </p>

                  <div className="mt-6 flex items-center justify-between px-4 ">
                        <div className="flex items-center">
                              {data.assess === 1 ? (
                                    <>
                                          <Star className="h-5 w-5 mx-1 text-[#1ec6b6]" />
                                          <Star className="h-5 w-5 mx-1 text-[#999]" />
                                          <Star className="h-5 w-5 mx-1 text-[#999]" />
                                          <Star className="h-5 w-5 mx-1 text-[#999]" />
                                          <Star className="h-5 w-5 mx-1 text-[#999]" />
                                    </>
                              ) : (
                                    ''
                              )}

                              {data.assess === 2 ? (
                                    <>
                                          <Star className="h-5 w-5 mx-1 text-[#1ec6b6]" />
                                          <Star className="h-5 w-5 mx-1 text-[#1ec6b6]" />
                                          <Star className="h-5 w-5 mx-1 text-[#999]" />
                                          <Star className="h-5 w-5 mx-1 text-[#999]" />
                                          <Star className="h-5 w-5 mx-1 text-[#999]" />
                                    </>
                              ) : (
                                    ''
                              )}

                              {data.assess === 3 ? (
                                    <>
                                          <Star className="h-5 w-5 mx-1 text-[#1ec6b6]" />
                                          <Star className="h-5 w-5 mx-1 text-[#1ec6b6]" />
                                          <Star className="h-5 w-5 mx-1 text-[#1ec6b6]" />
                                          <Star className="h-5 w-5 mx-1 text-[#999]" />
                                          <Star className="h-5 w-5 mx-1 text-[#999]" />
                                    </>
                              ) : (
                                    ''
                              )}

                              {data.assess === 4 ? (
                                    <>
                                          <Star className="h-5 w-5 mx-1 text-[#1ec6b6]" />
                                          <Star className="h-5 w-5 mx-1 text-[#1ec6b6]" />
                                          <Star className="h-5 w-5 mx-1 text-[#1ec6b6]" />
                                          <Star className="h-5 w-5 mx-1 text-[#1ec6b6]" />
                                          <Star className="h-5 w-5 mx-1 text-[#999]" />
                                    </>
                              ) : (
                                    ''
                              )}

                              {data.assess === 5 ? (
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

                              <span className="text-black">
                                    {data.assess} reviews
                              </span>
                        </div>

                        <span className="text-black flex items-center">
                              <Clock10 className="h-4 w-4 mr-1 mt-1" />
                              {data.time}
                        </span>
                  </div>
            </div>
      );
};

export default CardTrip;
