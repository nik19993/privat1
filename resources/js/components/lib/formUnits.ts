import { FormData, ValidationError, ValidationResponse } from "./../types";

export const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    formData: FormData,
    setFormData: React.Dispatch<React.SetStateAction<FormData>>
) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

export const handleSubmit = async (
    e: React.FormEvent,
    formData: FormData,
    setErrors: React.Dispatch<React.SetStateAction<ValidationError>>,
    setRecommendations: React.Dispatch<React.SetStateAction<string[]>>,
    setSuccessMessage: React.Dispatch<React.SetStateAction<string | null>>,
    setServerError: React.Dispatch<React.SetStateAction<string | null>>
) => {
    e.preventDefault();
    try {
        const response = await fetch("/api/clients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const errorData: ValidationResponse = await response.json();
            setErrors(errorData.errors);
            setRecommendations(errorData.recommendations);
            setSuccessMessage(null);
            setServerError(null);
            return;
        }

        const result = await response.json();
        setErrors({});
        setRecommendations([]);
        setSuccessMessage(
            `Ваш запит успішно відправлено! Номер заявки: ${result.Ref}. Рішення: ${result.decision}.`
        );
        setServerError(null);
        console.log(result);
    } catch (error) {
        setServerError("Виникла помилка сервера. Спробуйте пізніше.");
        setSuccessMessage(null);
    }
};
