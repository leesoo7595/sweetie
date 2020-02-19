import {Api} from '@/apis';
import {SweetiePage} from '@/models/common/interfaces/Sweetie'
import debug from 'debug';
import React from 'react';

import styles from './Home.scss'

const log = debug('Sweetie:Index');

interface HomeProps {
  data: string,
}

const Home: SweetiePage<HomeProps> = ({data}) => {
  /**
   * 요기가 클라 사이드
   */
  console.log(data);
  return <h1 className={styles.container}>Hello Next</h1>;
};

Home.getInitialProps = async () => {
  const {data} = await Api.findAll;
  console.log('data', data);
  log('getInitialProps');
  return {
    data
  };
};

export default Home;