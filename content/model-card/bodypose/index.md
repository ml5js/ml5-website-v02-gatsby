---
templateKey: blog-post # <-- Uncomment this so that this post can be included in the blog list
title: BodyPose Model Card
author: ml5.js
description: Friendly Machine Learning for the Web
keywords: bias, model card, BodyPose
image: "./images/_thumb.jpg"
externalLink: (link)
date: "2025-03-14" # YYYY-MM-DD or YYYY-MM-DD to YYYY-MM-DD or YYYY-MM-DD, YYYY-MM-DD, YYYY-MM-DD
tags:
  - BodyPose
featured: true
---
BodyPose is developed leveraging TensorFlow's [MoveNet](https://www.tensorflow.org/hub/tutorials/movenet#:~:text=MoveNet%20is%20an%20ultra%20fast,known%20as%20Lightning%20and%20Thunder) and [BlazePose](https://ai.google.dev/edge/mediapipe/solutions/vision/pose_landmarker) models.

______
## MoveNet
MoveNet was trained on [two datasets](https://storage.googleapis.com/movenet/MoveNet.SinglePose%20Model%20Card.pdf): 

**COCO Keypoint Dataset Training Set 2017**
- Date created: **2017**
- Size: **28K images** 
- How the data was collected: “In-the-wild images with diverse scenes, instance sizes, and occlusions.” The original dataset of 64K images was distilled to the final 28K to only include three or less people per image.
- Bias:
    * According to the public [model card](https://storage.googleapis.com/movenet/MoveNet.SinglePose%20Model%20Card.pdf), the qualitative analysis shows that although the dataset has a 3:1 male to female ratio, favors young and light skinned individuals, the models is stated to perform “fairly” (< 5% performance differences between most categories).
        * Categories of evaluation: 
            * Male / Female (gender)
            * Young / Middle-age / Old (age)
            * Darker / Medium/ Lighter (skin tone)
    * There has been a fair amount of [research](https://medium.com/@rxtang/mitigating-gender-bias-in-captioning-systems-5a956e1e0d6d#:~:text=COCO%20dataset%20has%20an%20imbalanced,the%20bias%20learned%20by%20models) about the COCO Dataset. Most show that the dataset has numerous biases occurring due to underrepresentation of certain demographics. 

**Active Dataset Training Set**
- Date created: **2017-2021** ([assuming](https://blog.tensorflow.org/2021/05/next-generation-pose-detection-with-movenet-and-tensorflowjs.html))
- Size: **23.5k images**
- How the data was collected: “Images sampled from **YouTube fitness videos** which capture people exercising (e.g. HIIT, weight-lifting, etc.), stretching, or dancing. It contains diverse poses and motion with more motion blur and self-occlusions.”
- Bias:
    * According to the model card, the models are stated to perform “fairly” (< 5% performance differences between all categories).
        * Categories of evaluation: 
            * Male / Female (gender)
            * Young / Middle-age / Old (age) 
            * Darker / Medium/ Lighter (skin tone)
    * The Active Single Person Image set, unlike COCO dataset, is not public, hence there is no additional research conducted to evaluate the fairness. 

As stated, fitness videos uploaded to YouTube were used to assemble this internal Google dataset. Only in [2024](https://support.google.com/youtube/thread/313644973/third-party-ai-trainability-on-youtube?hl=en), Google [has provided](https://support.google.com/youtube/answer/15509945?hl=en) creators the opportunity to opt-out from Google using their videos for their AI/ML research.

___
## BlazePose
BlazePose’s [research paper](https://arxiv.org/pdf/2006.10204) and [model card](https://drive.google.com/file/d/10WlcTvrQnR_R2TdTmKw0nkyRLqrwNkWU/preview)
- Date created: **2020-2021 (assuming)**
- Size: **80K**
- How the data was collected: Not stated in the original research paper. The model card asserts: “This model was trained and evaluated on images, including consented images (30K), of people using a mobile AR application captured with smartphone cameras in various “in-the-wild” conditions. The majority of training images (85K) capture a wide range of fitness poses.” 
- Bias:
    * According to the model card, the models are stated to perform “fairly”.
        * Categories of evaluation: 
            * 14 subregions 
            * Male / Female (gender)
            * 6 skin tones
        * Evaluation results:
            * Subregions (14): difference in confidence between average and worst performing regions of 4.8% for the heavy, 4.8% for the full and 6.5% for the light model.
            * Gender: difference in confidence is 1.1% for the heavy model, 2.2% for the full model and 3.1% for the lite model.
            * Skin tones: difference in confidence between worst and best performing categories is 5.7% for the heavy model, 7.0% for the full model and 7.3% for the lite model. 

There is no additional research conducted to evaluate the fairness.
There is no specific information on how the **consent** was obtained to get the images. 


____

#### Please submit any feedback/information you belive would be useful regarding this model [here](https://forms.gle/BPG44g3cJywSKjde6).