generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Professor {
  id        Int       @id @default(autoincrement())
  nome      String
  email     String    @unique
  telefone  String?
  turmas    Turma[]
  criadoEm  DateTime  @default(now())
}

model Turma {
  id           Int        @id @default(autoincrement())
  nome         String
  professorId  Int
  professor    Professor  @relation(fields: [professorId], references: [id], onDelete: Cascade)
  criadoEm     DateTime   @default(now())
}
