class MainCanvas {
  public static _instance: MainCanvas;
  
  constructor(public canvas: fabric.Canvas) {}

  public static Instance(canvas: fabric.Canvas): MainCanvas {
    return this._instance || (this._instance = new this(canvas));
  }

  public static getInstance(): MainCanvas  {
    return this._instance;
  }
}

export { MainCanvas };
