import React from 'react';
import { Button, Card, CardContent, CircularProgress } from '@material-ui/core';
import RadioForm from '../Form/RadioForm/RadioForm';
import InputForm from '../Form/InputForm/InputForm';
import CheckboxForm from '../Form/CheckboxForm/CheckboxForm';
import pull from '../../Helper/Fetch/Fetch';
import styles from './Home.module.css';

const Home = () => {
  const useDefaultName = ['Sim', 'Não'];
  const [apiCategories, setApiCategories] = React.useState([]);
  const [totalOfJokes, setTotalOfJokes] = React.useState(1);

  const [defaultName, setDefaultName] = React.useState('Sim');
  const [name, setName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [errorFullName, setErrorFullName] = React.useState(false);
  const [numberOfJokes, setNumberOfJokes] = React.useState(1);
  const [errorNumberOfJokes, setErrorNumberOfJokes] = React.useState(false);
  const [categories, setCategories] = React.useState([]);
  const [errorCategories, setErrorCategories] = React.useState(false);
  const [jokes, setJokes] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const pullJokes = async () => {
    setLoading(true);

    const fullName = `?firstName=${name}&lastName=${lastName}`;

    let responses = [];
    const fetchs = [];
    for (let i = 0; i < numberOfJokes; i += 1) {
      responses.push(i);
      fetchs.push(
        await pull(
          `http://api.icndb.com/jokes/random?escape=javascript?limitTo=[${[
            ...categories,
          ]}]${defaultName === 'Não' ? fullName : ''}`,
        ),
      );
      responses = await Promise.all(fetchs);
    }
    responses.map((result) => result.value.joke);
    setJokes(responses);

    setLoading(false);
  };

  const validateFields = () => {
    const validateDefaultName = defaultName === 'Não';
    const validateFullName = name.length < 3 || lastName.length < 3;
    const validateNumber = numberOfJokes < 1 || numberOfJokes > totalOfJokes;
    const validateCategories = !categories.length;

    if (validateDefaultName)
      validateFullName ? setErrorFullName(true) : setErrorFullName(false);

    validateNumber ? setErrorNumberOfJokes(true) : setErrorNumberOfJokes(false);

    validateCategories ? setErrorCategories(true) : setErrorCategories(false);

    if (!validateDefaultName) {
      if (!validateNumber && !validateCategories) pullJokes();
    } else if (validateDefaultName) {
      if (!validateFullName && !validateNumber && !validateCategories)
        pullJokes();
    }
  };

  React.useEffect(async () => {
    const jsonCategories = await pull('http://api.icndb.com/categories');
    setApiCategories([...jsonCategories.value]);

    const jsonTotalOfJokes = await pull('http://api.icndb.com/jokes/count');
    setTotalOfJokes(jsonTotalOfJokes.value);
  }, []);

  return (
    <section className={`${styles.container} animeLeft`}>
      <div className={styles.form}>
        <RadioForm
          legend="Usar Chuck Norris como nome padrão?"
          values={useDefaultName}
          radio={defaultName}
          setRadio={setDefaultName}
        ></RadioForm>

        {defaultName === 'Não' && (
          <div>
            <p className={styles.label}>
              Então, por favor, digite o nome completo desejado:
            </p>
            <div className={styles.fullName}>
              <InputForm
                label="Nome"
                type="text"
                value={name}
                setValue={setName}
              />
              <InputForm
                label="Sobrenome"
                type="text"
                value={lastName}
                setValue={setLastName}
              />
            </div>
            {errorFullName && (
              <p className={styles.error}>
                Por favor, digite mais de 3 caracteres em seu nome e sobrenome
              </p>
            )}
          </div>
        )}

        <div className={styles.numberOfJokes}>
          <InputForm
            label="Número de piadas"
            type="number"
            value={numberOfJokes}
            setValue={setNumberOfJokes}
          />
          {errorNumberOfJokes && (
            <p className={styles.error}>
              Por favor, o número de piadas não pode ser menor que 1 ou maior
              que {totalOfJokes}
            </p>
          )}
        </div>

        <div>
          <CheckboxForm
            legend="Selecione as categorias desejadas:"
            apiCategories={apiCategories}
            categories={categories}
            setCategories={setCategories}
          />
          {errorCategories && (
            <p className={styles.error}>
              Por favor, selecione pelo menos uma categoria
            </p>
          )}
        </div>

        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={validateFields}
        >
          GERAR PIADAS
        </Button>
      </div>

      <Card className={styles.jokes}>
        <CardContent
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
            padding: '2rem',
            background: '#f5f5f5',
          }}
        >
          {loading ? (
            <CircularProgress style={{ margin: '0 auto' }} />
          ) : (
            jokes.map((joke) => (
              <div className={`${styles.joke} anime`} key={joke.value.joke}>
                {joke.value.joke}
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </section>
  );
};
export default Home;
