import Head from 'next/head';
import {Header, Icon} from 'semantic-ui-react';

export default function Home() {
  return (
    <div>
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
