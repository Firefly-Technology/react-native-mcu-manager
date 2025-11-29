import McuManagerModule from './ReactNativeMcuManagerModule';
import type { FirmwareUpgradeState, UpgradeOptions } from './Upgrade';
import Upgrade, { UpgradeMode, UpgradeFileType } from './Upgrade';
import { BootloaderInfo, bootloaderInfo, MCUBootMode } from './bootloaderInfo';
import { executeShellCommand, ShellCommandResponse } from './shellCommand';
import { SlotInfo, slotsInfo } from './slotsInfo';

export type ConnectionStatus = 'connected' | 'already_connected' | 'deferred';

export const connect = McuManagerModule?.connect as (
  bleId: string
) => Promise<{ status: ConnectionStatus }>;

export const disconnect = McuManagerModule?.disconnect as (
  bleId: string
) => Promise<void>;

export const eraseImage = McuManagerModule?.eraseImage as (
  bleId: string
) => Promise<void>;

export const resetDevice = McuManagerModule?.resetDevice as (
  bleId: string
) => Promise<void>;

export { bootloaderInfo, slotsInfo, Upgrade, UpgradeMode, UpgradeFileType, MCUBootMode, executeShellCommand };
export type { BootloaderInfo, SlotInfo, FirmwareUpgradeState, UpgradeOptions, ShellCommandResponse };

