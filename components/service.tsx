import { Container } from '@mui/material';
import Heading from './ui/heading';
import ServiceUi from './ui/service-ui';

const dataService = [
      {
            name: 'Handpicked Hotels',
            img: '/map.png',
            description:
                  'Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa',
      },

      {
            name: 'World Class Service',
            img: '/earth.png',
            description:
                  'Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa',
      },

      {
            name: 'Best Price Guarantee',
            img: '/Hot-Air-Balloon.png',
            description:
                  'Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa',
      },
];

const Service = () => {
      return (
            <Container className="mb-20">
                  <Heading
                        title="Why Choose Us"
                        description="Here are reasons you should plan trip with us"
                  />

                  <div className="grid grid-cols-3 max-lg:grid-cols-1 max-lg:gap-y-8 gap-x-8">
                        {dataService.map((data) => (
                              <ServiceUi
                                    key={data.name}
                                    name={data.name}
                                    description={data.description}
                                    img={data.img}
                              />
                        ))}
                  </div>
            </Container>
      );
};

export default Service;
