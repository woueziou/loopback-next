import {sinon} from '@loopback/testlab';

export const mochaHooks = {
  afterEach() {
    sinon.restore();
  },
};
