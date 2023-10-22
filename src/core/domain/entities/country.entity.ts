import { Entity } from '@/core/base/entity'

export class CountryEntity extends Entity {
    name: string;
    code: string;
    iso3: string;
    iso2: string;
    phoneCode: string;
    capital: string;
    currency: string;
    native: string;
    emoji: string;
    emojiU: string;
}