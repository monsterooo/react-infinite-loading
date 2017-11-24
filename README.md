react-infinite-loading
=======================

[![npm](https://img.shields.io/npm/dt/react-infinite-loading.svg?style=flat-square)](https://www.npmjs.com/package/react-infinite-loading)
[![npm](https://img.shields.io/npm/v/react-infinite-loading.svg?style=flat-square)](https://www.npmjs.com/package/react-infinite-loading)
[![npm](https://img.shields.io/npm/l/react-infinite-loading.svg?style=flat-square)](https://github.com/monsterooo/react-infinite-loading/blob/master/LICENSE)
[![Read the Docs](https://img.shields.io/readthedocs/pip.svg)](https://github.com/monsterooo/react-infinite-loading/blob/master/README.md)

![mp4](https://github.com/monsterooo/monsterooo.github.io/raw/master/resource/react-infinite-loading.gif)

**a react infinite scrolling component**

## Installation

react-infinite-loading requires React 15 or later.

```
install --save-dev react-infinite-loading
```

## Usage

after installation, can be used in  of the code

```
import Infinite from 'react-infinite-loading';

<Infinite handleLoading={this.handleLoading} loading={this.state.loading}>
  {/* scrolled element */}
</Infinite>
```

## Params

here are some control parameters, used in the component's props

```jsx
Infinite.propTypes = {
  // control the current status. loading = true the animation is displayed and no longer triggers handleLoading event
  loading: PropTypes.bool,
  // whether to display the loading animation
  isLoading: PropTypes.bool,
  // load animation components
  asLoading: PropTypes.node,
  // if true, scroll range as a current component on the contrary scroll range as a window
  elementScroll: PropTypes.bool,
  // set the height of the scroll container, scrollHeight={300} or scrollHeight="calc(100% - 100px)"
  scrollHeight: PropTypes.any.isRequired,
  // trigger handleLoading event threshold
  scrollThreshold: PropTypes.num,
  // scroll to the bottom event
  handleLoading: PropTypes.func,
  // sisplayed content
  children: PropTypes.node
};
```

## License

MIT
