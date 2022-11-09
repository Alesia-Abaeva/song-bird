export const elementsCreate = (element, className) => {
  const createdElement = document.createElement(element);
  createdElement.classList.add(className);

  return createdElement;
};
