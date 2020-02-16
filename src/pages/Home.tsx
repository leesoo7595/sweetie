import { SweetiePage } from '@/models/common/interfaces/Sweetie'
import debug from 'debug';
import React from 'react';

import styles from './Home.scss'

const log = debug('Sweetie:Index');

const Home: SweetiePage = () => {
    /**
     * 요기가 클라 사이드
     */
    return <h1 className={styles.container}>Hello Next</h1>;
};

Home.getInitialProps = async ({req}) => {
    /**
     * 요기가 서버사이드
     */
    log('getInitialProps');
    return {};
};

export default Home;