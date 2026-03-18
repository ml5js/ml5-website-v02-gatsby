# ml5.js Website

This is the repository for the new version of ml5.js website, which is built using [Gatsby](https://www.gatsbyjs.org/). It contains the main homepage, community page, about page, blog, and learn page for the ml5.js library.

> This is the current version of the ml5.js website.


## Live Site

[https://ml5js.org](https://ml5js.org)

## Tech Stack

- [Gatsby 5](https://www.gatsbyjs.org/) — static site generator
- [React 18](https://reactjs.org/) — UI components
- [Node.js](https://nodejs.org/) — runtime environment
- [gatsby-transformer-remark](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/) — Markdown processing
- [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/) — optimized image handling


## Project Structure

```
ml5-website-v02-gatsby/
├── content/                  # Markdown content
│   ├── blog/                 # Blog posts
│   ├── featured-projects/    # Featured community projects
│   └── tutorials/            # Tutorial pages
├── src/
│   ├── assets/               # Static assets (fonts, icons, etc.)
│   ├── components/           # Reusable React components
│   ├── images/               # Image files used in source
│   ├── layout/               # Layout wrapper components
│   ├── pages/                # Top-level pages (index, about, etc.)
│   ├── styles/               # Global and component CSS
│   └── templates/            # Gatsby page templates (blog, tutorial)
├── static/                   # Public static files
├── gatsby-config.js          # Gatsby plugins and site metadata
├── gatsby-node.js            # Dynamic page creation logic
├── gatsby-browser.js         # Browser-specific Gatsby APIs
└── gatsby-ssr.js             # Server-side rendering Gatsby APIs
```

## Local Setup

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or v20 LTS 
- [npm](https://www.npmjs.com/)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/ml5js/ml5-website-v02-gatsby.git
   cd ml5-website-v02-gatsby
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run develop
   ```

4. Open [http://localhost:8000](http://localhost:8000) in your browser.

## Contributing

We welcome contributions!

If you are in the ml5.js organization, create a new branch following the naming 
convention below. Please avoid using any punctuation other than hyphens `-`. Category can be optional.
```
(category)/author-description-of-changes
```

If you are **not** in the ml5.js organization, follow these steps:

1. Fork the repository and clone it to your local machine.
2. Make changes.
3. Commit your changes and push to the "main" branch on your forked repository.
4. Create a new Pull Request (PR), by clicking on "Contribute" and then "Open Pull Request" on your forked repository.
5. The PR will be reviewed and merged.

### Issues

Please feel free to add any issues or feature requests in the 
[Issues](https://github.com/ml5js/ml5-website-v02-gatsby/issues) tab.


## Code of Conduct

We believe in a friendly internet and community as much as we do in building 
friendly machine learning for the web. Please refer to our 
[Code of Conduct](https://github.com/ml5js/Code-of-Conduct) for our rules for 
interacting with ml5 as a developer, contributor, or as a person using the library.


## Acknowledgements

ml5.js is supported by the time and dedication of open source developers from 
all over the world. Funding and support is generously provided by a 
[Google Education grant](https://edu.google.com/giving/) at NYU's ITP/IMA program 
and NYU Shanghai's IMA.

