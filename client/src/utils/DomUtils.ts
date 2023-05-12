export class DomUtils {
  static createDivIn(
    parentContainer: HTMLElement,
    className: string,
    id: string
  ): HTMLDivElement {
    const div = document.createElement("div");
    div.className = className;
    div.id = id;
    parentContainer.appendChild(div);
    return div;
  }

  static createSpanIn(
    parentContainer: HTMLElement,
    className: string,
    id: string,
    textContent: string
  ): HTMLSpanElement {
    const span = document.createElement("span");
    span.className = className;
    span.id = id;
    span.textContent = textContent;
    parentContainer.appendChild(span);
    return span;
  }

  static createImageIn(
    parentContainer: HTMLElement,
    className: string,
    id: string,
    src: string,
    alt: string
  ): HTMLImageElement {
    const img = document.createElement("img");
    img.className = className;
    img.id = id;
    img.src = src;
    img.alt = alt;
    parentContainer.appendChild(img);
    return img;
  }

  static createParagraphIn(
    parentContainer: HTMLElement,
    className: string,
    id: string,
    textContent: string
  ): HTMLParagraphElement {
    const p = document.createElement("p");
    p.className = className;
    p.id = id;
    p.textContent = textContent;
    parentContainer.appendChild(p);
    return p;
  }
  static createHeaderIn(
    parentContainer: HTMLElement,
    className: string,
    id: string,
    textContent: string,
    level: number
  ): HTMLHeadingElement {
    const header = document.createElement(`h${level}`) as HTMLHeadingElement;
    header.className = className;
    header.id = id;
    header.textContent = textContent;
    parentContainer.appendChild(header);
    return header;
  }

  static createFormIn(
    parentContainer: HTMLElement,
    className: string,
    id: string
  ): HTMLFormElement {
    const form = document.createElement("form");
    form.className = className;
    form.id = id;
    parentContainer.appendChild(form);
    return form;
  }

  static createLabelIn(
    parentContainer: HTMLElement,
    className: string,
    id: string,
    textContent: string
  ): HTMLLabelElement {
    const label = document.createElement("label");
    label.className = className;
    label.id = id;
    label.textContent = textContent;
    parentContainer.appendChild(label);
    return label;
  }

  static createInputIn(
    parentContainer: HTMLElement,
    className: string,
    id: string,
    type: string,
    placeholder: string
  ): HTMLInputElement {
    const input = document.createElement("input");
    input.className = className;
    input.id = id;
    input.type = type;
    input.placeholder = placeholder;
    parentContainer.appendChild(input);
    return input;
  }
}
