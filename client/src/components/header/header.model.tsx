import React from "react";

export interface HeaderModel {
  children?: React.ReactNode;
}

const enum Common {
  PARENT = 'p-6 bg-slate-50 text-slate-950 flex items-center justify-between shadow-md'
}

export const enum Mobile {
  PARENT = `${Common.PARENT}`
}

export const enum Desktop {
  PARENT = `${Common.PARENT}`
}