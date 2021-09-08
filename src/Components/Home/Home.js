import React from 'react';
import { Button, Checkbox } from '@material-ui/core';
import RadioForm from '../Form/RadioForm/RadioForm';
import InputForm from '../Form/InputForm/InputForm';
import CheckboxForm from '../Form/CheckboxForm/CheckboxForm';
import styles from './Home.module.css';

const Home = () => {
  const [defaultName, setDefaultName] = React.useState('Sim');
  const useDefaultName = ['Sim', 'Não'];

  const [name, setName] = React.useState('');
  const [lastName, setLastName] = React.useState('');

  const [numberOfJokes, setNumberOfJokes] = React.useState(1);

  const [categories, setCategories] = React.useState([]);
  const apiCategories = ['Teste 1', 'Teste 2'];

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

      <Button variant="contained" color="primary" size="large">
        GERAR PIADAS
      </Button>
    </section>
  );
};
export default Home;
