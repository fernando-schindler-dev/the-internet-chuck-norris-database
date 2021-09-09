import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import pull from '../../Helper/Fetch/Fetch';
import styles from './Extras.module.css';

const Extras = () => {
  const [totalOfJokes, setTotalOfJokes] = React.useState(0);

  React.useEffect(async () => {
    const jsonTotalOfJokes = await pull('http://api.icndb.com/jokes/count');
    setTotalOfJokes(jsonTotalOfJokes.value);
  }, []);

  return (
    <section className={`${styles.container} animeLeft`}>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon style={{ fontSize: '2.5rem', color: '#fff' }} />
          }
        >
          <Typography className={styles.title}>
            Quantas piadas existem no total na API The Internet Chuck Norris
            Database?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.output}>
            Existem cerca de {totalOfJokes} piadas cadastradas na API The
            Internet Chuck Norris Database, sendo elas divididas em duas
            categorias: explícito e nerd. Permitindo filtrar as piadas na hora
            de sua geração de acordo com o que tipo de piada desejar.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </section>
  );
};

export default Extras;
