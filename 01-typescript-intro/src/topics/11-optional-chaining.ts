
export interface Passenger {
    name: string;
    children?: string[];
}



const Passenger1: Passenger = {
    name: 'Leon',
}
const Passenger2: Passenger = {
    name: 'Mary',
    children: ['yogui', 'sasha']
}

const returnChildrenNumber = (passenger: Passenger): number => {
    
    const howManyChildren = passenger.children?.length || 0;
    // const howManyChildren = passenger.children!.length;

    console.log(passenger.name, howManyChildren);

    return howManyChildren;
}


returnChildrenNumber(Passenger1);