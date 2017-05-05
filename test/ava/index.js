import test from 'ava'
import hello from '../../src'

test('dummy', t => {
  t.is(hello(), 'world')
})
