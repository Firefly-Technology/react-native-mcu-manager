import McuManagerModule from './ReactNativeMcuManagerModule';

export interface SlotInfo {
  id: number | null;
  version: string | null;
  hash: number[] | null;
  pending: boolean | null;
  confirmed: boolean | null;
}

export const slotsInfo = McuManagerModule?.slotsInfo as (
  bleId: string
) => Promise<[SlotInfo]>;