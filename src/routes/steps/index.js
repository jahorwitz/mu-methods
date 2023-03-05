import { ChoosePeers } from "./choose-peers/choose-peers";
import { ConnectWalletConfirm } from "./connect-wallet-confirm/connect-wallet-confirm";
import { ConnectWalletPermissions } from "./connect-wallet-permissions/connect-wallet-permissions";
import { ConnectWalletScan } from "./connect-wallet-scan/connect-wallet-scan";
import { EntryPoint } from "./entry-point/entry-point";
import { FinishReg } from "./finish-reg";
import { NotifyPeers } from "./notify-peers";
import { RepeatSeedPhrase } from "./repeat-seed-phrase/repeat-seed-phrase";
import { SeedPhrase } from "./seed-phrase/seed-phrase";
import { UserInfo } from "./user-info";

export const Steps = {
  UserInfo,
  SeedPhrase,
  ChoosePeers,
  RepeatSeedPhrase,
  NotifyPeers,
  FinishReg,
  EntryPoint,
  ConnectWalletScan,
  ConnectWalletConfirm,
  ConnectWalletPermissions,
};
