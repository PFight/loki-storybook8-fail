## Repro for loki problem with static storybook 8

Branch master contains working configuration - Loki 0.31.1, Storybook  7.6.17
Branch latest contains problem configuration - Loki 0.35.1, storybook  8.5.7

Steps to reporducce:

1. npm install --force
2. npm run build-storybook
3. npm run loki 


Tested with Node v22.14.0.


## Problem (branch "latest")

```
$ npm run loki

> intro-storybook-react-template@0.2.0 loki
> loki --diffingEngine looks-same --chromeTolerance 3 --chromeRetries 5 --chromeConcurrency 2  --reactUri file:./storybook-static  --chromeFlags="--disable-web-security --hide-scrollbars --headless"

loki test v0.35.0
(node:25052) NOTE: The AWS SDK for JavaScript (v2) is in maintenance mode.
 SDK releases are limited to address critical bug fixes and security issues only.

Please migrate your code to use AWS SDK for JavaScript (v3).
For more information, check the blog post at https://a.co/cUPnyil
(Use `node --trace-warnings ...` to show where the warning was created)
 FAIL  chrome.app
       Fetching stories
       Failed fetching stories because the server is down
       Try starting it with "yarn storybook" or pass the --port or --host
       arguments if it's not running at http://192.168.251.14:10214
Some visual tests failed to run
```
