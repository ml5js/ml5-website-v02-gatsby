---
templateKey: blog-post # <-- Uncomment this so that this post can be included in the blog list
title: BodySegmentation Model Card
author: ml5.js
description: Friendly Machine Learning for the Web
keywords: bias, model card, BodySegmentation
image: "./images/_thumb.jpg"
externalLink: (link)
date: "2025-03-14" # YYYY-MM-DD or YYYY-MM-DD to YYYY-MM-DD or YYYY-MM-DD, YYYY-MM-DD, YYYY-MM-DD
tags:
  - BodySegmentation
featured: true
---
The ml5.js BodySegmentation provides two models, **SelfieSegmentation** and **BodyPix**: 

______
## SelfieSegmentation

**MediaPipe Selfie Segmentation [Model Card](https://storage.googleapis.com/mediapipe-assets/Model%20Card%20MediaPipe%20Selfie%20Segmentation.pdf)**
- Date created: **2021**
- Size: **Not stated** 
- How the data was collected: “This model was trained and evaluated on images, including consented images of people using a mobile AR application captured with smartphone cameras in various “in-the-wild” conditions.” 
- Bias:
    * Categories of evaluation:
        * 17 demographical subregions
        * 6 skin tones
        * Male / Female (gender)
    * Evalutation results:
        * Subregions: Difference in confidence between average and worst performing regions of 1.11% for the general model, and 1.28% for the landscape model, lower than the criteria.
        * Gender: Differences in confidence are 1.6% for the general model and 0.6% for the landscape model.
        * Skin tone: Difference in confidence between worst and best performing

____
## BodyPix
This [short article](https://medium.com/tensorflow/introducing-bodypix-real-time-person-segmentation-in-the-browser-with-tensorflow-js-f1948126c2a0) is the only information on BodyPix that we have found. 

____

#### Please submit any feedback/information you belive would be useful regarding this model [here](https://forms.gle/BPG44g3cJywSKjde6).