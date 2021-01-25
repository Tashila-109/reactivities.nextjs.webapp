import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {Header, Icon} from 'semantic-ui-react';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reactivities</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header as='h2'>
        <Icon name='users' />
        <Header.Content>Reactivities</Header.Content>
      </Header>
    </div>
  );
}
