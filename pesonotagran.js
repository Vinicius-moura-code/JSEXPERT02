/* 
0 Obter um usuario
1 Obter numero de usuario a paritir de seu ID 
2 Obter o endereço do usuario pelo ID
*/
//Importamos um mósulo interno do node;

const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario(callback) {
  // Quando de algum problema -> reject(ERROR)
  //qUANDO SUCESSO -> resolv
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
      //return reject(new Error('Deu ruim mesmo'))

      return resolve({
        id: 1,
        nome: 'adaudina',
        dataNascimento: new Date()
      })
    }, 1000)

  })
}

function obterTelefone(idUsuario) {
  return new Promise(function resolverPromise(resolve, reject) {

    setTimeout(() => {
      return resolve({
        numero: '932245 4654',
        ddd: 44
      })
    }, 2000);
  })
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'Rua das mangas',
      numero: 11
    })
  }, 2000);
}

//1º Adicionar a palavra async -> automaticamente ela retornara uma promisse
main();
async function main() {
  try {
    console.time('medida-promisse')
    const usuario = await obterUsuario();
    //const telefone = await obterTelefone(usuario.id);
    //const endereco = await obterEnderecoAsync(usuario.id);
    const resultado = await Promisse.all([
      obterTelefone(usuario.id),
      obterEnderecoAsync( usuario.id)
    ])
    const endereco = resultado[1]
    const telefone = resultado[0]
    console.log(`
    Nome: ${usuario.nome}
    Endereço: ${endereco.rua}, ${endereco.numero}
    Telefone: (${telefone.ddd}) ${telefone.numero}
   `)
   console.timeEnd('medida-promisse')
  }
  catch{
    console.error('Deu ruim', error)
  }
}

/*const usuarioPromisse = obterUsuario()
//Para manipular o sucesso se usa a função .then
//Para manipular erros, usamos .catch
usuarioPromisse
  .then(function (usuario) {
    return obterTelefone(usuario.id)
      .then(function resolverTelefone(result) {
        return {
          usuario: {
            nome: usuario.nome,
            id: usuario.id
          },
          telefone: result
        }
      })
  })
  .then(function (resultado) {
    const endereco = obterEnderecoAsync(resultado.usuario.id);
    return endereco.then(function resolverEndereco(result) {
      return {
        usuario: resultado.usuario,
        telefone: resultado.telefone,
        endereco: result
      }
    });
  })
  .then(function (resultado) {
    console.log(`
    Nome: ${resultado.usuario.nome}
    Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
    Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.numero}
    `)
  })
  .catch(function (error) {
    console.error('Deu ruim', error);
  })
*/
/*obterUsuario(function resolverUsuario(error, usuario) {
  if (error) {
    console.log('Deu ruim', error);
    return;
  };
  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if (error1) {
      console.log('Deu ruim no telefone', error);
      return;
    }
    obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
      if (error2) {
        console.log('Deu ruim no endereço', error);
        return;
      }
      console.log(`
      Nome: ${usuario.nome}
      Endereço: ${endereco.rua}, ${endereco.numero}
      Telefone: (${telefone.ddd}) ${telefone.numero}
      `);
    })
  });
})
//const telefone = obterTelefone(usuario.id);*/
