import "virtual:windi.css";
import { Alarm } from "./ui/alarm/Alarm";
import "./main.css";
import { Dashboard } from "./ui/dashboard/Dashboard";
import { Estado } from "./ui/dashboard/Estado";
class SetupMain {
  mainContainer: HTMLDivElement;
  alarm: Alarm;

  constructor() {
    document.body.className = "bg-black text-white";
    this.mainContainer = document.getElementById("app") as HTMLDivElement;
    this.mainContainer.className = "container mx-auto";
    this.alarm = new Alarm(this.mainContainer);
    new Dashboard(this.mainContainer, () => new Estado(this.mainContainer));
  }
}

new SetupMain();
