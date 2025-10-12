---
templateKey: blog-post
title: "Using ml5.js with p5.js 2.0: Now with Async Model Constructors"
author: Bairui Su
description: Load models using async setup
keywords: ml5.js Latest Update
image: "./images/_thumb.png"
externalLink: (none)
date: "2025-07-29" # YYYY-MM-DD or YYYY-MM-DD to YYYY-MM-DD or YYYY-MM-DD, YYYY-MM-DD, YYYY-MM-DD
tags:
  - (none)
featured: false
---

In this summer, I was mentored by Gottfried Haider and Daniel Shiffman to work on the [p5.js 2.0 compatibility issue](https://github.com/ml5js/ml5-next-gen/issues/244).

A little bit background here: with the release of p5.js 2.0, asynchronous setup replaces preload and callbacks for handling async operations. For example, let's say I want to load some JSON data in p5.js.

In the past, we rely on `preload` function to do it:

```js
let data;

function preload() {
  data = loadJSON("data.json");
}

function setup() {
  drawData(data);
}
```

Now, with p5.js 2.0, this gets turned into:

```js
let data;

async function setup() {
  data = await loadJSON("data.json");
  drawData(data);
}
```

The code become mores concise and modern! To align with this update, ml5.js wants to support asynchronous model constructors, making it easier to use ml5 models within the new p5.js workflow and modern development environments.

## Ideation

Originally, ml5 model constructors return models themselves, which await all asynchronous operations implicitly in the preload function:

```js
let faceMesh;

function preload() {
  faceMesh = ml5.faceMesh(options);
}

function setup() {
  faceMesh.detectStart(video, gotFaces);
}
```

Our plan is to still support this pattern for p5.js 1.x users, while support async constructors for p5.js 2.x. The difference is that constructors now return a Promise that resolves to the model instance once all required asynchronous tasks complete:

```js
let faceMesh;

async function setup() {
  faceMesh = await ml5.faceMesh(options);
  faceMesh.detectStart(video, gotFaces);
}
```

At first, this looks like a breaking change, since constructor signatures have changed. Actually, it is a breaking change for users without using p5.js:

```js
// Before
const faceMesh = ml5.faceMesh(options);

// After
const faceMesh = await ml5.faceMesh(options);
```

But in fact we can ignore this breaking change, because we typically not do anything with the returned the object. All the following operations happen in the `callback` function:

```js
const callback = (model) => {};

ml5.faceMesh({ callback });
```

The only thing we need to care about in terms of compatibility is to return different things for different p5.js versions. This means for p5 1.x, constructors return models directly, and they return promises resolved to models for p5.js 2.x.

## Implementation

There are two main approaches to implementing async constructors:

- Updating each model’s constructor directly, proposed by [Kenneth Lim](https://github.com/ml5js/ml5-next-gen/issues/244#issuecomment-2988119112).
- Updating the existing `shouldPreload` wrapper function.

The first approach looks like a more robust solution. However since we still need to support preload, it makes sense to update the wrapper instead. To reflect its broader role, this function is now renamed to setupP5Integration.

```js
setupP5Integration(ml5Library, withPreloadMethods, withoutAsyncMethods) {
  this.methodsToPreload = withPreloadMethods;
  this.ml5Library = ml5Library;
  if (this.checkP5()) {
    this.registerPreloads();
  } else {
    this.registerAsyncConstructor(ml5Library, withoutAsyncMethods);
  }
}
```

For more details, please refer to the pull request: [ml5js/ml5-next-gen#258](https://github.com/ml5js/ml5-next-gen/pull/258).

## Examples for p5.js 2.0

To make migration and learning easier, I also ported all examples with the new async pattern in addition to updating the core code.

I duplicated all existing examples in the _examples_ folder and renamed them with `-p5-2.0` suffix. These copies are updated to work with p5.js 2.0 and the new async constructor pattern, following Gottfried's suggestion in [#244](https://github.com/ml5js/ml5-next-gen/issues/244#issuecomment-3034023663).

```html
<script src="https://cdn.jsdelivr.net/npm/p5@2.0.3/lib/p5.js"></script>
<script src="https://unpkg.com/ml5@1/dist/ml5.js"></script>
```

You can find all the examples in the [README.md](https://github.com/ml5js/ml5-next-gen/blob/main/examples/README.md) file inside the examples folder and explore them in the p5.js Web Editor.

An interesting thing is that I also wrote a script called `updateExamplesREADME` to generate this README from all the examples.

```bash
yarn update-examples-readme
```

The README follows the format below:

```md
![ml5](https://user-images.githubusercontent.com/10605821/41332516-2ee26714-6eac-11e8-83e4-a40b8761e764.png)

## ml5.js Examples

**Explore in the p5.js Web Editor**

Jump right into experimenting with ml5.js — no local setup needed. Browse and run these example sketches directly in the p5.js Web Editor:

### p5.js 1.0 Examples

- [bodyPose-blazePose-keypoints](https://editor.p5js.org/ml5/sketches/OukJYAJAb)
- [bodyPose-blazePose-skeleton](https://editor.p5js.org/ml5/sketches/KWgsAbgkk)

### p5.js 2.0 Examples

- bodyPose-blazePose-keypoints-p5-2.0 _(not uploaded yet)_
- bodyPose-blazePose-skeleton-p5-2.0 _(not uploaded yet)_
```

## Updated the `update-p5-version` Script

Another improvement I made is to update `scripts/update-p5-version` to support multiple p5 versions. Notably, it now fetches versions directly from npm instead of github realeases, making it easier to get the latest release for each major version.

```js
async function getP5VersionsFromNpm() {
  const res = await fetch("https://registry.npmjs.org/p5");
  const data = await res.json();
  return {
    latest: data["dist-tags"].latest, // Latest 2.x version
    r1: data["dist-tags"].r1, // Latest 1.x version
  };
}
```

I also ran the script and updated the p5 1.x version used in the examples.

## Fix a Bug for p5.js

During the upgrading, I also found a bug for p5.js 2.0. Nearly all examples work as expected. However, examples involving video.**mask** do not work correctly in p5.js 2.0:

- examples/bodySegmentation-mask-background-p5-2.0
- examples/bodySegmentation-mask-person-p5-2.0

These issues appear to be related to the p5.js upgrade, not the constructor changes. So I opened a [PR](https://github.com/processing/p5.js/pull/7980) to fix the issues.

## User Guide

If you are confused about which pattern you should use, here is a quick summary.

For users still using p5.js 1.x, don't worry — the old `preload()` approach still works. So feel free to use the latest version of ml5 without breaking any existing sketches.

```js
// Using with p5 1.x
let faceMesh;

function preload() {
  faceMesh = ml5.faceMesh({ detectionConfidence: 0.9 });
}
```

For users using ml5.js without p5.js? Still nothing to worry about — you can still use the model loaded callback.

```js
ml5.faceMesh({ detectionConfidence: 0.9, callback: model });

function modelLoaded(model) {
  // Do something here...
}
```

However, we encourage you to adopt the new pattern:

```js
const model = await ml5.faceMesh({ detectionConfidence: 0.9 });
// Do something here...
```

For users using p5.js 2.x, try our new async constructors:

```js
let faceMesh;

async function setup() {
  faceMesh = await ml5.faceMesh(options);
  faceMesh.detectStart(video, gotFaces);
}
```

Note that there is one exception. The _ml5_.**neuralNetwork** API continues to behave the same way: it returns the model instance directly. Since it’s not typically used in _preload()_ and doesn’t require explicit model loading during instantiation, no _await_ is needed.

```js
function setup() {
  const nn = ml5.neuralNetwork({
    inputs: 4,
    outputs: ["flap", "no flap"],
    task: "classification",
    debug: true,
  });
}
```

## Thanks

Thanks to Daniel Shiffman for giving me this opportunity to become one member of ml5.js community. It's so interesting to see [opinions](https://github.com/ml5js/ml5-next-gen/issues/244) from different people with different perspective for the same question. I'm glad that we found a final solution and actually made it come true!

Also thanks to Gottfried Haider for all the guidance and gave suggestions from a bigger scope. This really help me understand the actually problems and find the solutions.

At last, special thanks to Kenneth Lim for brining this up and all the detailed explanations!

## Learn More

You can find more details and technical discussions in the following links:

- GitHub Issue: [p5.js 2.0 Compatibility](https://github.com/ml5js/ml5-next-gen/issues/244)
- Pull Request: [Async constructors for p5 2.0](https://github.com/ml5js/ml5-next-gen/pull/258)

These thread go deeper into reasoning, implementation details and ongoing conversations around p5.js 2.0 compatibility.

---
<span style="color: gray;">[Bairui SU](https://bairui.dev) is a toolmaker who is interested in creative coding, data visulization and interactive system. He is part of ml5's research team as a graduate student at NYU ITP.</span>
