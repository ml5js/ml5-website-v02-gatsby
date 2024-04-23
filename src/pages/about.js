import * as React from 'react';
import Layout from '../layout/Layout';
import Spacer from '../components/Spacer';
import IframeComponent from '../components/IframeComponent';

const AboutPage = () => {
  return (
    <Layout>
      <IframeComponent />
      <h1>About</h1>
      <h2>Friendly machine learning for the web!</h2>
      <p>
        Welcome to the ml5.js project, a friendly JavaScript library with a goal of making machine
        learning tools approachable for a wide audience of artists, students, and creative coders.
        Built on top of TensorFlow.js with no other external dependencies, the library provides
        access to machine learning algorithms and models in the browser. We hope to inspire creative
        experimentation and provoke discussions about data, training, and algorithmic bias and
        ethics.
      </p>
      <p>
        The library was first released in 2018 and its community has grown organically throughout
        its first five years of development. The origins of the project are detailed in this{' '}
        <a href="https://medium.com/ml5js/ml5-friendly-open-source-machine-learning-library-for-the-web-e802b5da3b2">
          article originally published as part of ITP's Adjacent journal
        </a>
        .
      </p>
      <p>ml5.js is heavily inspired by Processing and p5.js.</p>
      <Spacer />

      <h2>Community Statement</h2>

      <p>
        In 2021, ml5.js introduced a{' '}
        <a href="https://github.com/ml5js/Code-of-Conduct">new and improved Code of Conduct</a> and{' '}
        <a href="https://github.com/ml5js/Code-of-Conduct/blob/main/LICENSE.md">
          our very own software license
        </a>
        . These are part of our ongoing work to make machine learning for the web friendlier. Read
        more in our blog post{' '}
        <a href="https://medium.com/ml5js/a-new-code-of-conduct-and-license-for-ml5-js-6b0e4c109b76">
          A New Code of Conduct and License for ml5.js
        </a>
        .
      </p>
      <Spacer />

      <h2>Acknowledgments</h2>
      <p>
        ml5.js welcomes the contributions of open source developers from all over the world. We are
        artists, designers, technologists, researchers, educators, students, scientists, developers,
        parents, children, and everything in-between.
      </p>
      <p>
        Funding and support for ml5.js was originally seeded by Google’s Big Picture Research Group
        as a collaboration with TensorFlow.js team.
      </p>
      <p>[Note about support and collaboration with Processing Foundation.]</p>
      <p>[Note about support from NYU ITP and NYU IMA Shanghai.]</p>
      <p>[ADDITIONAL CURRENT CREDITS AND INFO HERE]</p>
      <p>
        The original 2019 ml5.js website was designed with ❤ by Milan Gary, Nicole Lloyd, and Arnab
        Chakravarty and developed with React/Gatsby.js and Netlify by Wenqi Li, Joey Lee, and Dan
        Shiffman.
      </p>

      <Spacer />
    </Layout>
  );
};

export const Head = () => <title>ml5.js | Friendly Machine Learning for the Web</title>;

export default AboutPage;
