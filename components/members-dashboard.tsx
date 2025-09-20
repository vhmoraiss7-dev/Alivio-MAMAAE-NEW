"use client"

import type React from "react"
import { useState } from "react"
import {
  HeartIcon,
  BookOpenIcon,
  SparklesIcon,
  MoonIcon,
  MusicalNoteIcon,
  UserGroupIcon,
  BeakerIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid"

const modules = [
  {
    id: "massagens",
    title: "Massagens na Gestação",
    icon: HeartIcon,
    description: "Técnicas seguras por trimestre para alívio e bem-estar",
    color: "from-rose-500 to-pink-600",
  },
  {
    id: "pega",
    title: "Método P.E.G.A. Amamentação",
    icon: BookOpenIcon,
    description: "Passo a passo para amamentação sem dor e pega correta",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "pos-parto",
    title: "Recuperação Pós-Parto",
    icon: SparklesIcon,
    description: "Autoestima, bem-estar físico e mental completo",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "sono",
    title: "Sono Tranquilo do Bebê",
    icon: MoonIcon,
    description: "Rotinas e técnicas para noites tranquilas",
    color: "from-blue-500 to-indigo-600",
  },
]

function getModuleContent(moduleId: string): string {
  const content: Record<string, string> = {
    massagens: `
      <div class="space-y-8">
        <div class="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-xl border border-rose-200">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🤱 Massagens na Gestação</h2>
          <p class="text-gray-700 leading-relaxed">
            Descubra técnicas seguras e eficazes de massagem para cada trimestre da gestação, 
            promovendo relaxamento, alívio de dores e fortalecimento do vínculo com seu bebê.
          </p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">✨ Benefícios Comprovados</h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> Redução de 70% nos níveis de cortisol (hormônio do estresse)</li>
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> Alívio significativo de dores lombares e ciática</li>
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> Melhora da qualidade do sono em até 80% dos casos</li>
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> Redução do inchaço nas pernas e pés</li>
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> Diminuição da ansiedade e fortalecimento do vínculo mãe-bebê</li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">🛍️ Materiais Necessários</h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> Óleo de amêndoas doces ou coco (morno)</li>
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> Toalhas limpas e macias</li>
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> Almofadas para apoio e conforto</li>
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> Ambiente aquecido e música relaxante</li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">📋 Passo a Passo - Massagem Completa (15-20 minutos)</h3>
          
          <div class="space-y-6">
            <div>
              <h4 class="font-semibold text-gray-800 mb-3">1. Preparação do Ambiente (2 minutos)</h4>
              <ol class="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>Aqueça o ambiente para 22-24°C</li>
                <li>Coloque música relaxante em volume baixo</li>
                <li>Aqueça as mãos esfregando-as</li>
                <li>Aplique óleo nas palmas (nunca direto na pele)</li>
              </ol>
            </div>

            <div>
              <h4 class="font-semibold text-gray-800 mb-3">2. Massagem nos Pés (5 minutos)</h4>
              <ol class="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li><strong>Posição:</strong> gestante sentada, pés no colo do parceiro</li>
                <li>Movimentos circulares na sola, pressão leve a moderada</li>
                <li>Deslize o polegar do calcanhar aos dedos (5-8 vezes cada pé)</li>
                <li>Massageie cada dedo individualmente com movimento de pinça</li>
                <li>Tornozelos: círculos lentos, 10 vezes cada direção</li>
              </ol>
            </div>

            <div>
              <h4 class="font-semibold text-gray-800 mb-3">3. Panturrilhas e Pernas (5 minutos)</h4>
              <ol class="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li><strong>Posição:</strong> gestante deitada de lado ou sentada</li>
                <li>Movimentos ascendentes do tornozelo ao joelho</li>
                <li>Use as duas mãos com pressão firme mas confortável</li>
                <li>Movimentos de "ordenha" na panturrilha</li>
                <li>Termine com drenagem suave em direção ao coração</li>
              </ol>
            </div>

            <div>
              <h4 class="font-semibold text-gray-800 mb-3">4. Região Lombar (8 minutos)</h4>
              <ol class="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li><strong>Posição:</strong> gestante sentada de costas para o parceiro</li>
                <li>Palmas na lombar, movimentos circulares amplos</li>
                <li>Pressão com polegares <strong>ao lado da coluna</strong> (nunca sobre ela)</li>
                <li>Movimentos de vai-e-vem da cintura às costelas</li>
                <li>Finalize com círculos suaves no sacro</li>
              </ol>
            </div>
          </div>
        </div>

        <div class="bg-amber-50 p-6 rounded-xl border border-amber-200">
          <h3 class="text-xl font-semibold text-amber-800 mb-4">⚠️ Contraindicações e Cuidados</h3>
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-amber-800 mb-2">NÃO fazer massagem em caso de:</h4>
              <ul class="space-y-1 text-amber-700">
                <li class="flex items-start"><span class="text-amber-500 mr-2">•</span> Gravidez de alto risco ou placenta prévia</li>
                <li class="flex items-start"><span class="text-amber-500 mr-2">•</span> Sangramento vaginal ativo</li>
                <li class="flex items-start"><span class="text-amber-500 mr-2">•</span> Febre ou pré-eclâmpsia severa</li>
                <li class="flex items-start"><span class="text-amber-500 mr-2">•</span> Histórico de trabalho de parto prematuro</li>
              </ul>
            </div>
            <div class="bg-amber-100 p-4 rounded-lg">
              <p class="text-amber-800 font-medium">
                <strong>PARE IMEDIATAMENTE</strong> se houver contrações, sangramento ou qualquer desconforto. 
                Sempre consulte seu obstetra antes de iniciar qualquer técnica de massagem.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">💡 Dicas Rápidas para Sucesso</h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> <strong>Frequência ideal:</strong> 2-3 vezes por semana, 15-20 minutos</li>
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> <strong>Melhor horário:</strong> Final da tarde ou antes de dormir</li>
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> <strong>Temperatura do óleo:</strong> Morno, nunca quente</li>
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> <strong>Pressão:</strong> Sempre confortável, nunca dolorosa</li>
            <li class="flex items-start"><span class="text-rose-500 mr-2">•</span> <strong>Comunicação:</strong> Pergunte sempre sobre o conforto</li>
          </ul>
        </div>
      </div>
    `,
    pega: `
      <div class="space-y-8">
        <div class="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🤱 Método P.E.G.A. de Amamentação</h2>
          <p class="text-gray-700 leading-relaxed">
            O método P.E.G.A. é uma técnica revolucionária que garante uma amamentação sem dor e eficaz. 
            Cada letra representa um passo fundamental para o sucesso da amamentação.
          </p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">🎯 O que significa P.E.G.A.?</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                <h4 class="font-bold text-emerald-800 mb-2">P - Posicionamento</h4>
                <p class="text-emerald-700 text-sm">Posição correta da mãe e do bebê</p>
              </div>
              <div class="bg-teal-50 p-4 rounded-lg border border-teal-200">
                <h4 class="font-bold text-teal-800 mb-2">E - Encaixe</h4>
                <p class="text-teal-700 text-sm">Encaixe perfeito da boca do bebê no seio</p>
              </div>
            </div>
            <div class="space-y-4">
              <div class="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
                <h4 class="font-bold text-cyan-800 mb-2">G - Garantia</h4>
                <p class="text-cyan-700 text-sm">Garantir que o bebê está sugando corretamente</p>
              </div>
              <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 class="font-bold text-blue-800 mb-2">A - Acompanhamento</h4>
                <p class="text-blue-700 text-sm">Acompanhar sinais de sucesso da mamada</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">📋 Passo a Passo do Método P.E.G.A.</h3>
          
          <div class="space-y-8">
            <div class="border-l-4 border-emerald-500 pl-6">
              <h4 class="text-lg font-semibold text-emerald-800 mb-3">P - POSICIONAMENTO (2-3 minutos)</h4>
              <ol class="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Posição da mãe:</strong> Costas retas, ombros relaxados, pés apoiados</li>
                <li><strong>Almofada de apoio:</strong> Use para elevar o bebê até a altura do seio</li>
                <li><strong>Barriga com barriga:</strong> Corpo do bebê voltado para você</li>
                <li><strong>Cabeça alinhada:</strong> Orelha, ombro e quadril do bebê em linha reta</li>
                <li><strong>Nariz livre:</strong> Certifique-se que o bebê pode respirar facilmente</li>
              </ol>
            </div>

            <div class="border-l-4 border-teal-500 pl-6">
              <h4 class="text-lg font-semibold text-teal-800 mb-3">E - ENCAIXE (1-2 minutos)</h4>
              <ol class="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Estimule o reflexo:</strong> Toque o lábio inferior do bebê com o mamilo</li>
                <li><strong>Boca bem aberta:</strong> Espere a boca abrir como um "bocejo"</li>
                <li><strong>Movimento rápido:</strong> Aproxime o bebê do seio (não o seio do bebê)</li>
                <li><strong>Lábios virados:</strong> Lábio inferior virado para fora, superior neutro</li>
                <li><strong>Aréola na boca:</strong> Mais aréola visível acima que abaixo da boca</li>
              </ol>
            </div>

            <div class="border-l-4 border-cyan-500 pl-6">
              <h4 class="text-lg font-semibold text-cyan-800 mb-3">G - GARANTIA (Durante toda a mamada)</h4>
              <ol class="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Som de deglutição:</strong> Ouça o bebê engolindo (som suave)</li>
                <li><strong>Movimento da mandíbula:</strong> Movimento amplo e rítmico</li>
                <li><strong>Bochechas redondas:</strong> Sem covinhas nas bochechas</li>
                <li><strong>Sem dor:</strong> Amamentação não deve doer após os primeiros segundos</li>
                <li><strong>Fluxo de leite:</strong> Sensação de "descida" do leite</li>
              </ol>
            </div>

            <div class="border-l-4 border-blue-500 pl-6">
              <h4 class="text-lg font-semibold text-blue-800 mb-3">A - ACOMPANHAMENTO (Pós-mamada)</h4>
              <ol class="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Bebê satisfeito:</strong> Relaxado, sonolento ou alerta e calmo</li>
                <li><strong>Seio mais macio:</strong> Sensação de esvaziamento</li>
                <li><strong>Mamilo íntegro:</strong> Formato normal, sem rachaduras</li>
                <li><strong>Duração adequada:</strong> 15-45 minutos por mamada</li>
                <li><strong>Frequência normal:</strong> 8-12 mamadas em 24 horas</li>
              </ol>
            </div>
          </div>
        </div>

        <div class="bg-red-50 p-6 rounded-xl border border-red-200">
          <h3 class="text-xl font-semibold text-red-800 mb-4">🚨 Sinais de Alerta - Procure Ajuda Se:</h3>
          <ul class="space-y-2 text-red-700">
            <li class="flex items-start"><span class="text-red-500 mr-2">•</span> Dor intensa que persiste durante toda a mamada</li>
            <li class="flex items-start"><span class="text-red-500 mr-2">•</span> Mamilos rachados ou sangrando</li>
            <li class="flex items-start"><span class="text-red-500 mr-2">•</span> Bebê não ganha peso adequadamente</li>
            <li class="flex items-start"><span class="text-red-500 mr-2">•</span> Menos de 6 fraldas molhadas por dia após o 5º dia</li>
            <li class="flex items-start"><span class="text-red-500 mr-2">•</span> Bebê muito sonolento ou irritado constantemente</li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">💡 Dicas Rápidas P.E.G.A.</h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start"><span class="text-emerald-500 mr-2">•</span> <strong>Pratique antes:</strong> Treine as posições durante a gravidez</li>
            <li class="flex items-start"><span class="text-emerald-500 mr-2">•</span> <strong>Paciência:</strong> Pode levar algumas tentativas para acertar</li>
            <li class="flex items-start"><span class="text-emerald-500 mr-2">•</span> <strong>Ambiente calmo:</strong> Local tranquilo facilita o processo</li>
            <li class="flex items-start"><span class="text-emerald-500 mr-2">•</span> <strong>Hidratação:</strong> Mantenha água sempre por perto</li>
            <li class="flex items-start"><span class="text-emerald-500 mr-2">•</span> <strong>Confiança:</strong> Seu corpo foi feito para isso!</li>
          </ul>
        </div>
      </div>
    `,
    "pos-parto": `
      <div class="space-y-8">
        <div class="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-xl border border-violet-200">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">✨ Recuperação Pós-Parto</h2>
          <p class="text-gray-700 leading-relaxed">
            O pós-parto é um período de transformação profunda. Este guia completo vai te ajudar a cuidar 
            do seu corpo, mente e autoestima durante esta fase única da maternidade.
          </p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">🎯 Fases da Recuperação</h3>
          <div class="space-y-4">
            <div class="bg-pink-50 p-4 rounded-lg border border-pink-200">
              <h4 class="font-bold text-pink-800 mb-2">Primeiras 6 semanas - Recuperação Física</h4>
              <p class="text-pink-700 text-sm">Foco na cicatrização, descanso e adaptação inicial</p>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-2">2-6 meses - Estabilização</h4>
              <p class="text-purple-700 text-sm">Retomada gradual das atividades e rotina</p>
            </div>
            <div class="bg-violet-50 p-4 rounded-lg border border-violet-200">
              <h4 class="font-bold text-violet-800 mb-2">6+ meses - Nova Identidade</h4>
              <p class="text-violet-700 text-sm">Construção da nova versão de si mesma</p>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">🏥 Cuidados Físicos Essenciais</h3>
          
          <div class="space-y-6">
            <div>
              <h4 class="font-semibold text-gray-800 mb-3">Primeiras 2 Semanas</h4>
              <ol class="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li><strong>Repouso absoluto:</strong> Fique na cama o máximo possível</li>
                <li><strong>Higiene íntima:</strong> Água morna, sem sabonete perfumado</li>
                <li><strong>Compressas mornas:</strong> Para alívio da dor perineal</li>
                <li><strong>Absorventes pós-parto:</strong> Troque a cada 2-3 horas</li>
                <li><strong>Hidratação intensa:</strong> 3-4 litros de água por dia</li>
              </ol>
            </div>

            <div>
              <h4 class="font-semibold text-gray-800 mb-3">Semanas 3-6</h4>
              <ol class="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li><strong>Caminhadas leves:</strong> 10-15 minutos por dia</li>
                <li><strong>Exercícios de Kegel:</strong> 3 séries de 10 repetições</li>
                <li><strong>Alongamentos suaves:</strong> Pescoço, ombros e costas</li>
                <li><strong>Cinta pós-parto:</strong> Use durante atividades</li>
                <li><strong>Alimentação nutritiva:</strong> Foco em proteínas e ferro</li>
              </ol>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">💆‍♀️ Cuidados com o Corpo</h3>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-rose-50 p-4 rounded-lg border border-rose-200">
                <h4 class="font-semibold text-rose-800 mb-2">Seios e Amamentação</h4>
                <ul class="text-rose-700 text-sm space-y-1">
                  <li>• Sutiã de amamentação confortável</li>
                  <li>• Conchas protetoras para mamilos</li>
                  <li>• Óleo de coco para hidratação</li>
                  <li>• Compressas mornas antes da mamada</li>
                </ul>
              </div>
              
              <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 class="font-semibold text-blue-800 mb-2">Pele e Estrias</h4>
                <ul class="text-blue-700 text-sm space-y-1">
                  <li>• Hidratante 2x ao dia</li>
                  <li>• Óleo de rosa mosqueta nas estrias</li>
                  <li>• Protetor solar sempre</li>
                  <li>• Esfoliação suave 1x por semana</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 class="font-semibold text-green-800 mb-2">Cabelos</h4>
                <ul class="text-green-700 text-sm space-y-1">
                  <li>• Shampoo suave sem sulfato</li>
                  <li>• Máscara nutritiva 1x por semana</li>
                  <li>• Evite química nos primeiros 6 meses</li>
                  <li>• Corte prático para facilitar o dia a dia</li>
                </ul>
              </div>
              
              <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 class="font-semibold text-yellow-800 mb-2">Região Íntima</h4>
                <ul class="text-yellow-700 text-sm space-y-1">
                  <li>• Sabonete íntimo pH neutro</li>
                  <li>• Calcinha de algodão</li>
                  <li>• Evite duchas vaginais</li>
                  <li>• Consulte sobre lubrificantes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">🧠 Saúde Mental e Emocional</h3>
          
          <div class="space-y-6">
            <div>
              <h4 class="font-semibold text-gray-800 mb-3">Estratégias de Autocuidado</h4>
              <ol class="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Aceite ajuda:</strong> Permita que outros cuidem de você</li>
                <li><strong>Durma quando o bebê dormir:</strong> Priorize o descanso</li>
                <li><strong>Converse sobre seus sentimentos:</strong> Com parceiro, família ou amigos</li>
                <li><strong>Mantenha expectativas realistas:</strong> Cada dia é uma vitória</li>
                <li><strong>Pratique gratidão:</strong> Anote 3 coisas boas do dia</li>
              </ol>
            </div>

            <div class="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 class="font-semibold text-amber-800 mb-3">⚠️ Sinais de Alerta - Baby Blues vs Depressão</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-medium text-amber-800 mb-2">Baby Blues (Normal)</h5>
                  <ul class="text-amber-700 text-sm space-y-1">
                    <li>• Choro fácil</li>
                    <li>• Irritabilidade leve</li>
                    <li>• Ansiedade ocasional</li>
                    <li>• Melhora em 2 semanas</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-medium text-red-800 mb-2">Depressão (Procure Ajuda)</h5>
                  <ul class="text-red-700 text-sm space-y-1">
                    <li>• Tristeza profunda persistente</li>
                    <li>• Perda de interesse em tudo</li>
                    <li>• Pensamentos de autolesão</li>
                    <li>• Sintomas por mais de 2 semanas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">💕 Retomada da Intimidade</h3>
          
          <div class="space-y-4">
            <div class="bg-pink-50 p-4 rounded-lg border border-pink-200">
              <h4 class="font-semibold text-pink-800 mb-2">Quando Retomar?</h4>
              <ul class="text-pink-700 text-sm space-y-1">
                <li>• Após liberação médica (geralmente 6-8 semanas)</li>
                <li>• Quando você se sentir pronta emocionalmente</li>
                <li>• Sem pressão ou pressa</li>
                <li>• Comunicação aberta com o parceiro</li>
              </ul>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 class="font-semibold text-purple-800 mb-2">Dicas para o Recomeço</h4>
              <ul class="text-purple-700 text-sm space-y-1">
                <li>• Use lubrificante à base de água</li>
                <li>• Comece devagar e com carinho</li>
                <li>• Explore outras formas de intimidade</li>
                <li>• Converse sobre contraceptivos</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">💡 Dicas Rápidas de Recuperação</h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start"><span class="text-violet-500 mr-2">•</span> <strong>Rotina flexível:</strong> Adapte-se ao ritmo do bebê</li>
            <li class="flex items-start"><span class="text-violet-500 mr-2">•</span> <strong>Rede de apoio:</strong> Mantenha contato com outras mães</li>
            <li class="flex items-start"><span class="text-violet-500 mr-2">•</span> <strong>Tempo para si:</strong> Mesmo que sejam 10 minutos por dia</li>
            <li class="flex items-start"><span class="text-violet-500 mr-2">•</span> <strong>Documentar momentos:</strong> Fotos e diário da maternidade</li>
            <li class="flex items-start"><span class="text-violet-500 mr-2">•</span> <strong>Celebrar conquistas:</strong> Cada pequeno progresso importa</li>
          </ul>
        </div>
      </div>
    `,
    sono: `
      <div class="space-y-8">
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🌙 Sono Tranquilo do Bebê</h2>
          <p class="text-gray-700 leading-relaxed">
            Descubra técnicas comprovadas para estabelecer uma rotina de sono saudável para seu bebê, 
            garantindo noites mais tranquilas para toda a família.
          </p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">⏰ Padrões de Sono por Idade</h3>
          <div class="space-y-4">
            <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">0-3 meses - Recém-nascido</h4>
              <ul class="text-blue-700 text-sm space-y-1">
                <li>• 14-17 horas por dia</li>
                <li>• Ciclos de 2-4 horas</li>
                <li>• Sem distinção dia/noite</li>
                <li>• Sono fragmentado é normal</li>
              </ul>
            </div>
            <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h4 class="font-bold text-indigo-800 mb-2">3-6 meses - Desenvolvimento</h4>
              <ul class="text-indigo-700 text-sm space-y-1">
                <li>• 12-15 horas por dia</li>
                <li>• Períodos mais longos à noite</li>
                <li>• 3-4 sonecas durante o dia</li>
                <li>• Início da rotina</li>
              </ul>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-2">6+ meses - Consolidação</h4>
              <ul class="text-purple-700 text-sm space-y-1">
                <li>• 11-14 horas por dia</li>
                <li>• 6-8 horas seguidas à noite</li>
                <li>• 2-3 sonecas diurnas</li>
                <li>• Rotina bem estabelecida</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">🏠 Ambiente Ideal para o Sono</h3>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 class="font-semibold text-gray-800 mb-2">Temperatura e Ventilação</h4>
                <ul class="text-gray-700 text-sm space-y-1">
                  <li>• 18-22°C (temperatura ideal)</li>
                  <li>• Ventilação adequada</li>
                  <li>• Evite correntes de ar diretas</li>
                  <li>• Use termômetro de ambiente</li>
                </ul>
              </div>
              
              <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 class="font-semibold text-yellow-800 mb-2">Iluminação</h4>
                <ul class="text-yellow-700 text-sm space-y-1">
                  <li>• Escuro total à noite</li>
                  <li>• Luz suave para mamadas noturnas</li>
                  <li>• Blackout nas janelas</li>
                  <li>• Evite telas 1h antes de dormir</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 class="font-semibold text-green-800 mb-2">Ruído</h4>
                <ul class="text-green-700 text-sm space-y-1">
                  <li>• Ruído branco constante</li>
                  <li>• Volume baixo (50-60 decibéis)</li>
                  <li>• Sons da natureza ou ventilador</li>
                  <li>• Evite ruídos súbitos</li>
                </ul>
              </div>
              
              <div class="bg-pink-50 p-4 rounded-lg border border-pink-200">
                <h4 class="font-semibold text-pink-800 mb-2">Segurança</h4>
                <ul class="text-pink-700 text-sm space-y-1">
                  <li>• Berço vazio (sem travesseiros/cobertores)</li>
                  <li>• Colchão firme</li>
                  <li>• Bebê sempre de barriga para cima</li>
                  <li>• Distância segura de fios e objetos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">📋 Rotina de Sono Passo a Passo</h3>
          
          <div class="space-y-6">
            <div class="border-l-4 border-blue-500 pl-6">
              <h4 class="text-lg font-semibold text-blue-800 mb-3">Rotina Noturna (30-45 minutos)</h4>
              <ol class="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Banho morno (5-10 min):</strong> Água morna, ambiente calmo</li>
                <li><strong>Massagem relaxante (5-10 min):</strong> Óleo morno, movimentos suaves</li>
                <li><strong>Roupa confortável:</strong> Pijama adequado para temperatura</li>
                <li><strong>Última mamada:</strong> Ambiente com pouca luz</li>
                <li><strong>Música suave ou história:</strong> 5-10 minutos</li>
                <li><strong>Colocar no berço acordado:</strong> Para aprender a adormecer sozinho</li>
              </ol>
            </div>

            <div class="border-l-4 border-indigo-500 pl-6">
              <h4 class="text-lg font-semibold text-indigo-800 mb-3">Sonecas Diurnas</h4>
              <ol class="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Observe sinais de sono:</strong> Bocejos, esfregar os olhos, irritabilidade</li>
                <li><strong>Ambiente semi-escuro:</strong> Cortinas fechadas, mas não totalmente escuro</li>
                <li><strong>Rotina encurtada:</strong> 10-15 minutos de preparação</li>
                <li><strong>Horários consistentes:</strong> Mesmos horários todos os dias</li>
                <li><strong>Duração adequada:</strong> 30min-2h dependendo da idade</li>
              </ol>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">🛠️ Técnicas de Acalmar</h3>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 class="font-semibold text-blue-800 mb-2">Método dos 5 S's</h4>
                <ul class="text-blue-700 text-sm space-y-1">
                  <li>• <strong>Swaddle:</strong> Enrolar o bebê</li>
                  <li>• <strong>Side:</strong> Posição de lado (só para acalmar)</li>
                  <li>• <strong>Shush:</strong> Som "shhhh" constante</li>
                  <li>• <strong>Swing:</strong> Movimento suave</li>
                  <li>• <strong>Suck:</strong> Sucção (dedo, chupeta)</li>
                </ul>
              </div>
              
              <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 class="font-semibold text-green-800 mb-2">Técnica do Embrulho</h4>
                <ul class="text-green-700 text-sm space-y-1">
                  <li>• Use manta de algodão</li>
                  <li>• Braços junto ao corpo</li>
                  <li>• Pernas livres para movimento</li>
                  <li>• Não muito apertado</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 class="font-semibold text-purple-800 mb-2">Método Pick-up/Put-down</h4>
                <ul class="text-purple-700 text-sm space-y-1">
                  <li>• Coloque o bebê no berço acordado</li>
                  <li>• Se chorar, pegue no colo até acalmar</li>
                  <li>• Coloque de volta ainda acordado</li>
                  <li>• Repita quantas vezes necessário</li>
                </ul>
              </div>
              
              <div class="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h4 class="font-semibold text-orange-800 mb-2">Técnica da Cadeira</h4>
                <ul class="text-orange-700 text-sm space-y-1">
                  <li>• Sente ao lado do berço</li>
                  <li>• A cada 3 dias, afaste a cadeira</li>
                  <li>• Até sair completamente do quarto</li>
                  <li>• Processo gradual e gentil</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-amber-50 p-6 rounded-xl border border-amber-200">
          <h3 class="text-xl font-semibold text-amber-800 mb-4">⚠️ Problemas Comuns e Soluções</h3>
          <div class="space-y-4">
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-semibold text-amber-800 mb-2">Regressão do Sono</h4>
                <ul class="text-amber-700 text-sm space-y-1">
                  <li>• Normal aos 4, 8-10, 12, 18 meses</li>
                  <li>• Mantenha a rotina consistente</li>
                  <li>• Seja paciente, é temporário</li>
                  <li>• Pode durar 2-6 semanas</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-amber-800 mb-2">Despertar Precoce</h4>
                <ul class="text-amber-700 text-sm space-y-1">
                  <li>• Verifique se o quarto está escuro</li>
                  <li>• Ajuste horário da última soneca</li>
                  <li>• Mantenha rotina mesmo se acordar cedo</li>
                  <li>• Pode ser fome ou fralda suja</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 class="text-xl font-semibold text-gray-800 mb-4">💡 Dicas Rápidas para Sono Tranquilo</h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start"><span class="text-blue-500 mr-2">•</span> <strong>Consistência é chave:</strong> Mesma rotina todos os dias</li>
            <li class="flex items-start"><span class="text-blue-500 mr-2">•</span> <strong>Sinais de sono:</strong> Aprenda a reconhecer quando está com sono</li>
            <li class="flex items-start"><span class="text-blue-500 mr-2">•</span> <strong>Paciência:</strong> Mudanças levam 1-2 semanas para se estabelecer</li>
            <li class="flex items-start"><span class="text-blue-500 mr-2">•</span> <strong>Flexibilidade:</strong> Adapte conforme o crescimento do bebê</li>
            <li class="flex items-start"><span class="text-blue-500 mr-2">•</span> <strong>Autocuidado:</strong> Descanse quando o bebê descansar</li>
          </ul>
        </div>
      </div>
    `,
  }

  return content[moduleId] || "<p>Conteúdo não encontrado.</p>"
}

const MembersDashboard: React.FC = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<"welcome" | "modules" | "extras" | "support">("welcome")

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-rose-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
                <HeartIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Alívio Mamãe</h1>
                <p className="text-xs text-gray-500">Área de Membros</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Online</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 mb-8 bg-white rounded-xl p-2 shadow-sm border border-gray-100">
          <button
            onClick={() => setActiveTab("welcome")}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === "welcome"
                ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Início
          </button>
          <button
            onClick={() => setActiveTab("modules")}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === "modules"
                ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Módulos
          </button>
          <button
            onClick={() => setActiveTab("extras")}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === "extras"
                ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Extras Premium
          </button>
          <button
            onClick={() => setActiveTab("support")}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === "support"
                ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Suporte
          </button>
        </div>

        {activeTab === "welcome" && (
          <div className="space-y-8">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full mb-6">
                <HeartIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 text-balance">
                Bem-vinda ao{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">
                  Alívio Mamãe
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
                Você está prestes a embarcar em uma jornada transformadora. Aqui você encontrará tudo o que precisa para
                viver uma maternidade mais leve, consciente e cheia de amor.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-rose-100 p-8 max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-8">
                <h2 className="text-2xl font-semibold text-gray-800">Sua Jornada Começa Agora</h2>
                <p className="text-gray-600">
                  Cada módulo foi cuidadosamente desenvolvido para apoiar você em cada fase desta experiência única.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {modules.map((module) => (
                  <div
                    key={module.id}
                    className="group cursor-pointer"
                    onClick={() => {
                      setActiveModule(module.id)
                      setActiveTab("modules")
                    }}
                  >
                    <div className="bg-gradient-to-r from-white to-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${module.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                        >
                          <module.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 mb-2">{module.title}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{module.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setActiveTab("modules")}
                  className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Começar Jornada
                </button>
                <button
                  onClick={() => setActiveTab("extras")}
                  className="px-8 py-3 bg-white text-gray-700 rounded-xl font-medium border border-gray-200 hover:bg-gray-50 transition-all duration-300"
                >
                  Ver Extras Premium
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200 max-w-4xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <SparklesIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">💝 Uma Mensagem Especial para Você</h3>
                  <p className="text-amber-700 leading-relaxed">
                    Lembre-se: você não está sozinha nesta jornada. Cada dúvida, cada desafio, cada pequena vitória -
                    tudo faz parte do processo de se tornar a mãe incrível que você já é. Confie em si mesma, seja
                    gentil consigo e celebre cada passo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "modules" && (
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Módulos</h2>
                <nav className="space-y-2">
                  {modules.map((module) => (
                    <button
                      key={module.id}
                      onClick={() => setActiveModule(module.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                        activeModule === module.id
                          ? `bg-gradient-to-r ${module.color} text-white shadow-md`
                          : "hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <module.icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{module.title}</span>
                      </div>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            <div className="lg:col-span-3">
              {activeModule ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: getModuleContent(activeModule) }}
                  />
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
                  <BookOpenIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Selecione um Módulo</h3>
                  <p className="text-gray-600">
                    Escolha um dos módulos ao lado para começar sua jornada de aprendizado.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "extras" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">
                  Extras Premium
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Conteúdos exclusivos para potencializar sua jornada maternal
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Playlist Relaxante */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <MusicalNoteIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Playlist Relaxante</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Músicas cuidadosamente selecionadas para momentos de relaxamento, massagem e conexão com seu bebê.
                </p>
                <a
                  href="https://open.spotify.com/playlist/37i9dQZF1DX9u7XXOp0l5L"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                >
                  Ouvir no Spotify
                </a>
              </div>

              {/* Grupo VIP Telegram */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <UserGroupIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Grupo VIP</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Comunidade exclusiva para trocar experiências, tirar dúvidas e receber apoio de outras mamães.
                </p>
                <a
                  href="https://t.me/+vYO6vwiVGpo5ZjRh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Entrar no Telegram
                </a>
              </div>

              {/* Receitas de Chás */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 md:col-span-2 lg:col-span-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <BeakerIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Chás Seguros</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Receitas de chás naturais seguros para gestantes e mães que amamentam.
                </p>
                <button className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                  Ver Receitas
                </button>
              </div>
            </div>

            {/* Receitas de Chás Detalhadas */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">🍃 Receitas de Chás Seguros</h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-3">Chá de Camomila - Relaxamento</h4>
                    <p className="text-green-700 text-sm mb-3">Ideal para ansiedade e insônia durante a gestação</p>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• 1 colher de sopa de flores secas de camomila</li>
                      <li>• 200ml de água fervente</li>
                      <li>• Deixe em infusão por 5-7 minutos</li>
                      <li>• Tome 1-2 xícaras por dia, preferencialmente à noite</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-3">Chá de Gengibre - Enjoos</h4>
                    <p className="text-orange-700 text-sm mb-3">Alivia náuseas e enjoos matinais</p>
                    <ul className="text-orange-700 text-sm space-y-1">
                      <li>• 1 fatia fina de gengibre fresco</li>
                      <li>• 200ml de água quente (não fervente)</li>
                      <li>• Infusão por 3-5 minutos</li>
                      <li>• Máximo 2 xícaras por dia</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-3">Chá de Folha de Framboesa</h4>
                    <p className="text-purple-700 text-sm mb-3">Fortalece o útero (apenas após 32 semanas)</p>
                    <ul className="text-purple-700 text-sm space-y-1">
                      <li>• 1 colher de chá de folhas secas</li>
                      <li>• 250ml de água fervente</li>
                      <li>• Infusão por 10 minutos</li>
                      <li>• Comece com 1 xícara/dia, aumente gradualmente</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-3">Chá de Melissa - Digestão</h4>
                    <p className="text-blue-700 text-sm mb-3">Melhora digestão e reduz gases</p>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• 1 colher de sopa de folhas secas</li>
                      <li>• 200ml de água fervente</li>
                      <li>• Infusão por 8 minutos</li>
                      <li>• 1-2 xícaras após as refeições</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-200 mt-6">
                <h4 className="font-semibold text-red-800 mb-3">⚠️ Chás a Evitar Durante a Gestação</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Boldo (pode causar contrações)</li>
                    <li>• Cavalinha (diurético forte)</li>
                    <li>• Sene (laxante potente)</li>
                    <li>• Artemísia (abortiva)</li>
                  </ul>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Confrei (hepatotóxico)</li>
                    <li>• Poejo (neurotóxico)</li>
                    <li>• Arruda (abortiva)</li>
                    <li>• Buchinha-do-norte (abortiva)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "support" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">
                  Suporte
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Estamos aqui para apoiar você em cada passo da sua jornada
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center mx-auto">
                    <EnvelopeIcon className="w-8 h-8 text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Entre em Contato</h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                      Tem alguma dúvida sobre o conteúdo? Precisa de ajuda técnica? Nossa equipe está pronta para ajudar
                      você.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-xl border border-rose-200">
                    <h4 className="font-semibold text-gray-800 mb-3">📧 E-mail de Suporte</h4>
                    <a
                      href="mailto:suportealiviomamae@gmail.com"
                      className="text-rose-600 font-medium text-lg hover:text-rose-700 transition-colors"
                    >
                      suportealiviomamae@gmail.com
                    </a>
                    <p className="text-gray-600 text-sm mt-2">Respondemos em até 24 horas úteis</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-3">💬 Grupo VIP</h4>
                      <p className="text-blue-700 text-sm mb-3">Tire dúvidas rápidas e conecte-se com outras mamães</p>
                      <a
                        href="https://t.me/+vYO6vwiVGpo5ZjRh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                      >
                        Acessar Grupo
                      </a>
                    </div>

                    <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
                      <h4 className="font-semibold text-amber-800 mb-3">⚠️ Emergências</h4>
                      <p className="text-amber-700 text-sm">
                        Para questões médicas urgentes, sempre procure seu obstetra ou serviço de emergência médica.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export { MembersDashboard }
export default MembersDashboard
