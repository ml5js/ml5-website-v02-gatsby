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
        Welcome to the ml5 project! Developing ml5 is not just about developing machine learning
        software, it is about making machine learning approachable for a broad audience of artists,
        creative coders, and students. The library provides access to machine learning algorithms
        and models in the browser, building on top of TensorFlow.js with no other external
        dependencies.
      </p>
      <p>
        The library is supported by code examples, tutorials, and sample datasets with an emphasis
        on ethical computing. Bias in data, stereotypical harms, and responsible crowdsourcing are
        part of the documentation around data collection and usage. We're building friendly machine
        learning for the web - we're glad you're here!
      </p>
      <p>ml5.js is heavily inspired by Processing and p5.js.</p>
      <p>
        Learn more about the history and origins of the ml5.js project published on{' '}
        <a href="https://ml5js.medium.com/" target="_blank">
          Medium.com/@ml5js
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
      <Spacer />

      <h2>Acknowledgments</h2>
      <p>
        ml5.js is supported by the time and dedication of open source developers from all over the
        world. We are artists, designers, technologists, researchers, educators, students,
        scientists, developers, parents, children, and everything in-between.
      </p>
      <p>
        Funding and support is generously provided by a Google Education grant at NYU's ITP/IMA
        program. Many thanks to BrowserStack for providing testing support.
      </p>
      <p>
        Website designed with ❤ by Milan Gary, Nicole Lloyd, and Arnab Chakravarty. Developed using
        React/Gatsby.js and Netlify by Wenqi Li, Joey Lee, and Dan Shiffman. Shout out to the
        OpenMoji Project for glyphs.
      </p>
      <Spacer />
    </Layout>
  );
};

export const Head = () => <title>ml5.js | Friendly Machine Learning for the Web</title>;

export default AboutPage;
