import { Location } from './location.entity';
export declare class Venue {
    name: string;
    market: string;
    capacity: string;
    surface: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    id: string;
    field_orientation: string;
    stadium_type: string;
    time_zone: string;
    location?: Location | null;
}
