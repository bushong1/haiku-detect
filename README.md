# haiku-detect

For detecting and formatting haikus

## usage

```
> var haiku = require("./index.js")
undefined
> haiku_detect.detect("are you suggesting that instead of single lines haikus are preferred?")
true
> haiku_detect.format("are you suggesting that instead of single lines haikus are preferred?")
[ 'are you suggesting ',
  'that instead of single lines ',
  'haikus are preferred?' ]
```
