import { Container, Grid, GridItem , Box, Image, List, ListItem, Button, OrderedList, UnorderedList,} from '@chakra-ui/react'
import React from 'react';
import { useHistory } from "react-router-dom";


const Profil = () => {  
    let history = useHistory();
    return(
        <Container mt={4} maxW='2xl'> <Grid templateColumns='repeat(2, 1fr)' gap={2}>
        <GridItem w='100%' h='10'  >
        <Box boxSize='sm'>
  <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
</Box>
        </GridItem>
        <GridItem w='100%' h='10'  >
        <List spacing={3}>
  <ListItem>
    Nama   : Zulfikar Rahman
  </ListItem>
  <ListItem>
    NIM   : 1941720192
  </ListItem>
  <ListItem>
    Kelas   : TI - 3C
  </ListItem>

</List>
<Button
                        colorScheme={'blue'}
                        aria-label='Add to Cart'
                        onClick={() => history.push('/')}>Kembali
                        </Button>
        </GridItem>
      </Grid></Container>
        
)
    
    
}

export default Profil;