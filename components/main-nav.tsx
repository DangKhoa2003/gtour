'use client';
import { usePathname } from 'next/navigation';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {
      ShoppingBag,
      FacebookIcon,
      Twitter,
      YoutubeIcon,
      InstagramIcon,
      LinkedinIcon,
      ChevronDown,
      Menu,
      X,
} from 'lucide-react';
import CardNav from './ui/card-nav';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
const components: { title: string; href: string; description: string }[] = [
      {
            title: 'Alert Dialog',
            href: '/docs/primitives/alert-dialog',
            description:
                  'A modal dialog that interrupts the user with important content and expects a response.',
      },
      {
            title: 'Hover Card',
            href: '/docs/primitives/hover-card',
            description:
                  'For sighted users to preview content available behind a link.',
      },
      {
            title: 'Progress',
            href: '/docs/primitives/progress',
            description:
                  'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
      },
];

type Anchor = 'top' | 'left' | 'bottom' | 'right';
import styles from './scss/main-nav.module.scss';
const cx = classNames.bind(styles);
const MainNav = () => {
      const pathname = usePathname();
      const [state, setState] = useState({
            top: false,
            left: false,
            bottom: false,
            right: false,
      });
      const routes = [
            {
                  href: `/`,
                  label: 'Home',
                  active: pathname === `/`,
            },
            {
                  href: `/tours`,
                  label: 'Tours',
                  active: pathname === `/tours`,
            },

            {
                  href: `/booking`,
                  label: 'Booking',
                  active: pathname === `/booking`,
            },
            {
                  href: `/destinations`,
                  label: 'Destinations',
                  active: pathname === `/destinations`,
            },
            {
                  href: `/pages`,
                  label: 'Pages',
                  active: pathname === `/pages`,
            },
            {
                  href: `/blog`,
                  label: 'Blog',
                  active: pathname === `/blog`,
            },

            {
                  href: `/shortcodes`,
                  label: 'Shortcodes',
                  active: pathname === `/shortcodes`,
            },

            {
                  href: `/shop`,
                  label: 'Shop',
                  active: pathname === `/shop`,
            },
      ];

      const toggleDrawer =
            (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                  if (
                        event.type === 'keydown' &&
                        ((event as React.KeyboardEvent).key === 'Tab' ||
                              (event as React.KeyboardEvent).key === 'Shift')
                  ) {
                        return;
                  }

                  setState({ ...state, [anchor]: open });
            };
      return (
            <div className={cx('main-nav')}>
                  <nav className="max-md:hidden flex items-center">
                        {routes.map((route) => (
                              <Link
                                    href={route.href}
                                    key={route.label}
                                    className={cx('nav-link')}
                              >
                                    <span className={cx('nav-span')}>
                                          {route.label}
                                          <ChevronDown className="h-4 w-4 ml-1" />
                                    </span>

                                    <div className={cx('subNav-content')}>
                                          <ul className="grid w-[150px] gap-3 p-4 md:grid-cols-1">
                                                {/* List data fake */}
                                                {components.map((component) => (
                                                      <li
                                                            key={
                                                                  component.title
                                                            }
                                                            title={
                                                                  component.title
                                                            }
                                                      >
                                                            <Link
                                                                  href={
                                                                        component.href
                                                                  }
                                                            >
                                                                  {
                                                                        component.title
                                                                  }
                                                            </Link>
                                                      </li>
                                                ))}
                                          </ul>
                                    </div>
                              </Link>
                        ))}
                  </nav>

                  <div>
                        <Button onClick={toggleDrawer('right', true)}>
                              <Menu className="h-6 w-6 text-white" />
                        </Button>

                        <Drawer
                              anchor={'right'}
                              open={state.right}
                              onClose={toggleDrawer('right', false)}
                        >
                              <List className="bg-white text-black overflow-y-auto">
                                    <Button
                                          onClick={toggleDrawer('right', false)}
                                    >
                                          <X className="h-6 w-6 text-[var(--primary)]" />
                                    </Button>
                                    <ListItem>
                                          <ListItemButton>
                                                <div
                                                      className={cx(
                                                            'drawer-button',
                                                      )}
                                                >
                                                      <nav className="flex flex-col">
                                                            {routes.map(
                                                                  (route) => (
                                                                        <Link
                                                                              key={
                                                                                    route.label
                                                                              }
                                                                              href={
                                                                                    route.href
                                                                              }
                                                                              className={`capitalize text-2xl my-2 mx-4 flex font-semibold whitespace-nowrap transition-all duration-0 ease-in-out hover:text-primary
                                                                  ${
                                                                        route.active
                                                                              ? 'text-primary'
                                                                              : 'text-muted'
                                                                  }`}
                                                                        >
                                                                              {
                                                                                    route.label
                                                                              }
                                                                        </Link>
                                                                  ),
                                                            )}
                                                      </nav>
                                                      <div className="mt-12">
                                                            <CardNav
                                                                  name="Swiss Alps Trip"
                                                                  price={5200}
                                                                  assess={4}
                                                                  image="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-131729-700x466.jpeg"
                                                            />
                                                      </div>

                                                      <div className="mt-12">
                                                            <CardNav
                                                                  name="5 Lake of Fuji San"
                                                                  sales={4900}
                                                                  price={4200}
                                                                  assess={3}
                                                                  image="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-225630-700x466.jpeg"
                                                            />
                                                      </div>

                                                      <div className="flex items-center justify-around mt-12">
                                                            <Link
                                                                  className={cx(
                                                                        'link-social hover:text-[#ff4a52]',
                                                                  )}
                                                                  href={
                                                                        '/facebook'
                                                                  }
                                                            >
                                                                  <FacebookIcon className="h-6 w-6" />
                                                            </Link>

                                                            <Link
                                                                  className="link-social hover:text-[#ff4a52]"
                                                                  href={
                                                                        '/facebook'
                                                                  }
                                                            >
                                                                  <Twitter className="h-6 w-6" />
                                                            </Link>

                                                            <Link
                                                                  className="link-social hover:text-[#ff4a52]"
                                                                  href={
                                                                        '/facebook'
                                                                  }
                                                            >
                                                                  <YoutubeIcon className="h-6 w-6" />
                                                            </Link>

                                                            <Link
                                                                  className="link-social hover:text-[#ff4a52]"
                                                                  href={
                                                                        '/facebook'
                                                                  }
                                                            >
                                                                  <InstagramIcon className="h-6 w-6" />
                                                            </Link>

                                                            <Link
                                                                  className="link-social hover:text-[#ff4a52]"
                                                                  href={
                                                                        '/facebook'
                                                                  }
                                                            >
                                                                  <LinkedinIcon className="h-6 w-6" />
                                                            </Link>
                                                      </div>
                                                </div>
                                          </ListItemButton>
                                    </ListItem>
                              </List>
                        </Drawer>
                  </div>

                  <Link href={'/cart'} className="relative top-0 left-0">
                        <ShoppingBag className="h-5 w-5 ml-4" />
                        <span className="absolute text-xs rounded-full p-1 px-2 -top-4 -right-4 bg-[#ff4a52] text-white">
                              0
                        </span>
                  </Link>
            </div>
      );
};

export default MainNav;
