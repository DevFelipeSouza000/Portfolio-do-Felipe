const button = document.querySelector('.botao-gerar')
const textarea = document.querySelector('.caixa-texto')
const status = document.querySelector('.status')

const iframeCodigo = document.querySelector('.iframe-codigo')
const resultadoCodigo = document.querySelector('.resultado-codigo')
const botaoCopiar = document.querySelector('.botao-copiar')

let codigoParaCopiar = ""

async function gerarCodigo() {
    const textoUsuario = textarea.value.trim()

    if (!textoUsuario) {
        status.innerText = "Digite algo primeiro 😅"
        return
    }

    // 🚨 AVISO PARA VERSÃO ONLINE
    status.innerText = "Versão demo online (API local não disponível) ⚠️"

    // Código fake só pra não quebrar layout
    const codigoGerado = `
    <div style="padding:20px;background:#222;color:white;border-radius:10px">
        <h2>Exemplo de componente</h2>
        <button style="background:red;color:white;padding:10px;border:none;border-radius:8px">
            Botão exemplo
        </button>
    </div>
    `

    codigoParaCopiar = codigoGerado

    // Mostrar código
    iframeCodigo.srcdoc = `
        <body style="background:#1e1e1e;color:#fff;font-family:monospace;padding:20px;">
            <pre>${codigoGerado
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')}
            </pre>
        </body>
    `

    // Mostrar preview
    resultadoCodigo.setAttribute("sandbox", "allow-scripts")
    resultadoCodigo.srcdoc = codigoGerado
}

// Copiar código
botaoCopiar.addEventListener('click', () => {
    if (!codigoParaCopiar) {
        alert("Nada para copiar ainda 😅")
        return
    }

    navigator.clipboard.writeText(codigoParaCopiar)
    alert("Código copiado! 🎉")
})

button.addEventListener('click', gerarCodigo)
