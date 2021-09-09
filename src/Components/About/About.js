import { Card, CardContent } from '@material-ui/core';
import React from 'react';

const About = () => (
  <section className="animeLeft">
    <Card>
      <CardContent
        style={{
          padding: '2rem',
          fontSize: '1.25rem',
          lineHeight: '1.5',
          textAlign: 'justify',
          background: '#f5f5f5',
        }}
      >
        Esse projeto foi desenvolvido por Fernando Schindler, aonde no qual é um
        teste técnico solicitado pela empresa TruckPag. A empresa solicitou a
        construção de uma interface para a API do
        <a href="https://www.icndb.com/" target="_blank">
          {' '}
          icndb.com{' '}
        </a>
        (The Internet Chuck Norris Database), sendo que nesse banco de dados
        estão listadas piadas envolvendo Chuck Norris. A ideia principal do
        teste é criar uma interface utilizando a criatividade, os conhecimentos
        em React e tentar tirar o máximo possível de aproveito da API.
      </CardContent>
    </Card>
  </section>
);
export default About;
