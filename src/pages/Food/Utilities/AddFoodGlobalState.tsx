import { create } from "zustand"

export interface AddFoodGlobalStateInterface {
    title: string
    setTitle: (input:string) => void
}

const AddFoodGlobalState = create<AddFoodGlobalStateInterface>((set) => ({
title: "",

setTitle: (input:string) => {
    set (() => ({
        title:input,
    }))
}
}))

export default AddFoodGlobalState