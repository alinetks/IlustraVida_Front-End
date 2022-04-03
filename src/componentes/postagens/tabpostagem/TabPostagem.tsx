import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';

 
function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue); 
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" className='tab-exib'>
          <Box display="flex" flexWrap="wrap" justifyContent="center"> 
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2" className='tab-exib'>
          <Typography variant="h5" id="h5" gutterBottom color="textPrimary" component="h5" align="center" className="h5">Sobre-nós</Typography>
          <Typography variant="body1" className="body1" gutterBottom align="justify">Olá! Esse é o blog pessoal da Queen, onde relembramos as grandes lições de vida que as animações trouxeram para a nossa história. 
                                                                    Ilustrando a vida através de histórias e desenhos inspiradores e encantadores. 
                                                                    A Queen é uma jovem ilustradora e otimista, que foi profundamente tocada por histórias de heróis e heróinas como a Mulan, que 
                                                                    com sua coragem e senso de dever, mudou para sempre a forma como sua nação veria as mulheres. 
                                                                    Essa história, é apenas uma história, mas que inspirou-a profundamente a tornar realidade. </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;