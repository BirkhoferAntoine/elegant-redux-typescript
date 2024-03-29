import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import {AppDispatch, RootState} from "./store.ts";

type DispatchFunction = () => AppDispatch;

export const useCartDispatch: DispatchFunction = useDispatch;
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;

// You don't need to recreate these hooks for each of your store's slices, you only create them once.
// Ex: can be called useAppDispatch and useAppSelector