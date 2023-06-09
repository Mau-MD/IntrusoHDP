import axios from "axios";
import { DomUtils } from "../../utils/DomUtils";
import { Socket, io } from "socket.io-client";

export class Estado {
  mainContainer: HTMLDivElement;
  socket: Socket;

  constructor(container: HTMLDivElement) {
    this.socket = io("ws://localhost:3000");

    const parent = DomUtils.createDivIn(
      container,
      "grid grid-cols-3 gap-4 mt-10",
      "estado"
    );
    this.mainContainer = parent;

    const estado = DomUtils.createDivIn(parent, "", "estado");
    estado.innerText = "Estado del sistema";

    const estadoSistema = DomUtils.createDivIn(
      estado,
      "text-green-500",
      "estado"
    );
    estadoSistema.innerText = "Vigilando al HDP";

    this.socket.on("on", () => {
      estadoSistema.innerText = "Vigilando al HDP: ON";
    });
    this.socket.on("off", () => {
      estadoSistema.innerText = "Vigilando al HDP: OFF";
    });

    const apagarEncender = DomUtils.createDivIn(
      parent,
      "flex flex-col  gap-2",
      "estado"
    );
    apagarEncender.innerText = "Apagar/Encender";

    const apagar = DomUtils.createDivIn(
      apagarEncender,
      "px-4 py-2 border-1 rounded cursor-pointer hover:bg-[#1aff1a]",
      "estado"
    );
    apagar.innerText = "Apagar";
    apagar.onclick = () => this.socket.emit("apagar");

    const encender = DomUtils.createDivIn(
      apagarEncender,
      "px-4 py-2 border-1 rounded cursor-pointer hover:bg-[#1aff1a]",
      "estado"
    );
    encender.innerText = "Encender";
    encender.onclick = () => this.socket.emit("encender");

    const crearUsuario = DomUtils.createDivIn(parent, "", "estado");
    crearUsuario.innerText = "Crear usuario";
    this.createForm(crearUsuario);
  }

  private createForm(container: HTMLDivElement) {
    const form = DomUtils.createFormIn(
      container,
      "flex flex-col gap-2 m-auto",
      ""
    );
    const userInput = DomUtils.createInputIn(
      form,
      "py-2 px-4 border-[#1aff1a] border-1 bg-transparent text-white focus:outline-none",
      "username",
      "text",
      "username"
    );
    const passwordInput = DomUtils.createInputIn(
      form,
      "py-2 px-4 border-[#1aff1a] border-1 bg-transparent text-white  focus:outline-none",
      "password",
      "password",
      "password"
    );
    const btn = DomUtils.createDivIn(
      form,
      " px-4 py-2 text-[#1aff1a] border-[#1aff1a] border-1 bg-transparent cursor-pointer text-sm hover:text-white",
      ""
    );
    btn.textContent = "Acceder";

    btn.onclick = async () => {
      try {
        console.log(userInput.value, passwordInput.value);
        if (localStorage.getItem("admin") !== "true") {
          alert("No eres admin");
          return;
        }
        const res = await axios.post("http://localhost:3000/users/register", {
          user: userInput.value,
          password: passwordInput.value,
        });
        alert("muy bien");
      } catch {
        alert("nel");
        localStorage.removeItem("admin");
      }
    };
  }
}
