import * as React from "react";
import Layout from "../layout/Layout";
import Spacer from "../components/Spacer";
import IframeComponent from "../components/IframeComponent";

const LearnPage = () => {
  return (
    <Layout>
      <IframeComponent />
      <h1>Learn</h1>
      <p>
        Coming Soon!
      </p>
      <Spacer />
    </Layout>
  )
}

export { Head } from '../components/Head';
export default LearnPage