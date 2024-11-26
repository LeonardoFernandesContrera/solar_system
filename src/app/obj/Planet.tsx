class Planet {
    size: number;
    height: number;
    weight: number;
    position: number;
    color: string;

    public constructor(size: number, height: number, weight: number, position: number, color: string){
        this.size = size;
        this.height = height;
        
        this.weight = weight;
        this.position = position;
        this.color = color
    }


    createPlanet() {
        return (
          <div className={`w-${this.size} h-${this.height} bg-${this.color}`}></div>
        );
      }
}