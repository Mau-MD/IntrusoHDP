import { DomUtils } from "../utils/DomUtils";
import alarma from "/alarma.mp3";

export class Alarm {
  container: HTMLDivElement;

  constructor(container: HTMLDivElement) {
    this.container = container;
  }

  setAlarm() {
    this.playAudio();

    const parent = DomUtils.createDivIn(
      this.container,
      "w-[100vw] h-[100vh] bg-red-500 flex items-center justify-center flex-col",
      "alarm"
    );

    const textContainer = DomUtils.createDivIn(
      parent,
      "flex flex-col blink-animation",
      ""
    );

    const alarmText = DomUtils.createSpanIn(
      textContainer,
      "text-6xl text-white font-bold",
      "alarm-text",
      "Intruso HDP Detectado !!"
    );

    const alarmSubtext = DomUtils.createSpanIn(
      textContainer,
      "text-2xl text-white ",
      "alarm-text",
      "Hijo del padre"
    );

    const continueButton = DomUtils.createDivIn(
      parent,
      "border-white border-1 text-white font-bold py-2 px-4 rounded mt-20 cursor-pointer hover:(bg-white text-black) transition-all duration-300 ease-in-out",
      "continue-button"
    );
    continueButton.textContent = "Continuar";
  }

  private playAudio() {
    const audio = new Audio(alarma);
    audio.addEventListener("canplaythrough", () => {
      audio.play().catch((e) => {
        window.addEventListener("click", () => {
          audio.play();
        });
      });
    });
  }
}
