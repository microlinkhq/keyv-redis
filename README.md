<div align="center">
  <img src="https://cdn.microlink.io/logo/banner.png"">
</div>

> Redis storage adapter for [Keyv](https://github.com/lukechilds/keyv).

![Last version](https://img.shields.io/github/tag/microlinkhq/keyv-redis.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/com/microlinkhq/keyv-redis/master.svg?style=flat-square)](https://travis-ci.com/microlinkhq/keyv-redis)
[![Coverage Status](https://img.shields.io/coveralls/microlinkhq/keyv-redis.svg?style=flat-square)](https://coveralls.io/github/microlinkhq/keyv-redis)
[![NPM Status](https://img.shields.io/npm/dm/@microlink/keyv-redis.svg?style=flat-square)](https://www.npmjs.org/package/@microlink/keyv-redis)

TTL functionality is handled directly by Redis so no timestamps are stored and expired keys are cleaned up internally.

## Install

```shell
npm install --save keyv ioredis @microlink/keyv-redis
```

## Usage

```js
const Keyv = require('keyv')
const keyv = new Keyv('redis://user:pass@localhost:6379')
```

Any valid [`Redis`](https://github.com/luin/ioredis#connect-to-redis) options will be passed directly through.

```js
const keyv = new Keyv('redis://user:pass@localhost:6379', { disable_resubscribing: true })
```

Or you can manually create a storage adapter instance and pass it to Keyv:

```js
const KeyvRedis = require('@keyv/redis')
const Keyv = require('keyv')

const keyvRedis = new KeyvRedis('redis://user:pass@localhost:6379')
const keyv = new Keyv({ store: keyvRedis })
```

Or reuse a previous Redis instance:

```js
const KeyvRedis = require('@keyv/redis')
const Redis = require('ioredis')
const Keyv = require('keyv')

const redis = new Redis('redis://user:pass@localhost:6379')
const keyvRedis = new KeyvRedis(redis)
const keyv = new Keyv({ store: keyvRedis })
```

## License

**keyv-redis** © [microlink.io](https://microlink.io), released under the [MIT](https://github.com/microlinkhq/keyv-redis/blob/master/LICENSE.md) License.<br>
Authored and maintained by [microlink.io](https://microlink.io) with help from [contributors](https://github.com/microlinkhq/keyv-redis/contributors).

> [microlink.io](https://microlink.io) · GitHub [microlink.io](https://github.com/microlinkhq) · Twitter [@microlinkhq](https://twitter.com/microlinkhq)
