import { censored_domain } from "@assets/dummies/trustplus-censored.json";

export const suggestedDomain = (chunk: any, searchInput: string): string => {
    let domainPrediction: string;
    
    const suggestedDomain: string = chunk.find((item: string) => item.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()));
    const indexOfSensorDomain: number = chunk.findIndex((item: string) => item.toLowerCase().includes(searchInput.toLowerCase()));
    
    return suggestedDomain == `"${searchInput}"` ? domainPrediction = suggestedDomain : domainPrediction = censored_domain[indexOfSensorDomain]
}