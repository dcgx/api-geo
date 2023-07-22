import { Entity } from '@/core/base/entity'

export class CityEntity extends Entity {
    name: string;
    iso2: string;
    countryId: string;
    countryCode: string;
}