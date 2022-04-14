import {
    Box,
    Flex,
    Button,
    Text,
    IconButton,
    Avatar,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    useColorMode,
    HStack,
    Icon,
    Badge
} from '@chakra-ui/react';

import {
    HamburgerIcon,
    CloseIcon,
    SunIcon,
    MoonIcon
} from '@chakra-ui/icons';

import {
    FiShoppingCart
} from 'react-icons/fi'

import {
    useDispatch,
    useSelector
} from 'react-redux';

import { actFetchCartNumber } from '../../actions/products';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onToggle } = useDisclosure();

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actFetchCartNumber())
    }, [])

    const numberCart = useSelector((state) => state._todoProduct.numberCart)

    return (
        <Box>
            <Flex
                bg={useColorModeValue('navy', 'white')}
                color={useColorModeValue('white', 'aqua')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                <Avatar
                        size={'sm'}
                        src={
                            'https://upload.wikimedia.org/wikipedia/en/d/d7/Restoran_Sederhana_Logo.png'
                        }
                    />
                    <Text
                    ml={2}
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={useColorModeValue('white', 'white')}>
                        <Link to='/profile'> Zulfikar Shop </Link>
                    </Text>
                </Flex>

                <HStack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    alignItems={'center'}
                    spacing={2}>
                    <Link to='/cart'>
                        <Button variant={'ghost'}>
                            <Icon
                                as={FiShoppingCart}
                                w={5}
                                h={5}
                                color={useColorModeValue('gray.800', 'white')}
                                mt={3} />
                            <Badge
                                colorScheme={'blue'}
                                ml={-1}
                                fontSize={'md'}>
                                {numberCart}
                            </Badge>
                        </Button>
                    </Link>
                </HStack>
            </Flex>
        </Box>
    );
}

export default Navbar;