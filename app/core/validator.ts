import Ajv, { ErrorObject } from 'ajv';

export interface ValidationResult<T> {
  valid: boolean;
  data?: T;
  errors?: string[];
}

const ajv = new Ajv({ allErrors: true, strict: false });

export const validateAgainstSchema = <T>(schema: object, payload: unknown): ValidationResult<T> => {
  const validate = ajv.compile<T>(schema);
  const valid = validate(payload);

  if (valid) {
    return { valid: true, data: payload as T };
  }

  return {
    valid: false,
    errors: formatErrors(validate.errors ?? []),
  };
};

const formatErrors = (errors: ErrorObject[]): string[] =>
  errors.map((error) => {
    const dataPath = error.instancePath || error.schemaPath;
    const message = error.message ?? 'validation error';
    return `${dataPath}: ${message}`;
  });
