import McuManagerModule from './ReactNativeMcuManagerModule';
import type { FirmwareUpgradeState, UpgradeOptions } from './Upgrade';
import Upgrade, { UpgradeMode, UpgradeFileType } from './Upgrade';
import { BootloaderInfo, bootloaderInfo, MCUBootMode } from './bootloaderInfo';
import { executeShellCommand, ShellCommandResponse } from './shellCommand';
import { SlotInfo, slotsInfo } from './slotsInfo';

export const eraseImage = McuManagerModule?.eraseImage as (
  bleId: string
) => Promise<void>;

export const resetDevice = McuManagerModule?.resetDevice as (
  bleId: string
) => Promise<void>;

export { bootloaderInfo, slotsInfo, Upgrade, UpgradeMode, UpgradeFileType, MCUBootMode, executeShellCommand };
export type { BootloaderInfo, SlotInfo, FirmwareUpgradeState, UpgradeOptions, ShellCommandResponse };

