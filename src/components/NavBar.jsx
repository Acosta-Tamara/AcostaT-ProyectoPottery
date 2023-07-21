import { Menu, MenuButton, MenuList, MenuItem, Button, Flex, Box, Spacer } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <Flex>
        <Box p="2" bg="black" color="white">
        Pottery Store
        </Box>

        <Spacer/>

        <Box>
        <Menu>
        
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            PRODUCTOS
         </MenuButton>
         <MenuList>
           <MenuItem>Tazas</MenuItem>
           <MenuItem>Platos</MenuItem>
           <MenuItem>Macetas</MenuItem>
           <MenuItem>Jarras</MenuItem>
           <MenuItem>Cuencos</MenuItem>
        </MenuList>
        </Menu>
        </Box>
        <Spacer/>

        <Box>
          <CartWidget/>
        </Box>

    </Flex>
  )
}

export default NavBar