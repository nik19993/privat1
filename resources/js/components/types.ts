export interface ValidationError {
    [field: string]: string[];
}

export interface ValidationResponse {
    errors: ValidationError;
    recommendations: string[];
}

export interface FormData {
    idClient: string;
    dateBirthday: string;
    phone: string;
    mail: string;
    address: string;
    monthSalary: string;
    currSalary: string;
    requestLimit: string;
}
