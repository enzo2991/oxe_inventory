export type Slot = {
  slot: number;
  name?: string;
  count?: number;
  weight?: number;
  metadata?: {
    [key: string]: any;
  };
  durability?: number;
};

export type SlotWithItem = Slot & {
  name: string;
  count: number;
  weight: number;
  durability?: number;
  price?: number;
  currency?: string;
  ingredients?: { [key: string]: number };
  duration?: number;
  image?: string;
  grade?: number | number[];
};

export type SlotPed = {
  slot: number;
  name?:string;
  metadata?: {
    [key: string]: any;
  };
}

export type SlotPedWithItem = SlotPed & {
  name:string;
  image?: string;
}
