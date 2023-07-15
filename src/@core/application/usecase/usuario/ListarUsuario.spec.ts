import { UsuarioRepositoryMemory } from 'src/@core/infra/database/memory/UsuarioRepositoryMemory';
import { CriarUsuario } from './CriarUsuario';

describe('ListarUsuario testes', () => {
  let useCase: CriarUsuario;
  let repo: UsuarioRepositoryMemory;

  beforeEach(async () => {
    repo = new UsuarioRepositoryMemory();
    useCase = new CriarUsuario(repo);
  });

  it('deve listar usuarios', async () => {
    await useCase.execute({
      nome: 'Alan Miranda',
      email: 'alan@miranda.com',
      senha: '123456',
    });

    await useCase.execute({
      nome: 'Raiane Bele',
      email: 'raiane@bele.com',
      senha: '123456',
    });

    expect(repo.items.length).toEqual(2);
  });
});