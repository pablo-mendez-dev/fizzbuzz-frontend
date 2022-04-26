import { FizzbuzzError } from './fizzbuzz-error.model';

describe('FizzbuzzError', () => {
  it('should create an instance', () => {
    expect(new FizzbuzzError()).toBeTruthy();
  });
});
