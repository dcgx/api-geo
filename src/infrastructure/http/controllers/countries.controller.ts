import { Controller, Get, Param } from "@nestjs/common";
import { GetCitiesByCountryDto } from "../dtos/get-cities-by-country.dto";
import { GetCitiesByCountryUseCase } from "src/use-cases/get-cities-by-country-use-case/get-cities-by-country-use-case";

@Controller('countries')
export class CountriesController {
    constructor(
        private readonly getCitiesByCountryUseCase: GetCitiesByCountryUseCase
    ) { }

    @Get('')
    async getAllCountries() { }

    @Get(':countryId')
    async getByCountryId() { }

    @Get(':countryId/states')
    async getStatesByCountryId() { }

    @Get(':countryId/states/:stateId/cities')
    async getCitiesByCountryIdAndStateId() { }

    @Get(':countryId/cities')
    async getCitiesByCountryId(
        @Param('countryId') countryId: string
    ): Promise<GetCitiesByCountryDto> {
        const { cities } = await this.getCitiesByCountryUseCase.execute({
            countryId
        })

        return {
            cities
        };
    }

    
}