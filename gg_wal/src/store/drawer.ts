import { create } from 'zustand'

type DrawerState = {
  drawerOpen: boolean,
  toggleDrawer: () => void,
}

export const useDrawerStore = create<DrawerState>((set) => ({
  drawerOpen: false,
  toggleDrawer: () => set((state) => ({...state, drawerOpen: !state.drawerOpen}))
  
}))