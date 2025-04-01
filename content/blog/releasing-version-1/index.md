---
templateKey: #blog-post # <-- Uncomment this so that this post can be included in the blog list
title: Releasing Version 1.0 of ml5.js Friendly Machine Learning for the Web
author: ml5.js
description: Friendly Machine Learning for the Web
keywords: 
image: "./images/_thumb.jpg"
externalLink: (link)
date: "2025-04-04" # YYYY-MM-DD or YYYY-MM-DD to YYYY-MM-DD or YYYY-MM-DD, YYYY-MM-DD, YYYY-MM-DD
tags:
  - HandPose
featured: false
---
## Introduction
 
 Last summer 2024, the ml5.js team released 1.0 version of ml5.js, the friendly machine learning library for the web built. Releasing the new version included updates not only the library itself but many aspects of the ml5.js ecosystem including this website to first launch our blog. Below you'll find learn more about the history of ml5.js, the release process and the updates, and learn how to get involved and get involved with what's next!  

## Before 1.0: Launching ml5.js
The ml5.js project launched in 2018 with a mission: to bring a friendly and neighborly approach to machine learning in creative coding. 

The library emerged from a collaboration with Google’s Big Picture Research Group, whose funding and research developing deeplearn.js (which later became TensorFlow.js) made it possible. Drawing inspiration from p5.js and The Processing Foundation, the library was built first and foremost with beginners, students, and artists in mind. The first release featured pre-trained models like MobileNet for image classification and PoseNet for body tracking, alongside a foundational module for training your own neural network model. 

This first release aimed to help students both learn the complete process of training machine learning models as well as engage with useful pre-trained models for playful, experimental, and educational applications of machine learning, all without requiring deep expertise. What began as a project maintained by students, researchers, and faculty at ITP has blossomed into a worldwide collaborative effort.


## Building ml5.js next generation
Over the years, ml5.js expanded its capabilities, introducing new models like Handpose and Facemesh while refining the library to keep pace with updates in TensorFlow.js. The 0.6.0 release in 2020 marked a significant leap, improving documentation, performance, and browser compatibility. 

By 2021, the ml5.js community formalized its commitment for critical and ethical applications of machine learning with a new Code of Conduct and License. As machine learning tools evolved, it became clear that ml5.js needed a major update to remain relevant. 

In 2023, thanks to a collaboration with students and faculty at NYU Shanghai, development began on the “next generation” of ml5.js, with a focus on upgrading to TensorFlow.js 4.2.0, integrating faster and more accurate models,  improving the API for beginners, and enhancing accessibility. 

We’re excited to finally introduce ml5.js 1.0, a milestone release that we hope brings a fresh foundation for creative coding with machine learning.

## Releasing ml5.js 1.0  
Below are highlights of the updates that are included in the ml5.js1.0 release from members of the team from NYU ITP/IMA and NYU Shanghai

### Library Build and Technical Updates
* We created a new Github repository for the 1.0 codebase, called ml5-next-gen
* For package managers, switched from NPM to yarn to better handle TFJS dependencies
* Updated to webpack version 5

### A new website 
* We reduced external dependencies, simplified the code, and reduced technical complexity to
enable contributions from developers with basic web development experience
simplify the future maintenance
    * The main Home page, Learn, Community, and About were built using the Gatsby framework.
    * The model reference pages utilized Docsify to create more manageable and accessible documentation.
    
* We updated our content and documentation for clarity and beginner-friendliness
    * A beginner-friendly Getting Started page with step-by-step instructions and illustrative screenshots.
    * Reference docs included live testing on the pages.
    * Step-by-step, line-by-line code explanation to reduce learning curves.
    * A glossary explained ML/AI terminology that encourages everyone to contirubte


* The new visual design adopts a hands-on creative style to make it more inviting, incorporating illustrations by student artist Xiaozao Wang.


### Accessibility Updates
* Sementantic HTML structure, including descriptive alternative text on images, priotizing screen reader optimization and applying AAA contrast standards across the website
    

### New and Updated Models 
* Upgraded to TensorFlow.js version 4.22.0 with WebGPU backend support from 1.7.0
* Replaced older models with newer, faster MediaPipe and TensorFlow alternatives:
    * BodyPose: Multi-person detection with named keypoints and 3D keypoints with BlazePose. 
    * HandPose: Multiple hand tracking with named keypoints and 3D keypoints
    * FaceMesh: Multi-person facial tracking with named keypoints and 3D keypoints
    * BodySegmentation: Improved segmentation and added selfie segmentation capabilities. 
* Maintained core functionality:
    * Image classification (MobileNet) & Teachable Machine
    * Sound classification


 ### Ethics and Bias
 * We continued to update the Code of Conduct to align with the new features of ml5.js, ensuring responsible use and minimizing potential misuse.
  [Community Statement](https://ml5js.org/about/)
  [Code of Conduct](https://github.com/ml5js/Code-of-Conduct)


## What’s Next & How to Get Involved
Many of the updates for ml5.js 1.0 are ongoing including work on our Code of Conduct, library and model updates, and more opportunities for community on our website. All are welcome to contribute to ml5! 

* Looking for the old version or running into errors with ml5.js prior to 1.0?: Checkout our [FAQ](https://docs.ml5js.org/#/welcome/faq?id=what-happened-to-older-ml5js-releases) and related [Github issue](https://github.com/ml5js/ml5-next-gen/issues/167)
* Want to learn more about ml5.js?
    *Watch this [Presentation from Aidan Nelson and Yu Lee](https://youtu.be/LHhSxtgyuUw) 

Thank you to the ml5.js team and ...for contributing to this blog post. 


## Learn More
- [ml5.js – Medium](https://ml5js.medium.com/)
* Join our discord
