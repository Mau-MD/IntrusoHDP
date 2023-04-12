import "virtual:windi.css";
import { Alarm } from "./alarm/Alarm";
import "./main.css";
class SetupMain {
  mainContainer: HTMLDivElement;
  alarm: Alarm;

  constructor() {
    this.mainContainer = document.getElementById("app") as HTMLDivElement;
    this.alarm = new Alarm(this.mainContainer);
    this.alarm.setAlarm();
  }
}

new SetupMain();
