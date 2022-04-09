import { IElementData } from "../../../canvas/shapes/RectElement";
import { IControlInfo } from "../IControlInfo";

class ControlInfosBar implements IControlInfo {
  private static _instance: ControlInfosBar;

  private container: HTMLElement;

  constructor() {
    this.container = document.getElementById('object-info-container') as HTMLElement;
  }

  public static Instance() {
    return this._instance || (this._instance = new this())
  }

  public static getInstance() {
    return this._instance;
  }
 
  show(): void {
    this.container.style.display = 'inline-block';
  }
  
  hide(): void {
    this.container.style.display = 'none';
  }

  setInfos(id: string, label: string, locations: IElementData[]): void {
    let infoId = document.getElementById('object-info-id');
    let infoLabel = document.getElementById('object-info-label');
    let infoLocations = document.getElementById('object-info-locations');
    
    infoId && (infoId.textContent = id);
    infoLabel && (infoLabel.textContent = label);

    const textLocations = locations.map(location => location.label);
    infoLocations && (infoLocations.textContent = [...textLocations, label].join(', '));
  }

  clearInfos(): void {
    let infoId = document.getElementById('object-info-id');
    let infoLabel = document.getElementById('object-info-label');
    let infoLocations = document.getElementById('object-info-locations');
    
    infoId && (infoId.textContent = '');
    infoLabel && (infoLabel.textContent = '');
    infoLocations && (infoLocations.textContent = '');
  }
}

export { ControlInfosBar };
