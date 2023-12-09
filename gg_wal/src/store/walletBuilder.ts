import { create } from 'zustand'

type WalletBuilderState = {
  dialogOpen: boolean,
  toggleDialogOpen: () => void,
  toggleDialogClose: () => void
}

export const useWalletBuilderStore = create<WalletBuilderState>((set) => ({
  dialogOpen: false,
  toggleDialogOpen: () => set((state: WalletBuilderState) => ({...state, dialogOpen: true})),
  toggleDialogClose: () => set((state: WalletBuilderState) => ({...state, dialogOpen: false})),
  
}))