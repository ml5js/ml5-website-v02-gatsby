---
templateKey: blog-post # <-- Uncomment this so that this post can be included in the blog list
title: Facemesh Model Card
author: ml5.js
description: Friendly Machine Learning for the Web
keywords: bias, model card, HandPose
image: "./images/_thumb.jpg"
externalLink: (link)
date: "2025-03-14" # YYYY-MM-DD or YYYY-MM-DD to YYYY-MM-DD or YYYY-MM-DD, YYYY-MM-DD, YYYY-MM-DD
tags:
  - HandPose
featured: true
---

## MediaPipe Face Mesh 

**These are the [Model Card](https://drive.google.com/file/d/1sv4sSb9BSNVZhLzxXJ0jBv9DqD-4jnAz/view?pli=1), the [Research](https://arxiv.org/pdf/1907.06724), and the [Research Blog](https://sites.google.com/view/perception-cv4arvr/facemesh)**
- Date created: **2018**
- Size: **Not stated** 
- How the data was collected: “All dataset images were captured on a diverse set of smartphone cameras, both front- and back-facing. All images were captured in a real-world environment with different light, noise and motion conditions via an AR (Augmented Reality) application.”

- Bias:
  * According to the model card, the models are stated to perform “well” across most groups.  
    *  Categories of evaluation: 
        * 17 geographic subregions
        * 6 skin tones
        * Male / Female (gender)
    * Evaluation results:
        * Subregions: Difference in confidence between best and worst performing regions of 0.9% for the tracking mode and 1.56% for the reacquisition mode. 
        * Genders: Difference in confidence is 0.02% for the tracking mode and 0.1% for the reacquisition mode. 
        * Skin tones: Difference in confidence is 0.24% for tracking mode and 1.12% for the reacquisition mode. 
  * There is no additional research conducted to evaluate the fairness.

  

  * There is no additional research conducted to evaluate the fairness.

_____
## MediaPipe Attention Mesh
**This is the [Model Card](https://drive.google.com/file/d/1tV7EJb3XgMS7FwOErTgLU1ZocYyNmwlf/preview)**
- Date created: **2020**
- Size: **30K (assuming)** 
- How the data was collected: “All dataset images were captured on a diverse set of smartphone cameras, both front- and back-facing. All images were captured in a real-world environment with different light, noise and motion conditions via an AR (Augmented Reality) application.”

- Bias:
  * According to the model card, the models are stated to perform “well” across most groups.
  
    *  Categories of evaluation: 
        * 17 geographic subregions
        * 6 skin tones
        * Male / Female (gender)
    * Evaluation results:
        * Subregions: Difference in confidence between best and worst performing regions of 1.22% for the tracking mode and 1.27% for the reacquisition mode. 
        * Gender: Difference in confidence is 0.01% for the tracking mode and 0.03% for the reacquisition mode. 
        * Skin tones: Difference in confidence is 0.54% for tracking mode and 0.88% for the reacquisition mode. 

- Potential bias:
  * Potential biases in the model which may result in drastic confidence differences if evaluated: May have difficulty with facial accessories like glasses or cultural headwear.

____

#### Please submit any feedback/information you belive would be useful regarding this model [here](https://forms.gle/BPG44g3cJywSKjde6).

