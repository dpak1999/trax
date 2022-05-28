/** @format */

import NextImage from 'next/image';
import {
  Box,
  Divider,
  LinkBox,
  LinkOverlay,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/layout';
import {
  MdFavorite,
  MdHome,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdSearch,
} from 'react-icons/md';
import Link from 'next/link';

const navMenu = [
  {
    name: 'Home',
    icon: MdHome,
    route: '/',
  },
  {
    name: 'Search',
    icon: MdSearch,
    route: '/search',
  },
  {
    name: 'Library',
    icon: MdLibraryMusic,
    route: '/library',
  },
];

const musicMenu = [
  {
    name: 'Create Playlist',
    icon: MdPlaylistAdd,
    route: '/',
  },
  {
    name: 'Favorites',
    icon: MdFavorite,
    route: '/fav',
  },
];
const playList = new Array(30).fill(1).map((_, i) => `Playlist ${i}`);

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="grey"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <Link href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box marginBottom="20px">
          <List spacing={2}>
            {musicMenu.map((music) => (
              <ListItem paddingX="20px" fontSize="16px" key={music.name}>
                <LinkBox>
                  <Link href={music.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={music.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {music.name}
                    </LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider color="gray.700" />
        <Box height="66%" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playList.map((play) => (
              <ListItem paddingX="20px" key={play}>
                <LinkBox>
                  <Link href="/" passHref>
                    <LinkOverlay>{play}</LinkOverlay>
                  </Link>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
