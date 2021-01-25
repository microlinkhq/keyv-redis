'use strict'

const { default: keyvTestSuite } = require('@keyv/test-suite')
const KeyvRedis = require('this')
const Redis = require('ioredis')
const Keyv = require('keyv')
const test = require('ava')

const { REDIS_HOST = 'localhost' } = process.env
const redisURI = `redis://${REDIS_HOST}`

const store = () => new KeyvRedis(redisURI)
keyvTestSuite(test, Keyv, store)

test('reuse a redis instance', async t => {
  const redis = new Redis(redisURI)
  redis.foo = 'bar'
  const keyv = new KeyvRedis(redis)
  t.is(keyv.redis.foo, 'bar')

  await keyv.set('foo', 'bar')
  const value = await redis.get('foo')
  t.true(value === 'bar')
  t.true((await keyv.get('foo')) === value)
})
