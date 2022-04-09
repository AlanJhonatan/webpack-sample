import { IElementData } from "../../canvas/shapes/RectElement"

interface IControlInfo {
  show(): void
  hide(): void
  setInfos(
    id: string,
    label: string,
    locations: IElementData[],
  ): void
  clearInfos(): void
}

export { IControlInfo }
