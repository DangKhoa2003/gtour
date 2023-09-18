const VideoIntro = ({ src }: { src: string }) => {
      return (
            <div className="relative top-0 left-0">
                  <video
                        autoPlay={true}
                        loop
                        src={src}
                        muted
                        className="w-screen bg-fixed h-screen object-cover select-none"
                  ></video>
            </div>
      );
};

export default VideoIntro;
