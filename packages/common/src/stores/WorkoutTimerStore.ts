import dayjs from "dayjs";
import { action, computed, observable } from "mobx";

const padZero = (n: number) => {
  if (n >= 10) {
    return n;
  }

  return `0${n}`;
};

export class WorkoutTimerStore {
  @observable startTime = dayjs();
  @observable isRunning = false;
  @observable seconds = 0;

  @action measure() {
    if (!this.isRunning) return;

    this.seconds = dayjs().diff(this.startTime, "second");

    setTimeout(() => this.measure(), 1000);
  }

  @action startTimer() {
    this.isRunning = true;
    this.startTime = dayjs();
    this.measure();
  }

  @action stopTimer() {
    this.isRunning = false;
    this.seconds = 0;
  }

  @computed get percent() {
    return `${Math.min(100, (this.seconds / 180) * 100)}%`;
  }

  @computed get display() {
    const minutes = Math.floor(this.seconds / 60);
    const seconds = this.seconds % 60;
    return `${padZero(minutes)}:${padZero(seconds)}`;
  }
}
