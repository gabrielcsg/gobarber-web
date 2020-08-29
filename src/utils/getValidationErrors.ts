import { ValidationError } from 'yup';


// key vai ser qualquer variavel desde que seja uma string
interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(error: ValidationError): Errors {
  const validationErrors: Errors = {} ;

  // percorre o inner e seta um campo no objeto com a mensagem de erro
  error.inner.forEach(err => {
    validationErrors[err.path] = err.message;
  });

  return validationErrors;
}