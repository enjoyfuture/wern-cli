import test from 'ava';
import bootstrap, {bootstrapStyles} from '../bootstrapCss';

test('bootstrapCss Test', t => {
  t.is(bootstrap('container'), 'container');
  t.is(bootstrap('btn', 'btn-info'), 'btn btn-info');
  t.is(bootstrapStyles.container, 'container');
  t.is(bootstrapStyles['btn-info'], 'btn-info');
});