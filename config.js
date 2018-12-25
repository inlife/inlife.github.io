const name          = 'Vladyslav Hrytsenko'
const role          = 'Software Engineer'
const site          = 'https://inlife.github.io/'
const yearsOfExp    = (new Date()).getFullYear() - 2010
const keywords      = ['inlife', 'inlife360'].concat(name.split(' '), role.split(' ')).join(' ')
const description   = `Hey! I am ${name}, ${role} with >${yearsOfExp} years of experience.`;

export default { name, role, site, keywords, description, yearsOfExp }
