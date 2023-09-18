import { Container } from '@mui/material';
import Heading from './ui/heading';
import CardTrip from './ui/card-trip';

const trips = [
      {
            title: 'French Autumn',
            imageUrl: '/trip1.jpeg',
            location: 'City Tours, Urban',
            assess: 4,
            price: 5000,
            time: '5 days',
      },

      {
            title: 'Grand Switzerland',
            imageUrl: '/trip2.jpeg',
            location: 'Shopping, Mountain, Snow & Ice',
            assess: 4,
            price: 6000,
            time: '6 days',
      },

      {
            title: 'Discover Japan',
            imageUrl: '/trip3.jpeg',
            location: 'City Tours, Iconic',
            assess: 4,
            price: 2500,
            time: '5 days',
            sales: 3000,
      },
];

const Trips = () => {
      return (
            <Container className="mb-20">
                  <Heading
                        title="Best Value Trips"
                        description="Best offers trips from us"
                  />

                  <div className="grid grid-cols-3 max-lg:grid-cols-1 max-lg:gap-y-8 gap-x-8">
                        {trips.map((data) => (
                              <CardTrip data={data} key={data.title} />
                        ))}
                  </div>
            </Container>
      );
};

export default Trips;
