# AngularJS-MusicSearch
Simple AngularJS Music Search with SASS support and Gulp watch/build tasks

# Features
* SASS support including sourceMaps
* Minimal CSS styling of the view
* Gulp watch, build and local server tasks
* clear folder structure
* minified CSS and JS build files

## 1. Setup
	npm install

- install all npm and bower dependencies

## 2. Watch files
	gulp

- all SCSS/HTML will be watched for changes and injected into browser

## 3. Build production version

	gulp build

- this will process following tasks:
* clean _build folder
* compile SASS files, minify and uncss compiled css
* copy and optimize images
* minify and copy all HTML files into $templateCache
* build index.html
* minify and copy all JS files
* copy fonts
* show build folder size

## 4. Start webserver without watch task

	gulp server


## 5. Start webserver from build folder

	gulp server-build


## Changelog


### 1.0.0
- initial release
06.04.2017
