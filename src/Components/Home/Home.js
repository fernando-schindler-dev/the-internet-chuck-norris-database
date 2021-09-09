import React from 'react';
import { Button } from '@material-ui/core';
import RadioForm from '../Form/RadioForm/RadioForm';
import InputForm from '../Form/InputForm/InputForm';
import CheckboxForm from '../Form/CheckboxForm/CheckboxForm';
import pull from '../../Helper/Fetch/Fetch';
import styles from './Home.module.css';

const Home = () => {
  const useDefaultName = ['Sim', 'Não'];
  const [apiCategories, setApiCategories] = React.useState([]);

  const [defaultName, setDefaultName] = React.useState('Sim');
  const [name, setName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [numberOfJokes, setNumberOfJokes] = React.useState(1);
  const [categories, setCategories] = React.useState([]);
  const [jokes, setJokes] = React.useState([]);

  const pullJokes = async () => {
    let responses = [];
    const fetchs = [];
    for (let i = 0; i < numberOfJokes; i += 1) {
      responses.push(i);
      fetchs.push(
        await pull(
          `http://api.icndb.com/jokes/random?limitTo=[${[...categories]}]`,
        ),
      );
      responses = await Promise.all(fetchs);
    }
    responses.map((result) => result.value.joke);
    setJokes(responses);
  };

  React.useEffect(async () => {
    const jsonCategories = await pull('http://api.icndb.com/categories');
    setApiCategories([...jsonCategories.value]);
  }, []);

  return (
    <section className={styles.container}>
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
        </div>
      )}

      <InputForm
        label="Número de piadas"
        type="number"
        value={numberOfJokes}
        setValue={setNumberOfJokes}
      />

      <div>
        <CheckboxForm
          legend="Selecione as categorias desejadas:"
          apiCategories={apiCategories}
          categories={categories}
          setCategories={setCategories}
        />
      </div>

      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={pullJokes}
      >
        GERAR PIADAS
      </Button>

      <div>
        {jokes.map((joke) => (
          <div key={joke.value.joke}>{joke.value.joke}</div>
        ))}
      </div>
    </section>
  );
};
export default Home;
