// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';

import {get} from '@loopback/rest';

export class HelloworldController {
  constructor() {}

  @get('hello-world', {
    responses: {
      '200': {
        description: 'This is the successful response from the method',
        content: {
          'application/json': {
            schema: {
              type: 'object',
            },
          },
        },
      },
    },
  })
  async sayHello(): Promise<object> {
    console.log('Inside Helloworldcontroller');
    return {message: 'Hello World'};
  }
}
