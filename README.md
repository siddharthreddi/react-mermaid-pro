# react-mermaid-pro

> React mermaid component with extra featuers 

[![NPM](https://img.shields.io/npm/v/react-mermaid-pro.svg)](https://www.npmjs.com/package/react-mermaid-pro) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-mermaid-pro
```

## Usage

```tsx
import React, { Component } from 'react'

import MermaidPro from 'react-mermaid-pro'


class Example extends Component {
  render() {
    return <MermaidPro definition={`sequenceDiagram
  A->> B: Query
  B->> C: Forward query
  Note right of C: Thinking...
  C->> B: Response
  B->> A: Forward response  `} _key="my-graph" syntaxError={<span>error</span>} />
  }
}
```

## License

MIT © [siddharthreddi](https://github.com/siddharthreddi)
