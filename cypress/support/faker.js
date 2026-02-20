import { faker } from '@faker-js/faker'


export function gerarUsuario() {
const sexo = faker.person.sexType()

const nome = faker.person.firstName(sexo)
const sobrenome = faker.person.lastName(sexo)
const telefone = faker.number.int({ min: 1000000000, max: 9999999999 }).toString()

  return {
  nome,
  sobrenome,
  genero: sexo,
  telefone,
  email: faker.internet.email({ firstName: nome, lastName: sobrenome })
  }
}