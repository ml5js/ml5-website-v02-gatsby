import * as React from 'react';
import Layout from '../layout/Layout';
import Spacer from '../components/Spacer';
import IframeComponent from '../components/IframeComponent';

const LearnPage = () => {
  return (
    <Layout>
      <IframeComponent />
      <h1>Learn</h1>
      <p>Coming Soon!</p>
      <Spacer />
    </Layout>
  );
};

export const Head = () => <title>ml5.js | Friendly Machine Learning for the Web</title>;

export default LearnPage;
