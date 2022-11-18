import create from 'zustand'

type bearType = {
  bear: number
  bearIncrease: () => void
  bearDecrease: () => void
  resetBear : () => void
} 

export const addStore = create<bearType>((set) => ({
  bear:0,
  bearIncrease: () => set((state : any) => ({bear: state.bear + 1})),
  bearDecrease: () => set((state : any) => ({bear: state.bear -1})),
  resetBear: () =>set({bear:0})
}))