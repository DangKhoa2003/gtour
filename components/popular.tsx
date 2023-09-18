import { Container } from '@mui/material';
import CardPlace from './ui/card-place';
import Heading from './ui/heading';

const places = [
      {
            title: 'Tokyo',
            imgUrl: '/tokyo.jpg',
      },

      {
            title: 'Seoul',
            imgUrl: '/seoul.jpg',
      },

      {
            title: 'Paris',
            imgUrl: '/paris.jpg',
      },

      {
            title: 'London',
            imgUrl: '/london.jpg',
      },
];

const Popular = () => {
      return (
            <Container className='mb-20'>
                  <Heading
                        title="Popular Destinations"
                        description="World's best tourist destinations"
                  />

                  <div className="grid grid-cols-4 max-xl:grid-cols-2 max-xl:gap-y-8 max-lg:grid-cols-1 max-lg:gap-y-8 gap-x-8">
                        {places.map((place) => (
                              <CardPlace
                                    key={place.title}
                                    title={place.title}
                                    imgUrl={place.imgUrl}
                              />
                        ))}
                  </div>
            </Container>
      );
};

export default Popular;
