#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { LambdaFunctionStack } from '../lib/lambda_function-stack';

const app = new cdk.App();
new LambdaFunctionStack(app, 'LambdaFunctionStack');
