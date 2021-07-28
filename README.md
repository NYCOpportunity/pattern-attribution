# Attribution Pattern

The Attribution Pattern is a footer for products maintained by the Mayor's Office for Economic Opportunity and its partners. It includes a byline, several partnership NYC logo lockup SVG files, NYC trademark and copyright information, and [NYC.gov terms of use](http://www1.nyc.gov/home/privacy-policy.page) and [privacy policy](http://www1.nyc.gov/home/terms-of-use.page).

The Pattern may use the "Learn More" toggle to show a short summary about the Mayor's Office for Economic Opportunity. The toggle can be replaced with an "About" link if the product

## Usage

### Installation

```shell
$ npm install @nycopportunity/pattern-attribution
```

### ES Module

The "Learn More" toggle uses the [Patterns Scripts toggle utility](https://github.com/CityOfNewYork/patterns-scripts/tree/main/src/toggle) which is included as a dependency of this project. The utility can be imported as an ES module and instantiated.

```javascript
import Toggle from '@nycopportunity/pattern-scripts/src/toggle';

new Toggle();
```

If the "Learn More" toggle isn't used the module does not need to be installed.

### Styles

The Attribution Pattern includes two stylesheets. One that sets default design tokens using [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) and one that applies the tokens to the pattern's CSS selectors. The tokens can be used as is or overridden.

```scss
@import '@nycopportunity/pattern-attribution/src/tokens';
@import '@nycopportunity/pattern-attribution/src/attribution';
```

### Markup

[Sample markup can be previewed the source directory](src/attribution.twig).

#### Potentially Focusable Elements

The Patterns Scripts dialog utility uses the [toggling utility](https://github.com/CityOfNewYork/patterns-scripts/tree/main/src/toggle#attributes) from the same library. Potentially focusable elements will need to have their `tabindex` set to `-1` before the modal is toggled open. A full list of elements can be found in the documentation for the Toggle Utility.