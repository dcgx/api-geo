import { UseCase } from "@/core/base/use-case";
import { CityEntity } from "@/core/domain/entities/city.entity";
import { Injectable } from "@nestjs/common";

export interface IGetCitiesByCountryRequest {
    countryId: string;
}

export interface IGetCitiesByCountryResponse {
    cities: CityEntity[]
}

@Injectable()
export class GetCitiesByCountryUseCase implements UseCase<IGetCitiesByCountryRequest, IGetCitiesByCountryResponse> {
    execute(request: IGetCitiesByCountryRequest): Promise<IGetCitiesByCountryResponse> {
        const { countryId } = request;

        return Promise.resolve({
            cities: []
        })

    }
}