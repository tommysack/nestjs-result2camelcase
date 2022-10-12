# Mapping results in to camelCase

This is an Interceptor to transform the keys of API results from snake-case to camelCase.<br/>

## Installation

```bash
$ npm i nestjs-result2camelcase
```

## How to use

In your main.ts:<br>
```code
app.useGlobalInterceptors(new ResultToCamelcaseInterceptor());
```

In your Controller you can use <i>UseInterceptors</i> decorator:<br>
```code
@UseInterceptors(new ResultToCamelcaseInterceptor())
```
