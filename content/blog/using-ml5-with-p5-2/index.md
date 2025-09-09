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

With the release of p5.js 2.0, asynchronous setup replaces preload for handling async operations. To align with this update, ml5.js now supports asynchronous model constructors, making it easier to use ml5 models within the new p5.js workflow and modern development environments.

## What's New?

In ml5.js, most model constructors are now async-friendly, such as _ml5_.**poseNet** and _ml5_.**faceMesh**. Instead of initializing models in `preload()`, you can now simply `await` them inside the async `setup()` function.

```js
// Using with p5 2.x
let faceMesh;

async function setup() {
  faceMesh = await ml5.faceMesh({ detectionConfidence: 0.9 });
}
```

In this case, the constructor returns a Promise that resolves to the model instance once all required asynchronous tasks are completed.

## Still Using p5.js 1.x?

Don't worry — the old `preload()` approach still works for sketches using p5.js 1.x:

```js
// Using with p5 1.x
let faceMesh;

function preload() {
  faceMesh = ml5.faceMesh({ detectionConfidence: 0.9 });
}
```

So feel free to the latest version of ml5 without breaking any existing sketches.

## Using ml5.js without p5.js?

Still nothing to worry about — you can still use the on model loaded callback.

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

## Exception: _ml5_.**neuralNetwork**

The _ml5_.**neuralNetwork** API continues to behave the same way: it returns the model instance directly. Since it’s not typically used in _preload()_ and doesn’t require explicit model loading during instantiation, no _await_ is needed.

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

## Examples for p5.js 2.0

To make migration and learning easier, all [examples](https://github.com/ml5js/ml5-next-gen/tree/main/examples) in the ml5.js repo now include versions compatible with p5.js 2.0 (marked with **-p5-2.0** suffix). These examples demonstrate the new async pattern and use p5.js 2.0 like this:

```html
<script src="https://cdn.jsdelivr.net/npm/p5@2.0.3/lib/p5.js"></script>
<script src="https://unpkg.com/ml5@latest/dist/ml5.js"></script>
```

You can find all the examples in the [README.md](https://github.com/ml5js/ml5-next-gen/blob/main/examples/README.md) file inside the examples folder and explore them in the p5.js Web Editor.

## Learn More

You can find more details and technical discussions in the following links:

- GitHub Issue: [p5.js 2.0 Compatibility](https://github.com/ml5js/ml5-next-gen/issues/244)
- Pull Request: [Async constructors for p5 2.0](https://github.com/ml5js/ml5-next-gen/pull/258)

These thread go deeper into reasoning, implementation details and ongoing conversations around p5.js 2.0 compatibility.
