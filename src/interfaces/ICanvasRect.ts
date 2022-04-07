interface ICanvasElement {
  create(x: number, y: number, name: string): void
  move(x: number, y: number): void
  delete(): void
}

export { ICanvasElement }
