import { Container } from '@mui/material';
import classNames from 'classnames/bind';
import styles from './scss/footer.module.scss';
import Image from 'next/image';
import {
      Clock3,
      Facebook,
      Instagram,
      Linkedin,
      MapPin,
      Smartphone,
      Twitter,
      Youtube,
} from 'lucide-react';
import Link from 'next/link';
const cx = classNames.bind(styles);
const Footer = () => {
      return (
            <footer className={cx('footer')}>
                  <Container
                        className={cx(
                              'grid grid-cols-3 gap-12 max-sm:grid-cols-1 max-sm:gap-y-12',
                        )}
                  >
                        <div className={cx('footer-item')}>
                              <h1>our awards</h1>
                              <p>
                                    London is a megalopolis of people, ideas and
                                    frenetic energy. The capital and largest
                                    city of the United Kingdom.
                              </p>

                              <Image
                                    className={cx('footer-brands')}
                                    src="/awards.png"
                                    alt="brand"
                                    width={246}
                                    height={113}
                              />
                        </div>

                        <div className={cx('footer-item')}>
                              <h1>Contact Info</h1>
                              <p>
                                    <Smartphone className="h-4 w-4 mr-2" />
                                    1-567-124-44227
                              </p>

                              <p>
                                    <MapPin className="h-4 w-4 mr-2" />
                                    184 Main Street East Perl Habour 8007
                              </p>

                              <p>
                                    <Clock3 className="h-4 w-4 mr-2" />
                                    Mon - Sat 8.00 - 18.00 Sunday CLOSED
                              </p>

                              <div className="flex items-center mt-8">
                                    <span className="bg-[#2d5f9a] rounded-[50%] p-2 mx-2">
                                          <Facebook className="h-5 w-5" />
                                    </span>

                                    <span className="bg-[#00c3f3] rounded-[50%] p-2 mx-2">
                                          <Twitter className="h-5 w-5" />
                                    </span>

                                    <span className="bg-[#cc181e] rounded-[50%] p-2 mx-2">
                                          <Youtube className="h-5 w-5" />
                                    </span>

                                    <span className="bg-white text-black rounded-[50%] p-2 mx-2">
                                          <Linkedin className="h-5 w-5" />
                                    </span>

                                    <span className="bg-[#405de6] rounded-[50%] p-2 mx-2">
                                          <Instagram className="h-5 w-5" />
                                    </span>
                              </div>
                        </div>

                        <div className={cx('footer-item')}>
                              <h1>Recent Trips</h1>
                              <div className="grid grid-cols-3 rounded-md gap-2 mt-4">
                                    <Image
                                          className="rounded-lg"
                                          width={120}
                                          height={120}
                                          alt="plane1"
                                          src="/plane-1.jpg"
                                    />
                                    <Image
                                          className="rounded-lg"
                                          width={120}
                                          height={120}
                                          alt="plane1"
                                          src="/plane-2.jpg"
                                    />
                                    <Image
                                          className="rounded-lg"
                                          width={120}
                                          height={120}
                                          alt="plane1"
                                          src="/plane-3.jpg"
                                    />
                                    <Image
                                          className="rounded-lg"
                                          width={120}
                                          height={120}
                                          alt="plane1"
                                          src="/plane-4.jpg"
                                    />
                                    <Image
                                          className="rounded-lg"
                                          width={120}
                                          height={120}
                                          alt="plane1"
                                          src="/plane-5.jpg"
                                    />
                                    <Image
                                          className="rounded-lg"
                                          width={120}
                                          height={120}
                                          alt="plane1"
                                          src="/plane-6.jpg"
                                    />
                              </div>
                        </div>
                  </Container>
                  <div className="h-[0.5px] bg-white w-full my-12"></div>
                  <Container className="flex justify-between items-center max-sm:flex-col-reverse max-sm:gap-y-4">
                        <p className="max-sm:text-center">
                              © Copyright Grand Tour Theme Demo - Theme by
                              ThemeGoods
                        </p>
                        <div className="flex">
                              <Link
                                    className="text-white mr-4 text-sm"
                                    href="/"
                              >
                                    Hone
                              </Link>
                              <Link
                                    className="text-white mx-4 text-sm"
                                    href="/"
                              >
                                    Tours
                              </Link>
                              <Link
                                    className="text-white mx-4 text-sm"
                                    href="/"
                              >
                                    Blog
                              </Link>
                              <Link
                                    className="text-white ml-4 text-sm"
                                    href="/"
                              >
                                    Purchase Theme
                              </Link>
                        </div>
                  </Container>
            </footer>
      );
};

export default Footer;
