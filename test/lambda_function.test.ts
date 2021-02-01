import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as LambdaFunction from '../lib/lambda_function-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new LambdaFunction.LambdaFunctionStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
