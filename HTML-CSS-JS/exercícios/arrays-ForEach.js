// Crie um array com emails de alunos (6x)
// Utilizar forEach para percorrer o array e devolver a mensagem na tela
// "Email enviado para "email" com sucesso!

let ListaEmails = ['mTeixeira@gmail.com', 'kaue@hotmail.com','liu@uol.com.br', 'luan@bol.com.br', 'Jac@gmail.com', 'LeoBike@outlook.com']

ListaEmails.forEach(email => {
    console.log(`Email enviado para '${email}' com sucesso!`);
});