import { Subset } from "./subset.model";

export interface Sector{

_id?: string;
name: string;
number?: number;
vitality?: number;
crop?: string;
plantCount?: number;
recommendation?: string;
count?: Object;
greenhouseId?: string;
users?: string[];
createdAt?: Date;
modifiedAt?: Date;
//Propios
subsets?: Subset[];
}