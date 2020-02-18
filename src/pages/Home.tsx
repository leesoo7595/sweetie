import { SweetiePage } from '@/models/common/interfaces/Sweetie'
import debug from 'debug';
import React from 'react';
import {Api} from '@/apis'

import styles from './Home.scss'

const log = debug('Sweetie:Index');

const Home: SweetiePage = (props) => {
    /**
     * 요기가 클라 사이드
     */
    console.log(props);
    return <h1 className={styles.container}>Hello Next</h1>;
};

Home.getInitialProps = async () => {
    const res = await Api.findAll;
    console.log(res.data);
    log('getInitialProps');
    return {
        data: res.data
    };
};

export default Home;