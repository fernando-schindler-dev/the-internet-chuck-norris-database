import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  CircularProgress,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import pull from '../../Helper/Fetch/Fetch';
import InputForm from '../Form/InputForm/InputForm';
import styles from './Extras.module.css';

const Extras = () => {
  const [totalOfJokes, setTotalOfJokes] = React.useState(0);
  const [jokeNumber, setJokeNumber] = React.useState(0);
  const [errorJokeNumber, setErrorJokeNumber] = React.useState(false);
  const [output, setOutput] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const pullJokes = async () => {
    setLoading(true);

    const jsonJoke = await pull(`http://api.icndb.com/jokes/${jokeNumber}`);
    setOutput(jsonJoke.value.joke);

    setLoading(false);
  };

  const validateField = () => {
    const validateNumber = jokeNumber < 1 || jokeNumber > totalOfJokes;

    validateNumber ? setErrorJokeNumber(true) : setErrorJokeNumber(false);

    if (!validateNumber) pullJokes();
  };

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
          <Typography>
            Existem cerca de {totalOfJokes} piadas cadastradas na API The
            Internet Chuck Norris Database, sendo elas divididas em duas
            categorias: explícito e nerd. Permitindo filtrar as piadas na hora
            de sua geração de acordo com o que tipo de piada desejar.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon style={{ fontSize: '2.5rem', color: '#fff' }} />
          }
        >
          <Typography className={styles.title}>
            Deseja encontrar alguma piada específica?
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography className={styles.details}>
            <div className={styles.form}>
              {errorJokeNumber && (
                <p className={styles.error}>
                  Por favor, o número desejado não pode ser menor que 1 ou maior
                  que {totalOfJokes}
                </p>
              )}

              <div className={styles.numberOfJokes}>
                <InputForm
                  label="Número da piada desejada"
                  type="number"
                  value={jokeNumber}
                  setValue={setJokeNumber}
                />
              </div>

              <Button
                variant="contained"
                color="default"
                size="large"
                onClick={validateField}
              >
                BUSCAR PIADA
              </Button>
            </div>

            <output className={`${styles.output} anime`}>
              {loading ? (
                <div className={styles.loading}>
                  <CircularProgress color="default" />
                </div>
              ) : (
                output
              )}
            </output>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </section>
  );
};

export default Extras;
