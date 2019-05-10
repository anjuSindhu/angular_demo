import { SimplePipe } from '../pipes-tests/simple.pipe';

describe('SimplePipe', () => {
  it('create an instance', () => {
    const pipe = new SimplePipe();
    expect(pipe).toBeTruthy();
  });
});
