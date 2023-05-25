import "virtual:windi.css";
import { Alarm } from "./ui/alarm/Alarm";
import "./main.css";
import { Dashboard } from "./ui/dashboard/Dashboard";
class SetupMain {
  mainContainer: HTMLDivElement;
  alarm: Alarm;

  constructor() {
    document.body.className = "bg-black text-white";
    this.mainContainer = document.getElementById("app") as HTMLDivElement;
    this.mainContainer.className = "container mx-auto";
    this.alarm = new Alarm(this.mainContainer);
    new Dashboard(this.mainContainer);
    // this.alarm.setAlarm();
  }
}

new SetupMain();
