const descProcedimento = "A gluteoplastia, também conhecida como implante de prótese glútea, é uma cirurgia que visa melhorar o formato e o volume dos glúteos, proporcionando maior harmonia e proporção ao corpo. O procedimento é indicado para quem deseja aumentar ou remodelar a região glútea, garantindo resultados estéticos naturais e duradouros.";

const tituloProcCard01 = "Avaliação Inicial";
const tituloProcCard02 = "Preparação";
const tituloProcCard03 = "Procedimento";
const tituloProcCard04 = "Recuperação";

const descProcCard01 = "Avaliação detalhada da região glútea e do corpo do paciente, considerando suas expectativas estéticas e características físicas. O cirurgião define o plano cirúrgico, incluindo o tipo e tamanho da prótese mais adequados.";
const descProcCard02 = "Exames pré-operatórios para garantir a segurança do paciente e orientações sobre cuidados gerais antes da cirurgia, como dieta equilibrada, suspensão de medicamentos que possam interferir no procedimento e preparação psicológica.";
const descProcCard03 = "Cirurgia realizada com técnicas avançadas para inserção de próteses glúteas, visando aumentar e remodelar a região com resultados naturais. O procedimento é personalizado para atender às necessidades e objetivos de cada paciente.";
const descProcCard04 = "Acompanhamento pós-operatório com orientações sobre cuidados com a ferida, uso de malha compressiva, alimentação adequada e atividades físicas permitidas. O objetivo é garantir uma cicatrização segura e resultados satisfatórios.";
export default function Procedimento() {
    return (
        <div id="procedimento" className="min-h-screen bg-gradient-to-r from-zinc-800 to-zinc-900 flex flex-col items-center justify-center px-3 space-y-20 py-12">
            <h1 className="text-orange-200 text-5xl max-lg:text-3xl">O Procedimento</h1>
            <p className="text-orange-100 text-2xl text-center px-26 max-lg:text-xl">{descProcedimento}</p>

            <div className="grid grid-cols-2 gap-12 max-lg:grid-cols-1 justify-items-center"> 

                <div className="procCard cardProcHover">
                    <h2 className="numProcCard">01</h2>
                    <h2 className="h2ProcCard">{tituloProcCard01}</h2>
                    <p className="pProcCard">{descProcCard01}</p>
                    <button className="verMaisProcCard">Mais detalhes</button>
                </div>

                <div className="procCard">
                    <h2 className="numProcCard">02</h2>
                    <h2 className="h2ProcCard">{tituloProcCard02}</h2>
                    <p className="pProcCard">{descProcCard02}</p>
                    <button className="verMaisProcCard">Mais detalhes</button>
                </div>

                <div className="procCard">
                    <h2 className="numProcCard">03</h2>
                    <h2 className="h2ProcCard">{tituloProcCard03}</h2>
                    <p className="pProcCard">{descProcCard03}</p>
                    <button className="verMaisProcCard">Mais detalhes</button>
                </div>

                <div className="procCard">
                    <h2 className="numProcCard">04</h2>
                    <h2 className="h2ProcCard">{tituloProcCard04}</h2>
                    <p className="pProcCard">{descProcCard04}</p>
                    <button className="verMaisProcCard">Mais detalhes</button>
                </div>

            </div>
        </div>
    )
}
