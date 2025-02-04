export const makeNumeric = (input) => {
  let sanitizedInput = input.replace(/[^0-9.]/g, ''); // Ensure there's only one decimal point
  const parts = sanitizedInput.split('.');
  if (parts.length > 2) {
    sanitizedInput = parts[0] + '.' + parts.slice(1).join('');
  }
  return sanitizedInput;
};
