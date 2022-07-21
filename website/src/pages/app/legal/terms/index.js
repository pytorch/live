/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import * as React from 'react';
import ExternalRedirect from '@site/src/components/ExternalRedirect';
import ExternalLinks from '@site/src/constants/ExternalLinks';

export default function TermsOfService() {
  return <ExternalRedirect to={ExternalLinks.TERMS_OF_SERVICE} />;
}