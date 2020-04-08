'use strict';

module.exports = async function() {
  return {
    useYarn: true,
    scenarios: [
      {
        name: 'ember-lts-3.16',
        npm: {
          devDependencies: {
            'ember-source': '~3.16.0'
          }
        }
      },
      {
        name: 'ember-3.17',
        npm: {
          devDependencies: {
            'ember-source': '~3.17.0'
          }
        }
      }
    ]
  };
};