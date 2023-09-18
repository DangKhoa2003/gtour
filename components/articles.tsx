import { Container } from '@mui/material';
import Heading from './ui/heading';
import PostCard from './ui/post-card';

const articlesData = [
      {
            title: 'Memorial Day to Someone Told Me to Travel',
            imageUrl: '/post-1.jpg',
            description:
                  'Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...',
            day: 'December 10, 2016',
      },

      {
            title: '7 Tips For Nomads On A Budget Trips',
            imageUrl: '/post-2.jpeg',
            description:
                  'Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...',
            day: 'December 10, 2016',
      },

      {
            title: 'Taking A Travel Blog Victory Lap',
            imageUrl: '/post-3.jpg',
            description:
                  'Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...',
            day: 'December 10, 2016',
      },
];

const Articles = () => {
      return (
            <Container className="mb-20">
                  <Heading
                        title="Articles & Tips"
                        description="Explore some of the best tips from around the world"
                  />

                  <div className="grid grid-cols-3 max-lg:grid-cols-1 max-lg:gap-y-8 gap-x-8">
                        {articlesData?.map((article) => (
                              <PostCard
                                    key={article.title}
                                    title={article.title}
                                    description={article.description}
                                    day={article.day}
                                    imageUrl={article.imageUrl}
                              />
                        ))}
                  </div>
            </Container>
      );
};

export default Articles;
