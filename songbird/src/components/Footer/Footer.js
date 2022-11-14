import { elementsCreate } from 'src/utils/create-elements';
import styles from './Footer.module.scss';

export const renderFooter = () => {
  const footer = document.createElement('footer');
  footer.classList.add(styles['footer']);

  const footerContainer = elementsCreate('div', 'footer__container');

  const gitLink = elementsCreate('a', 'footer__logo_git');
  gitLink.setAttribute('href', 'https://github.com/Alesia-Abaeva');
  gitLink.setAttribute('target', '_blank');
  gitLink.setAttribute('title', 'logo github');

  const years = elementsCreate('div', 'footer__app-year');
  years.innerHTML = '2022';

  const rsSchoolLink = elementsCreate('a', 'footer__logo-rsSchool');
  rsSchoolLink.setAttribute('href', 'https://rs.school/js/');
  rsSchoolLink.setAttribute('target', '_blank');
  rsSchoolLink.setAttribute('title', 'logo rs-school');

  footerContainer.append(gitLink, years, rsSchoolLink);

  footer.append(footerContainer);

  return footer;
};
