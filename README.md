# json-construct
An advanced JSON Constructor for Alteryx

## Installation

Use the instructions below for installing from source...

#### Alteryx will typically install tools in one of the following locations...
``` bash
C:\Users\{user}\AppData\Roaming\Alteryx\Tools
C:\Program Files\Alteryx\bin\HtmlPlugins
C:\ProgramData\Alteryx\Tools
```

#### Choose a location, clone and cd to project
``` bash
# as of Designer 2018.1 this is the preferred global directory
cd C:\ProgramData\Alteryx\Tools

# clone 
git clone https://github.com/alteryx-vue/json-construct

# cd to project
cd json-construct
```

## Build Setup & Testing

### install dependencies

`npm install`

### Dev Environment Testing

You can use `npm run dev` to serve the project with hot reload for testing in a browser.  
>limited functionality in browser - use for Vue component and/or state management debugging, etc.

__Note__: When using Chrome, be sure to make use of the [Vue.js Devtools Extension](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

### Build Production

Webpack and such..

``` bash
# build & compile
npm run build
```

Webpack [vue-loader](http://vuejs.github.io/vue-loader) is used for compiling `.vue` files.