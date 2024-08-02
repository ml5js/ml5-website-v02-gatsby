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
        Welcome to the ml5.js project! ml5.js is an open source library with a goal of making
        machine learning approachable for a broad audience of artists, creative coders, and
        students. Drawing inspiration from{' '}
        <a href="https://processing.org" target="_blank">
          Processing
        </a>{' '}
        and{' '}
        <a href="https://p5js.org" target="_blank">
          p5.js
        </a>
        , ml5.js aims to bridge the gap between the technical complexity of machine learning and the
        creativity of beginners and artists. The library provides access to machine learning
        algorithms and models in the browser, building on top of TensorFlow.js.
      </p>
      <p>
        The project began as a collaborative effort at{' '}
        <a href="https://tisch.nyu.edu/itp" target="_blank">
          NYU's ITP program
        </a>
        , involving contributions from students, researchers, faculty, and alumni. Inspired by the
        p5.js project's focus on making coding accessible and inclusive, ml5.js aims to expand this
        mission to the domain of machine learning. Initial work on the project was supported by a{' '}
        <a
          href="https://www.nyu.edu/about/news-publications/news/2018/january/itp-professor-daniel-shiffman-granted-google-faculty-research-aw.html"
          target="_blank"
        >
          Google Research Award
        </a>
        , which helped to formalize the relationship between TensorFlow.js and ml5.js.
      </p>
      <p>
        A key feature of ml5.js is its ability to run pretrained models for interaction. These
        models can classify images, identify body poses, recognize facial landmarks, hand positions,
        and more. You can use these models as they are, or as a starting point for further learning
        along with ml5.js's neural network module which enables training your own models.
      </p>
      <p>
        The ml5.js library comes with code examples and educational materials with a goal of
        emphasizing ethical computing and opening the door for discussion on bias in data and
        machine learning. We're dedicated to building user-friendly machine learning for the web,
        and we're glad you're here!
      </p>
      <p>
        ml5.js is heavily inspired by the work of{' '}
        <a href="https://processingfoundation.org/" target="_blank">
          The Processing Foundation
        </a>
        . Learn more about the history and origins of the ml5.js project in the{' '}
        <a
          href="https://itp.nyu.edu/adjacent/issue-3/ml5-friendly-open-source-machine-learning-library-for-the-web/"
          target="_blank"
        >
          ITP Adjacent article
        </a>{' '}
        and on{' '}
        <a href="https://ml5js.medium.com/" target="_blank">
          medium.com/@ml5js
        </a>
        .
      </p>

      <Spacer />

      <h2>Community Statement</h2>
      <p>
        ml5.js is a community interested in exploring and empowering the creative and ethical
        application of machine learning. This Code of Conduct is intended to foster a community that
        is open to anyone interested in joining that exploration.
      </p>
      <p>
        We are a community of, and in solidarity with, people from every gender identity and
        expression, sexual orientation, race, ethnicity, size, ability, class, religion, culture,
        age, skill level, occupation, and background. We acknowledge that not everyone has the time,
        financial means, or capacity to actively participate, but we recognize and encourage
        involvement of all kinds. We facilitate and foster access and empowerment. We are all
        learners.
      </p>
      <p>
        We accept the claim that technology is a reflection of society, its histories, and its
        politics. We reject the claim that any technology is neutral and acknowledge that every
        technology has the potential to do as much harm as good. We acknowledge that when
        technologies cause harm, the harm disproportionately affects Black/Indigenous, People of
        Color (BIPOC) queer, trans, disabled, femme, low-income, survivors, and all other
        marginalized bodies and communities. With this understanding, we work to intentionally
        engage these groups when hosting, participating in, or developing events (e.g. workshops or
        meetings), materials (e.g. courses, syllabi, resources), and software (e.g. the ml5.js
        library, examples, and related and supporting code).
      </p>
      <p>
        As part of the ml5.js Code of Conduct, we pledge to design, build, and use ml5.js in a way
        that centers the aforementioned marginalized bodies and communities first, striving to
        always confront our biases, privileges, and ignorances for our own good and society at
        large.
      </p>
      <h6>In practice:</h6>
      <ul>
        <li>
          We welcome newcomers and prioritize the education of others. We do not assume knowledge or
          imply there are things that somebody should know. We strive to approach all tasks with the
          enthusiasm of a newcomer because we believe that newcomers are just as valuable in this
          effort as experts.
        </li>
        <li>
          We consistently make the effort to actively recognize and validate multiple types of
          contributions.
        </li>
        <li>We work to offer help and guidance when we are able to do so.</li>
      </ul>
      <h6>In times of conflict:</h6>
      <ul>
        <li>We listen.</li>
        <li>We clearly communicate while acknowledging others’ feelings.</li>
        <li>We admit when we're wrong, apologize, and accept responsibility for our actions.</li>
        <li>We are continuously seeking to improve ourselves and the community.</li>
        <li>We keep the community respectful and open.</li>
        <li>We make everyone feel heard.</li>
        <li>We are mindful and kind in our interactions.</li>
      </ul>
      <p>
        <a href="https://github.com/ml5js/Code-of-Conduct" target="_blank">
          Link to the full ml5 code of conduct
        </a>
      </p>
      <p>
        <a href="https://medium.com/ml5js/a-new-code-of-conduct-and-license-for-ml5-js-6b0e4c109b76" target="_blank">
          Read more about the development of the ml5 code of conduct and software license
        </a>
      </p>
      <Spacer />

      <h2>Acknowledgments</h2>
      <p>
        <p>
          ml5.js is supported by the time and dedication of open source developers from all over the
          world. We are artists, designers, technologists, researchers, educators, students,
          scientists, developers, parents, children, and everything in-between. We are proud of our {' '}
          <a href="https://github.com/ml5js/ml5-next-gen?tab=readme-ov-file#contributors-" target="_blank">
            growing list of contributors
          </a>
          .
        </p>
      </p>
      <p>
        The design and development of ml5.js is currently organized via a joint collaboration
        between ITP/IMA at Tisch School of the Arts and the IMA program at NYU Shanghai. Development
        is supported in part by a grant by the Shanghai Frontiers Science Center of Artificial
        Intelligence and Deep Learning.
      </p>
      <p>
        Initial funding for this project was provided by a <a href="https://www.nyu.edu/about/news-publications/news/2018/january/itp-professor-daniel-shiffman-granted-google-faculty-research-aw.html" target="_blank">2018 Google Research Award grant at ITP/IMAprogram</a>.
      </p>
      <p>
        Website design and development is by J.H. Moon, Quinn Fangqing He, Alan Ren, Apoorva Avadhana, Jo Heun Lee, Miaoye Que, Myrah Sarwar, Ozioma Chukwukeme, and Pacey Xiaozao Wang, and supported by Gottfried Haider, Peter Ziyuan Lin, and Dan Shiffman.
      </p>

      {/* <p>[SEE ALL CONTRIBUTORS ETC FOR MORE...]</p> */}

      <p>
        The website is based on <a href="https://archive.ml5js.org/#/" target="_blank">the original ml5.js website</a> which was designed with ❤ by Milan Gary, Nicole Lloyd, and Arnab Chakravarty and developed by Wenqi Li, Joey Lee, and Dan Shiffman.
      </p>
      <Spacer />
    </Layout>
  );
};

export { Head } from '../components/Head';


export default AboutPage;
