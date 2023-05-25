import axios from "axios";
import { DomUtils } from "../../utils/DomUtils";

const hackingSteps = [
  "Initiating brute-force attack...",
  "Cracking encrypted data...",
  "Decrypting password hashes...",
  "Bypassing security protocols...",
  "Accessing root directory...",
  "Compiling backdoor...",
  "Establishing remote connection...",
  "Transferring data packets...",
  "Executing script...",
  "Overriding firewall...",
  "Escalating privileges...",
  "Integrating exploit code...",
  "Generating security keys...",
  "Decrypting SSL certificates...",
  "Acquiring admin access...",
  "Overwriting system files...",
  "Masking IP address...",
  "Sending spoofed packets...",
  "Intercepting network traffic...",
  "Establishing VPN connection...",
  "Activating hidden services...",
  "Deploying trojan horse...",
  "Covering tracks...",
  "Loading Bad Bunny...",
  "Loading Esta Cabron Ser Yo - Bad Bunny",
  "System Accessed",
];

export class Dashboard {
  private container: HTMLDivElement;
  private header: HTMLHeadingElement;
  private headerInterval: number;
  private mainContainer: HTMLDivElement;

  private cb: () => void;

  constructor(container: HTMLDivElement, callback: () => void) {
    this.container = container;
    this.cb = callback;
    this.header = DomUtils.createHeaderIn(
      container,
      "text-4xl font-bold",
      "dashboard-title",
      "Dashboard",
      2
    );
    this.mainContainer = DomUtils.createDivIn(
      this.container,
      "w-full h-full grid grid-cols-2",
      ""
    );
    this.headerAnimation();
    const hackingStepsContainer = DomUtils.createDivIn(
      this.mainContainer,
      "w-full flex flex-col",
      ""
    );
    this.hackingStepsAnimation(hackingStepsContainer);
  }

  private createForm() {
    const form = DomUtils.createFormIn(
      this.mainContainer,
      "flex flex-col gap-2 m-auto h-full",
      ""
    );
    const userInput = DomUtils.createInputIn(
      form,
      "py-2 px-4 border-[#1aff1a] border-1 bg-transparent text-white w-[500px] focus:outline-none",
      "username",
      "text",
      "username"
    );
    const passwordInput = DomUtils.createInputIn(
      form,
      "py-2 px-4 border-[#1aff1a] border-1 bg-transparent text-white w-[500px] focus:outline-none",
      "password",
      "password",
      "password"
    );
    const btn = DomUtils.createDivIn(
      form,
      "w-[500px] px-4 py-2 text-[#1aff1a] border-[#1aff1a] border-1 bg-transparent cursor-pointer text-sm hover:text-white",
      ""
    );
    btn.textContent = "Acceder";

    btn.onclick = async () => {
      try {
        console.log(userInput.value, passwordInput.value);
        const res = await axios.post("http://localhost:3000/users/login", {
          user: userInput.value,
          password: passwordInput.value,
        });
        console.log(res.data);
        localStorage.setItem("admin", res.data.admin);
        this.mainContainer.innerHTML = "";
        this.cb();
      } catch {
        alert("nel");
        localStorage.removeItem("admin");
      }
    };
  }
  private headerAnimation() {
    this.headerInterval = setInterval(() => {
      const textArray = this.header.textContent?.split("");
      let newText = "";
      for (const letter of textArray!) {
        newText += Math.random().toString(36).charAt(2);
      }
      this.header.textContent = newText;
    }, 25);
    setTimeout(() => {}, 3000);
  }

  private hackingStepsAnimation(hackingStepsContainer: HTMLDivElement) {
    let step = 0;

    let lastChild = hackingStepsContainer.lastChild as HTMLParagraphElement;
    setInterval(() => {
      const child = hackingStepsContainer.lastChild as HTMLParagraphElement;
      if (lastChild != null && child != lastChild) {
        lastChild.style.opacity = "1";
        lastChild.style.color = "#1aff1a";
        lastChild = child;
        return;
      }
      if (child.style.opacity == "0.1") child.style.opacity = "1";
      else {
        child.style.opacity = "0.1";
      }
      lastChild = child;
    }, 100);
    const handler = () => {
      DomUtils.createParagraphIn(
        hackingStepsContainer,
        "m-0",
        "",
        hackingSteps[step]
      );
      step += 1;
      if (step !== hackingSteps.length) {
        setTimeout(handler, this.randomBetween(1, 2));
      } else {
        clearInterval(this.headerInterval);
        this.header.textContent = "Dashboard";
        this.createForm();
      }
    };

    setTimeout(handler, this.randomBetween(100, 1000));
  }

  private randomBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
