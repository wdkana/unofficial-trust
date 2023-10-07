import { domain } from "@assets/dummies/trustplus.json";
import { categoriesCount } from "@assets/dummies/trustplus-total.json";
import { suggestedDomain } from "./suggestedDomain";

type DomainResult = {
    domain: string;
    suggestedDomain: string;
    status: boolean;
};

type StringifyJson = {
    [key: string]: string;
};

type CategorisResult = {
    categoriesCount: StringifyJson;
};

//! Get Domains Formatted Response
export const domainResponse = (searchInput: string): DomainResult => {
    const convertedDomains = JSON.stringify(domain);
    const chunk = convertedDomains.split(",");
    const isMatch = convertedDomains.includes(searchInput.toLowerCase());
    
    return {
        domain: searchInput,
        suggestedDomain: suggestedDomain(chunk, searchInput),
        status: isMatch,
    };
};

//! Get Count Data From Categories
export const categoryResponse = (): CategorisResult => {
    return { categoriesCount }
};
