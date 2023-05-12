import { DomUtils } from "../../utils/DomUtils";
import alarma from "/alarma.mp3";

export class Alarm {
  container: HTMLDivElement;
  private audioContainer: HTMLAudioElement | null = null;
  private shown = false;

  constructor(container: HTMLDivElement) {
    this.container = container;
  }

  setAlarm() {
    this.handlePlayAudio();
    this.shown = true;

    const parent = DomUtils.createDivIn(
      this.container,
      "absolute w-[100vw] h-[100vh] top-0 bg-red-500 flex items-center justify-center flex-col",
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
    continueButton.onclick = () => {
      this.shown = false;
      parent.remove();
      if (this.audioContainer === null) return;
      this.audioContainer.pause();
      this.audioContainer.currentTime = 0;
    };
  }

  private handlePlayAudio() {
    this.audioContainer = new Audio(alarma);
    this.audioContainer.addEventListener("canplaythrough", () => {
      if (this.container.children.length == 0) return;
      this.audioContainer?.play();
    });
  }
}
