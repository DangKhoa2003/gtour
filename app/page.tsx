import Articles from '@/components/articles';
import Popular from '@/components/popular';
import Service from '@/components/service';
import Trips from '@/components/trips';
import FormSearch from '@/components/ui/form-search';
import VideoIntro from '@/components/ui/video-intro';

export default function Home() {
      return (
            <>
                  <div className="relative top-0 left-0">
                        <VideoIntro src="/sunny.mp4" />
                        <FormSearch />
                  </div>
                  <Popular />
                  <Trips />
                  <Service />
                  <div
                        style={{ backgroundImage: 'url("/banner.jpg")' }}
                        className="h-[60vh] w-full overflow-hidden bg-cover bg-no-repeat bg-center"
                  ></div>
                  <Articles />
            </>
      );
}
