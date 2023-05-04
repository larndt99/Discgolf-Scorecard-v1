

export interface Hole {
    hole: number;
    par: number;
}


export interface Course {
    name: string;
    address: string;
    holes: Hole[];
}

