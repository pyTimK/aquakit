export interface Fish {
  name: string;
  image: JSX.Element;
}

export interface Data {
  fish_type: string;
  ph: number;
  temp: number;
}

export const constructEmptyData = (): Data => {
  return {
    fish_type: "Guppy",
    ph: 0.0,
    temp: 0.0,
  } as Data;
};

export interface FishData {
  drain_duration: number;
  feeding_duration: number;
  should_feed: boolean;
  should_refill: boolean;
  target_temp: number;
  drain_schedules: string[];
  feeding_schedules: string[];
}

export const constructEmptyFishData = (): FishData => {
  return {
    drain_duration: 0,
    feeding_duration: 0,
    should_feed: false,
    should_refill: false,
    target_temp: 0,
    feeding_schedules: [],
    drain_schedules: [],
  } as FishData;
};
