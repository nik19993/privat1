import React, { useState } from "react";
import InputField from "./InputField";
import { ValidationError, ValidationResponse } from "../types";
import ErrorMessages from "./ErrorMessages";
import Select from "./Select";
import { handleChange, handleSubmit } from "../lib/formUnits";

const currencies = ["UAH", "USD", "EUR"];

const ClientForm: React.FC = () => {
    const [formData, setFormData] = useState({
        idClient: "",
        dateBirthday: "",
        phone: "",
        mail: "",
        address: "",
        monthSalary: "",
        currSalary: "UAH",
        requestLimit: "",
    });
    const [errors, setErrors] = useState<ValidationError>({});
    const [recommendations, setRecommendations] = useState<string[]>([]);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [serverError, setServerError] = useState<string | null>(null);

    return (
        <form
            onSubmit={(e) =>
                handleSubmit(
                    e,
                    formData,
                    setErrors,
                    setRecommendations,
                    setSuccessMessage,
                    setServerError
                )
            }
            className="p-4 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4"
        >
            <InputField
                label="ID Client"
                name="idClient"
                type="number"
                value={formData.idClient}
                onChange={(e) => handleChange(e, formData, setFormData)}
            />
            <InputField
                label="Date of Birth"
                name="dateBirthday"
                type="date"
                value={formData.dateBirthday}
                onChange={(e) => handleChange(e, formData, setFormData)}
            />
            <InputField
                label="Phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange(e, formData, setFormData)}
            />
            <InputField
                label="Email"
                name="mail"
                type="email"
                value={formData.mail}
                onChange={(e) => handleChange(e, formData, setFormData)}
            />
            <InputField
                label="Address"
                name="address"
                type="text"
                value={formData.address}
                onChange={(e) => handleChange(e, formData, setFormData)}
            />
            <InputField
                label="Monthly Salary"
                name="monthSalary"
                type="number"
                value={formData.monthSalary}
                onChange={(e) => handleChange(e, formData, setFormData)}
            />
            <Select
                name="currSalary"
                value={formData.currSalary}
                onChange={(e) => handleChange(e, formData, setFormData)}
                options={currencies}
                label={"Currency"}
            />
            <InputField
                label="Requested Credit Limit"
                name="requestLimit"
                type="number"
                value={formData.requestLimit}
                onChange={(e) => handleChange(e, formData, setFormData)}
            />
            <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Submit
            </button>
            <ErrorMessages errors={errors} recommendations={recommendations} />
            {serverError && <div className="text-red-500">{serverError}</div>}
            {successMessage && (
                <div className="text-green-500">{successMessage}</div>
            )}
        </form>
    );
};

export default ClientForm;
