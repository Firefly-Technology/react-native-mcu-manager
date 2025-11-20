import McuManagerModule from "./ReactNativeMcuManagerModule";

export interface ShellCommandResponse {
  output?: string;
  returnCode?: number;
}

export const executeShellCommand = McuManagerModule?.executeShellCommand as (
  bleId: string,
  command: string,
  args?: string[]
) => Promise<ShellCommandResponse>;
