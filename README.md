react-infinite-loading
===

![mp4](https://github.com/monsterooo/monsterooo.github.io/raw/master/resource/react-infinite-loading.gif)

**a browser-based for react infinite scrolling plug-ins.**

## Installation

React Redux requires React 15 or later.

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
  loading: PropTypes.bool, // control the current status. loading = true the animation is displayed and no longer triggers handleLoading event
  isLoading: PropTypes.bool, // whether to display the loading animation
  asLoading: PropTypes.node, // load animation components
  elementScroll: PropTypes.bool, // if true, scroll range as a current component on the contrary scroll range as a window
  scrollHeight: PropTypes.any.isRequired, // set the height of the scroll container, scrollHeight={300} or scrollHeight="calc(100% - 100px)"
  scrollThreshold: PropTypes.num, // trigger handleLoading event threshold
  handleLoading: PropTypes.func, // scroll to the bottom event
  children: PropTypes.node // sisplayed content
};
```

## License

MIT
