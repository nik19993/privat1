import React from "react";
import { ValidationError } from "../types";

interface ErrorMessagesProps {
    errors: ValidationError;
    recommendations: string[];
}

const ErrorMessages: React.FC<ErrorMessagesProps> = ({
    errors,
    recommendations,
}) => {
    return (
        <div>
            {recommendations.map((recommendation, index) => (
                <div key={index} className="text-red-500">
                    {recommendation}
                </div>
            ))}
        </div>
    );
};

export default ErrorMessages;
