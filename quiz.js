const perguntas = [
      {
        pergunta: "1. O que pode causar enchentes urbanas?",
        opcoes: ["A) Excesso de vegetação", "B) Impermeabilização do solo", "C) Ar seco", "D) Ventos fortes"],
        correta: "B"
      },
      {
        pergunta: "2. Qual das opções ajuda a reduzir enchentes?",
        opcoes: ["A) Construção de calçadas", "B) Plantio de árvores", "C) Asfalto", "D) Estacionamentos"],
        correta: "B"
      },
      {
        pergunta: "3. As enchentes são agravadas por:",
        opcoes: ["A) Coleta seletiva", "B) Chuvas moderadas", "C) Lixo nas ruas", "D) Reciclagem"],
        correta: "C"
      },
      {
        pergunta: "4. Qual órgão geralmente emite alertas de enchentes no Brasil?",
        opcoes: ["A) INSS", "B) IBGE", "C) INMET", "D) MEC"],
        correta: "C"
      },
      {
        pergunta: "5. O que pode piorar o escoamento da água?",
        opcoes: ["A) Bocais de escoamento livres", "B) Bueiros entupidos", "C) Galerias subterrâneas", "D) Rios limpos"],
        correta: "B"
      },
      {
        pergunta: "6. O que fazer em caso de enchente?",
        opcoes: ["A) Entrar na água", "B) Ficar em áreas baixas", "C) Buscar abrigo elevado", "D) Dormir"],
        correta: "C"
      },
      {
        pergunta: "7. Enchentes podem causar:",
        opcoes: ["A) Benefícios econômicos", "B) Poluição e doenças", "C) Melhoria de estradas", "D) Mais empregos"],
        correta: "B"
      },
      {
        pergunta: "8. Um sistema de drenagem eficiente:",
        opcoes: ["A) Impede 100% das chuvas", "B) Reduz o impacto das enchentes", "C) Gera alagamentos", "D) Causa erosão"],
        correta: "B"
      },
      {
        pergunta: "9. A educação ambiental pode:",
        opcoes: ["A) Ser inútil", "B) Reduzir a consciência pública", "C) Ajudar na prevenção", "D) Aumentar lixo"],
        correta: "C"
      },
      {
        pergunta: "10. Um exemplo de ação sustentável é:",
        opcoes: ["A) Jogar lixo na rua", "B) Reaproveitar água da chuva", "C) Lavar calçada com mangueira", "D) Cortar árvores"],
        correta: "B"
      }
    ];

    const quizForm = document.getElementById('quizForm');

    perguntas.forEach((q, i) => {
      const div = document.createElement('div');
      div.className = 'question';
      div.innerHTML = `<h3>${q.pergunta}</h3>` +
        q.opcoes.map((op, j) => `
          <label>
            <input type="radio" name="q${i}" value="${op.charAt(0)}" required>
            ${op}
          </label>`
        ).join('');
      quizForm.appendChild(div);
    });

    const btn = document.createElement('button');
    btn.type = 'submit';
    btn.textContent = 'Ver resultado';
    quizForm.appendChild(btn);

    quizForm.addEventListener('submit', function (e) {
      e.preventDefault();
      let acertos = 0;
      perguntas.forEach((q, i) => {
        const resposta = quizForm[`q${i}`].value;
        if (resposta === q.correta) acertos++;
      });
      document.getElementById('result').textContent = `Você acertou ${acertos} de ${perguntas.length} perguntas.`;
    });
