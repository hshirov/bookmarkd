export const removeHtmlTags = (input: string) => input.replace(/(<([^>]+)>)/gi, '');
