/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Neil Enns. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export default interface IMqttMessageConfigJson {
  topic: string;
  payload?: string;
  offDelay?: number;
}
