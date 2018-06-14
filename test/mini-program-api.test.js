'use strict';

const mock = require('egg-mock');

describe('test/mini-program-api.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/mini-program-api-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, miniProgramApi')
      .expect(200);
  });
});
