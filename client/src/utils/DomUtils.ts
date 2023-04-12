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
}
