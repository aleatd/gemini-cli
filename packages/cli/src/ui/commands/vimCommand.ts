/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommandKind, SlashCommand } from './types.js';

export const vimCommand: SlashCommand = {
  name: 'vim',
  description: 'toggle vim mode on/off',
  kind: CommandKind.BUILT_IN,
  action: async (context) => {
    const newVimState = await context.ui.toggleVimEnabled();

    const message = newVimState
      ? 'Entered Vim mode. Run /vim again to exit.'
      : 'Exited Vim mode.';
    return {
      type: 'message',
      messageType: 'info',
      content: message,
    };
  },
};
