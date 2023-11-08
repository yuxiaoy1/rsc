import { prisma } from '@/prisma'
import { faker } from '@faker-js/faker'

faker.seed(123)

export async function fakeUsers() {
  for (let i = 0; i < 1000; i++) {
    let firstname = faker.name.firstName()
    let lastname = faker.name.lastName()
    await prisma.user.create({
      data: {
        name: `${firstname} ${lastname}`,
        email: faker.internet.email(firstname, lastname),
      },
    })
  }
}
