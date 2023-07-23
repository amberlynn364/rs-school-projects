import { createElement } from '../../helpers/create-elements';
import './footer.scss';

const footer = createElement({
  tag: 'footer',
  classLists: ['footer', 'content-wrapper'],
});

const GitHubLink = document.createElement('a');
GitHubLink.href = 'https://github.com/amberlynn364';
GitHubLink.textContent = 'My GitHub';
GitHubLink.target = '_blank';

const yearOfCreation = createElement({
  tag: 'span',
  classLists: [],
  textContent: '2023',
});

const RSSchoolWrapper = createElement({
  tag: 'div',
  classLists: ['rs'],
});

const linkToRsSchool = document.createElement('a');
linkToRsSchool.href = 'https://rs.school/js/';
linkToRsSchool.target = '_blank';

const rsLogo = createElement({
  tag: 'img',
  classLists: ['rs-logo'],
});
if (rsLogo instanceof HTMLImageElement) {
  rsLogo.src = 'https://rs.school/images/rs_school_js.svg';
  rsLogo.alt = 'RS School logo';
}
linkToRsSchool.append(rsLogo);
RSSchoolWrapper.append(linkToRsSchool);

footer.append(GitHubLink, yearOfCreation, RSSchoolWrapper);

document.body.append(footer);
