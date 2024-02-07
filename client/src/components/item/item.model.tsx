import {IconDefinition} from "@fortawesome/pro-light-svg-icons";

export interface ItemModel<T> {
  title: string;
  data: T;
  icon?: IconDefinition;
}

const enum Common {
  PARENT = 'rounded-md bg-slate-50 h-40 flex flex-col gap-3 shadow-md p-3 text-base'
}

export const enum Mobile {
  PARENT = `${Common.PARENT}`
}

export const enum Desktop {
  PARENT = `${Common.PARENT}`
}
