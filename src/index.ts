import McuManagerModule from './ReactNativeMcuManagerModule';
import type { FirmwareUpgradeState, UpgradeOptions } from './Upgrade';
import Upgrade, { UpgradeMode, UpgradeFileType } from './Upgrade';
import { BootloaderInfo, bootloaderInfo, MCUBootMode } from './bootloaderInfo';
import { executeShellCommand, ShellCommandResponse } from './shellCommand';

export const eraseImage = McuManagerModule?.eraseImage as (
  bleId: string
) => Promise<void>;

export const resetDevice = McuManagerModule?.resetDevice as (
  bleId: string
) => Promise<void>;

export { bootloaderInfo, Upgrade, UpgradeMode, UpgradeFileType, MCUBootMode, executeShellCommand };
export type { BootloaderInfo, FirmwareUpgradeState, UpgradeOptions, ShellCommandResponse };
