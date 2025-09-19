"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Heart, CheckCircle, Mail, BookOpen, Play, AlertTriangle, Activity, Clock } from "lucide-react"
import Link from "next/link"

const lessons = [
  {
    id: 1,
    title: "Primeiras semanas — o que é normal × sinais de alerta",
    content: `## Primeiras Semanas Pós-Parto

### 🌸 O que é NORMAL nas Primeiras Semanas:

#### Sangramento (Lóquios):
• **Primeiros 3-4 dias:** vermelho vivo, como menstruação intensa
• **4-10 dias:** marrom-avermelhado, menos intenso
• **10-14 dias:** amarelado ou esbranquiçado
• **Até 6 semanas:** pode haver pequenos sangramentos esporádicos

#### Dores e Desconfortos:
• **Cólicas uterinas** durante amamentação (útero contraindo)
• **Dor** na região do períneo (parto normal)
• **Desconforto** na cicatriz (cesárea)
• **Dores** nas costas e ombros
• **Inchaço** nas pernas e pés

#### Mudanças Emocionais:
• **Baby blues** (3-10 dias): choro fácil, sensibilidade
• **Cansaço** extremo
• **Ansiedade** com cuidados do bebê
• **Oscilações** de humor
• **Sentimentos** ambivalentes

#### Mudanças Físicas:
• **Barriga** ainda grande (útero demora para voltar)
• **Seios** ingurgitados ou sensíveis
• **Cabelo** pode cair mais
• **Pele** com manchas ou ressecada
• **Peso** ainda acima do pré-gestacional

### 🚨 SINAIS DE ALERTA - Procure Ajuda Imediatamente:

#### Sangramento Preocupante:
🚨 **Sangramento** muito intenso (encharca absorvente em 1 hora)
🚨 **Coágulos** maiores que uma moeda
🚨 **Sangue** vermelho vivo após 1 semana
🚨 **Odor** forte e desagradável
🚨 **Sangramento** que aumenta em vez de diminuir

#### Sinais de Infecção:
🚨 **Febre** acima de 38°C
🚨 **Calafrios** ou tremores
🚨 **Dor** abdominal intensa
🚨 **Secreção** com mau cheiro
🚨 **Vermelhidão** ou calor na cicatriz

#### Problemas Emocionais Graves:
🚨 **Tristeza** profunda que não melhora
🚨 **Pensamentos** de machucar a si mesma ou o bebê
🚨 **Incapacidade** de cuidar de si ou do bebê
🚨 **Ansiedade** paralisante
🚨 **Desconexão** total com o bebê

#### Outros Sinais de Alerta:
🚨 **Dor** de cabeça intensa
🚨 **Problemas** de visão
🚨 **Dor** no peito ou falta de ar
🚨 **Dor** intensa na panturrilha
🚨 **Vômitos** persistentes

### 📅 Cronograma de Recuperação:

#### Semana 1-2:
• **Foco:** descanso e adaptação
• **Atividades:** cuidados básicos apenas
• **Ajuda:** aceite toda ajuda oferecida
• **Consultas:** pediatra e seu médico

#### Semana 3-4:
• **Melhora:** gradual dos sintomas
• **Atividades:** caminhadas leves
• **Energia:** ainda limitada
• **Rotina:** começando a se estabelecer

#### Semana 5-6:
• **Recuperação:** mais evidente
• **Atividades:** retorno gradual
• **Consulta:** médica de revisão
• **Liberação:** para atividades normais

### 💡 Dicas para as Primeiras Semanas:

#### Descanso:
• **Durma** quando o bebê dormir
• **Aceite** ajuda com tarefas domésticas
• **Limite** visitas se necessário
• **Priorize** seu bem-estar

#### Alimentação:
• **Hidrate-se** bem (especialmente se amamentando)
• **Coma** alimentos nutritivos
• **Tenha** lanches práticos à mão
• **Não faça** dietas restritivas

#### Cuidados Pessoais:
• **Banho** diário para higiene e relaxamento
• **Roupas** confortáveis
• **Absorventes** adequados
• **Cuidados** com a cicatriz

### 🤝 Rede de Apoio:

#### Conte com:
• **Parceiro** ou família
• **Amigos** próximos
• **Profissionais** de saúde
• **Grupos** de mães
• **Doulas** pós-parto

### Lembre-se:
💪 **Recuperação** leva tempo
🌱 **Cada mulher** é única
🤱 **Você** está fazendo o melhor que pode
📞 **Ajuda** está sempre disponível`,
    completed: false,
  },
  {
    id: 2,
    title: "Cicatrização — parto normal e cesárea (higiene, cuidados, conforto)",
    content: `## Cuidados com Cicatrização

### 🌸 PARTO NORMAL - Cuidados com o Períneo

#### Higiene Diária:
• **Lave** com água morna após cada ida ao banheiro
• **Use** sabonete neutro apenas 1x ao dia
• **Seque** com toalha limpa, sem esfregar
• **Troque** absorventes frequentemente
• **Use** calcinha de algodão

#### Alívio da Dor:
• **Compressas frias** (primeiros 2 dias): 10-15 min, 3x ao dia
• **Banho de assento** com água morna (após 48h)
• **Almofada** em formato de rosquinha para sentar
• **Analgésicos** conforme orientação médica

#### Processo de Cicatrização:
**Dias 1-3:**
• Dor e inchaço mais intensos
• Dificuldade para sentar
• Sangramento normal

**Dias 4-7:**
• Melhora gradual da dor
• Inchaço diminuindo
• Pontos começam a ser absorvidos

**Semanas 2-6:**
• Cicatrização quase completa
• Desconforto ocasional
• Retorno gradual às atividades

### 🏥 CESÁREA - Cuidados com a Cicatriz

#### Higiene da Cicatriz:
• **Lave** suavemente com água e sabonete neutro
• **Seque** bem, sem esfregar
• **Não** use cremes sem orientação médica
• **Mantenha** a região arejada
• **Use** roupas folgadas

#### Cuidados Especiais:
• **Não** levante peso acima de 3kg
• **Evite** movimentos bruscos
• **Apoie** a barriga ao tossir ou espirrar
• **Durma** de barriga para cima ou de lado
• **Use** cinta pós-cirúrgica se orientado

#### Sinais de Boa Cicatrização:
✅ **Bordas** da cicatriz unidas
✅ **Cor** rosada ou avermelhada (normal)
✅ **Sem** secreção
✅ **Dor** diminuindo gradualmente
✅ **Sem** sinais de infecção

### 🚨 Sinais de Complicação (Ambos os Tipos):

#### Procure Ajuda SE:
🚨 **Vermelhidão** intensa ou crescente
🚨 **Inchaço** que piora
🚨 **Secreção** com pus ou mau cheiro
🚨 **Dor** que aumenta em vez de diminuir
🚨 **Febre** ou mal-estar
🚨 **Abertura** dos pontos

### 💊 Medicações e Tratamentos:

#### Analgésicos Seguros:
• **Paracetamol** - seguro na amamentação
• **Ibuprofeno** - anti-inflamatório, seguro na amamentação
• **Dipirona** - se orientado pelo médico
• **Evite** aspirina durante amamentação

#### Tratamentos Naturais:
• **Compressas** de camomila (morna)
• **Banhos** de assento com sal grosso
• **Óleo** de coco para hidratação (após liberação médica)
• **Arnica** (uso tópico, com orientação)

### 🛁 Rotina de Cuidados:

#### Manhã:
• **Banho** com água morna
• **Higiene** cuidadosa da região
• **Troca** de absorvente
• **Roupas** limpas e confortáveis

#### Durante o Dia:
• **Higiene** após cada ida ao banheiro
• **Troca** de absorvente a cada 3-4h
• **Posições** confortáveis para sentar/deitar
• **Medicação** nos horários corretos

#### Noite:
• **Banho** relaxante
• **Cuidados** com a cicatriz
• **Posição** confortável para dormir
• **Ambiente** limpo e arejado

### 🏃‍♀️ Retorno às Atividades:

#### Semana 1-2:
• **Apenas** atividades essenciais
• **Caminhadas** muito leves
• **Evite** escadas desnecessárias
• **Não** dirija (cesárea)

#### Semana 3-4:
• **Atividades** domésticas leves
• **Caminhadas** mais longas
• **Pode** dirigir (se não sente dor)
• **Evite** exercícios intensos

#### Semana 5-6:
• **Liberação** médica para atividades normais
• **Exercícios** podem ser retomados gradualmente
• **Relações** íntimas liberadas (se confortável)
• **Trabalho** pode ser retomado

### 💡 Dicas de Conforto:

#### Para Sentar:
• **Use** almofadas macias
• **Evite** superfícies duras
• **Mude** de posição frequentemente
• **Apoie** bem as costas

#### Para Dormir:
• **Travesseiros** para apoio
• **Posição** lateral (cesárea)
• **Evite** dormir de bruços inicialmente
• **Colchão** firme é melhor

### Lembre-se:
⏰ **Cicatrização** leva tempo
🩺 **Siga** orientações médicas
💪 **Seja** paciente consigo mesma
📞 **Não hesite** em buscar ajuda`,
    completed: false,
  },
  {
    id: 3,
    title: "Autoestima e libido — enfrentando mudanças do corpo e retomada da vida íntima",
    content: `## Autoestima e Vida Íntima Pós-Parto

### 💗 Mudanças no Corpo - É Normal!

#### Transformações Físicas:
• **Barriga** ainda flácida (útero leva 6 semanas para voltar)
• **Seios** diferentes (tamanho, formato, sensibilidade)
• **Estrias** e manchas na pele
• **Cabelo** mais fino ou com queda
• **Peso** ainda acima do pré-gestacional
• **Cicatrizes** (cesárea ou episiotomia)

#### Mudanças Íntimas:
• **Ressecamento** vaginal (especialmente se amamentando)
• **Sensibilidade** diferente
• **Músculos** do assoalho pélvico enfraquecidos
• **Libido** diminuída ou ausente
• **Cansaço** afetando o interesse sexual

### 🌟 Reconstruindo a Autoestima:

#### Aceitação e Paciência:
• **Seu corpo** fez algo incrível
• **Mudanças** são temporárias (a maioria)
• **Cada mulher** se recupera no seu tempo
• **Comparações** não ajudam
• **Foque** no que seu corpo conseguiu

#### Cuidados Pessoais:
• **Banhos** relaxantes
• **Roupas** que te fazem sentir bem
• **Hidratação** da pele
• **Corte** de cabelo novo se desejar
• **Maquiagem** leve se te faz bem

#### Atividade Física Gradual:
• **Caminhadas** ao ar livre
• **Exercícios** de respiração
• **Alongamentos** suaves
• **Yoga** pós-parto
• **Exercícios** para o assoalho pélvico

### 💕 Retomada da Vida Íntima:

#### Quando Retomar:
• **Liberação médica** (geralmente 6 semanas)
• **Cicatrização** completa
• **Você** se sentir pronta
• **Sem pressão** de tempo
• **Comunicação** aberta com parceiro

#### Preparação Física:
• **Lubrificante** é essencial (ressecamento é normal)
• **Exercícios** de Kegel para fortalecer músculos
• **Posições** confortáveis
• **Vá** devagar e com paciência
• **Pare** se houver dor

#### Preparação Emocional:
• **Converse** com seu parceiro sobre medos
• **Não** se pressione
• **Intimidade** não é só penetração
• **Carinho** e toque são importantes
• **Redescubra** seu corpo juntos

### 🧠 Aspectos Psicológicos:

#### Mudanças Hormonais:
• **Prolactina** (amamentação) diminui libido
• **Estrogênio** baixo causa ressecamento
• **Progesterona** afeta humor
• **Cortisol** (estresse) impacta desejo
• **Normalização** leva tempo

#### Fatores Emocionais:
• **Cansaço** extremo
• **Preocupação** com o bebê
• **Mudança** de identidade (mãe vs mulher)
• **Medo** de dor ou desconforto
• **Insegurança** com o corpo

### 💬 Comunicação com o Parceiro:

#### Conversas Importantes:
• **Expresse** seus sentimentos e medos
• **Explique** as mudanças físicas
• **Peça** paciência e compreensão
• **Discuta** expectativas realistas
• **Planeje** momentos íntimos sem pressão

#### Intimidade Além do Sexo:
• **Massagens** relaxantes
• **Banhos** juntos
• **Conversas** profundas
• **Carinhos** sem expectativa sexual
• **Tempo** de qualidade a dois

### 🏃‍♀️ Fortalecimento do Assoalho Pélvico:

#### Exercícios de Kegel:
1. **Identifique** os músculos (pare o xixi no meio)
2. **Contraia** por 3 segundos
3. **Relaxe** por 3 segundos
4. **Repita** 10-15 vezes
5. **Faça** 3 séries por dia

#### Benefícios:
• **Melhora** o controle urinário
• **Aumenta** a sensibilidade sexual
• **Fortalece** músculos íntimos
• **Previne** prolapsos
• **Melhora** a autoconfiança

### 🌈 Dicas Práticas:

#### Para o Primeiro Encontro Íntimo:
• **Escolha** um momento relaxado
• **Use** bastante lubrificante
• **Comece** com carícias
• **Vá** muito devagar
• **Comunique** o que sente

#### Posições Confortáveis:
• **Você** por cima (controla ritmo e profundidade)
• **De lado** (menos pressão)
• **Sentada** (controle total)
• **Evite** posições que causem desconforto

### 🆘 Quando Buscar Ajuda:

#### Procure Profissional SE:
• **Dor** persistente durante relações
• **Ressecamento** extremo
• **Falta** total de libido após 6 meses
• **Problemas** de relacionamento
• **Depressão** ou ansiedade severa

#### Profissionais que Podem Ajudar:
• **Ginecologista** - aspectos físicos
• **Fisioterapeuta** pélvica - fortalecimento
• **Psicólogo** - aspectos emocionais
• **Terapeuta** de casal - relacionamento
• **Sexólogo** - vida sexual

### 💡 Mensagens de Encorajamento:

#### Lembre-se:
• **Você** é mais que um corpo
• **Sua** sexualidade vai se readaptar
• **Não** há pressa para nada
• **Cada** mulher tem seu tempo
• **Você** merece prazer e felicidade

#### Afirmações Positivas:
💪 "Meu corpo é forte e capaz"
🌟 "Mereço amor e carinho"
💕 "Minha sexualidade é minha"
🌸 "Sou bela do meu jeito"
✨ "Tenho tempo para me redescobrir"

### Lembre-se:
🕰️ **Tempo** é seu aliado
💑 **Comunicação** é fundamental
🌱 **Paciência** consigo mesma
💗 **Você** merece se sentir bem`,
    completed: false,
  },
  {
    id: 4,
    title: "Rotina leve — organização da casa e do tempo com bebê",
    content: `## Organizando a Nova Rotina

### 🏠 Organização da Casa - Menos é Mais

#### Prioridades Essenciais:
• **Cozinha** limpa (higiene alimentar)
• **Banheiro** limpo (higiene pessoal)
• **Roupas** limpas (suas e do bebê)
• **Cama** arrumada (descanso)
• **Resto** pode esperar!

#### Sistema de Limpeza Rápida:
**15 minutos por ambiente:**
• **Sala:** guardar objetos, passar pano nas superfícies
• **Cozinha:** lavar louça, limpar fogão e pia
• **Banheiro:** vaso, pia e espelho
• **Quarto:** cama arrumada, roupas no lugar

#### Dicas de Organização:
• **Cestas** para guardar rapidamente
• **Produtos** de limpeza em cada ambiente
• **Roupas** do bebê organizadas por tamanho
• **Fraldas** e produtos em locais estratégicos
• **Lista** de tarefas simples e realista

### 👶 Rotina com o Bebê - Flexibilidade é a Chave

#### Estrutura Básica (Adaptável):
**Manhã (6h-12h):**
• Mamada ao acordar
• Troca de fralda
• Tempo acordado (30min-2h conforme idade)
• Soneca
• Repetir ciclo

**Tarde (12h-18h):**
• Mesmo padrão da manhã
• Banho do bebê (pode ser dia sim, dia não)
• Mais tempo acordado
• Sonecas mais curtas

**Noite (18h-6h):**
• Rotina de relaxamento
• Mamadas mais frequentes
• Ambiente mais escuro e calmo
• Menos estímulos

### ⏰ Gestão do Tempo - Estratégias Práticas

#### Regra dos 3 Terços:
• **1/3** para o bebê (mamadas, cuidados, brincadeiras)
• **1/3** para você (descanso, alimentação, higiene)
• **1/3** para casa (tarefas essenciais)

#### Aproveitando Sonecas do Bebê:
**Soneca Curta (30min):**
• Tomar banho
• Comer algo
• Descansar

**Soneca Média (1h):**
• Tarefas domésticas leves
• Preparar refeições
• Organizar roupas

**Soneca Longa (2h+):**
• Dormir também!
• Atividades pessoais
• Tarefas mais complexas

### 🍽️ Alimentação Simplificada

#### Refeições Práticas:
• **Prepare** em lotes nos fins de semana
• **Congele** porções individuais
• **Tenha** lanches saudáveis sempre à mão
• **Use** panela de pressão e slow cooker
• **Aceite** ajuda com comida

#### Cardápio Simples:
**Café da manhã:**
• Frutas, iogurte, granola
• Pão integral com pasta de amendoim
• Vitaminas com leite e frutas

**Almoço/Jantar:**
• Arroz, feijão, proteína, salada
• Sopas nutritivas
• Massas com molhos simples
• Ovos mexidos com legumes

### 🤝 Delegação e Ajuda

#### Tarefas que Podem ser Delegadas:
• **Limpeza** pesada
• **Compras** de supermercado
• **Lavanderia** (ou usar serviços)
• **Cozinhar** (familiares podem ajudar)
• **Cuidar** do bebê (para você descansar)

#### Como Pedir Ajuda:
• **Seja** específica: "Pode lavar a louça?"
• **Aceite** que não será feito exatamente como você faria
• **Agradeça** sempre
• **Não** se sinta culpada
• **Lembre-se:** aceitar ajuda é inteligente, não fraqueza

### 📱 Ferramentas Úteis

#### Apps e Recursos:
• **Lista** de compras compartilhada
• **Apps** de delivery para refeições
• **Lembretes** no celular para tarefas
• **Grupos** de mães para trocar dicas
• **Serviços** online (farmácia, supermercado)

#### Organização Digital:
• **Fotos** do bebê organizadas por mês
• **Contatos** médicos salvos
• **Horários** de consultas no calendário
• **Lista** de emergência sempre atualizada

### 🧘‍♀️ Autocuidado na Rotina

#### 5 Minutos para Você:
• **Respiração** profunda
• **Alongamento** rápido
• **Chá** ou café quente
• **Música** relaxante
• **Gratidão** - pense em 3 coisas boas

#### 15 Minutos para Você:
• **Banho** relaxante
• **Leitura** de algumas páginas
• **Conversa** com amiga
• **Caminhada** rápida
• **Meditação** ou oração

### 📅 Planejamento Semanal

#### Domingo - Dia de Preparação:
• **Planeje** cardápio da semana
• **Faça** lista de compras
• **Prepare** algumas refeições
• **Organize** roupas da semana
• **Revise** compromissos

#### Durante a Semana:
• **Segunda:** foco na casa
• **Terça:** compras essenciais
• **Quarta:** autocuidado
• **Quinta:** atividades com bebê
• **Sexta:** preparação para fim de semana
• **Sábado:** descanso e família

### 🎯 Expectativas Realistas

#### O que É Normal:
• **Casa** não estar sempre impecável
• **Refeições** simples e repetitivas
• **Roupas** amassadas às vezes
• **Cansaço** constante
• **Dias** mais difíceis que outros

#### Sinais de que Está Funcionando:
✅ **Você** consegue descansar um pouco
✅ **Bebê** está bem cuidado
✅ **Casa** tem o básico funcionando
✅ **Você** não está sobrecarregada
✅ **Há** momentos de prazer no dia

### 💡 Dicas Finais:

#### Lembre-se:
• **Perfeição** não existe
• **Flexibilidade** é essencial
• **Priorize** o que realmente importa
• **Peça** ajuda quando precisar
• **Celebre** pequenas conquistas

#### Mantra Diário:
🌟 "Estou fazendo o melhor que posso"
🌟 "Minha casa não precisa ser perfeita"
🌟 "Meu bem-estar importa"
🌟 "Cada dia é uma nova oportunidade"`,
    completed: false,
  },
  {
    id: 5,
    title: "Retorno à atividade física — passos graduais",
    content: `## Retorno Gradual à Atividade Física

### 🏥 Liberação Médica - Primeiro Passo

#### Quando Buscar Liberação:
• **Parto normal:** geralmente 6 semanas
• **Cesárea:** 8-12 semanas (dependendo da cicatrização)
• **Complicações:** conforme orientação médica
• **Amamentação:** pode afetar alguns exercícios

#### Avaliação Médica Inclui:
• **Cicatrização** completa
• **Sangramento** cessou
• **Pressão arterial** normalizada
• **Anemia** corrigida (se houver)
• **Condições** especiais (diástase, prolapso)

### 🚶‍♀️ Fase 1: Primeiras 6 Semanas

#### Atividades Liberadas:
• **Caminhadas** leves (10-15 minutos)
• **Respiração** diafragmática
• **Exercícios** de Kegel
• **Alongamentos** suaves
• **Mobilidade** articular

#### Exercícios de Respiração:
1. **Deite** confortavelmente
2. **Uma mão** no peito, outra na barriga
3. **Inspire** lentamente pelo nariz (barriga sobe)
4. **Expire** pela boca (barriga desce)
5. **Repita** 10 vezes, 3x ao dia

#### Exercícios de Kegel:
• **Contraia** músculos do assoalho pélvico
• **Mantenha** 3-5 segundos
• **Relaxe** completamente
• **Repita** 10-15 vezes
• **Faça** 3 séries por dia

### 🏃‍♀️ Fase 2: 6-12 Semanas (Com Liberação)

#### Atividades Progressivas:
• **Caminhadas** mais longas (20-30 min)
• **Exercícios** de fortalecimento leve
• **Yoga** pós-parto
• **Pilates** adaptado
• **Natação** (após cessação completa do sangramento)

#### Programa de Caminhada:
**Semana 1-2:**
• 15 minutos, 3x por semana
• Ritmo confortável
• Terreno plano

**Semana 3-4:**
• 20-25 minutos, 4x por semana
• Pode incluir pequenas inclinações
• Aumente gradualmente

**Semana 5-6:**
• 30 minutos, 5x por semana
• Ritmo mais acelerado
• Varie os percursos

### 💪 Fase 3: 3-6 Meses

#### Exercícios de Fortalecimento:
**Core (Abdômen e Lombar):**
• **Prancha** modificada (joelhos apoiados)
• **Ponte** (glúteos e lombar)
• **Abdominais** adaptados
• **Exercícios** funcionais

**Membros Superiores:**
• **Flexões** na parede ou joelhos
• **Exercícios** com elástico
• **Peso** corporal
• **Halteres** leves (1-2kg)

**Membros Inferiores:**
• **Agachamentos** (sem peso inicialmente)
• **Afundos** estáticos
• **Elevação** de panturrilha
• **Exercícios** laterais

### 🏋️‍♀️ Fase 4: 6+ Meses

#### Atividades Mais Intensas:
• **Corrida** (se liberada)
• **Musculação** completa
• **Esportes** de impacto
• **Aulas** de dança/aeróbica
• **Exercícios** de alta intensidade

#### Progressão na Musculação:
**Semanas 1-4:**
• Peso corporal e elásticos
• 2-3x por semana
• Séries de 12-15 repetições

**Semanas 5-8:**
• Halteres leves
• 3x por semana
• Séries de 10-12 repetições

**Semanas 9+:**
• Progressão normal de carga
• Conforme tolerância
• Acompanhamento profissional

### ⚠️ Sinais de Alerta - Pare Imediatamente

#### Durante o Exercício:
🚨 **Dor** abdominal ou pélvica
🚨 **Sangramento** vaginal
🚨 **Vazamento** urinário excessivo
🚨 **Dor** nas costas intensa
🚨 **Tontura** ou mal-estar
🚨 **Falta** de ar excessiva

#### Após o Exercício:
🚨 **Dor** que persiste
🚨 **Inchaço** ou vermelhidão
🚨 **Sangramento** que retorna
🚨 **Cansaço** extremo
🚨 **Dor** de cabeça intensa

### 🤱 Exercícios Durante Amamentação

#### Considerações Especiais:
• **Amamente** antes do exercício
• **Use** sutiã esportivo com bom suporte
• **Hidrate-se** bem
• **Evite** exercícios que comprimam os seios
• **Monitore** produção de leite

#### Melhores Horários:
• **Após** mamadas
• **Quando** bebê está dormindo
• **Manhã** (energia maior)
• **Evite** exercícios muito intensos se amamentando exclusivamente

### 🏠 Exercícios em Casa

#### Equipamentos Básicos:
• **Tapete** de yoga
• **Elástico** de resistência
• **Halteres** de 1-3kg
• **Bola** suíça
• **Aplicativos** de exercício

#### Rotina de 20 Minutos:
**Aquecimento (3 min):**
• Marcha no lugar
• Movimentos articulares
• Respiração profunda

**Fortalecimento (12 min):**
• Agachamentos: 2 séries de 10
• Flexões (parede): 2 séries de 8
• Ponte: 2 séries de 12
• Prancha: 2 séries de 15 segundos

**Alongamento (5 min):**
• Pescoço e ombros
• Lombar
• Pernas
• Respiração relaxante

### 👥 Atividades em Grupo

#### Opções Sociais:
• **Grupos** de caminhada com bebês
• **Yoga** pós-parto
• **Pilates** para mães
• **Natação** em grupo
• **Dança** com bebês

#### Benefícios Extras:
• **Socialização** com outras mães
• **Motivação** em grupo
• **Troca** de experiências
• **Apoio** emocional
• **Diversão** garantida

### 📊 Monitoramento do Progresso

#### Indicadores Positivos:
✅ **Energia** aumentando
✅ **Força** retornando
✅ **Humor** melhorando
✅ **Sono** mais reparador
✅ **Autoestima** em alta

#### Metas Realistas:
• **Mês 1:** Estabelecer rotina
• **Mês 2:** Aumentar resistência
• **Mês 3:** Melhorar força
• **Mês 6:** Retorno ao nível pré-gestacional
• **Ano 1:** Superação dos níveis anteriores

### 💡 Dicas Finais:

#### Lembre-se:
🌟 **Paciência** é fundamental
🌟 **Consistência** vale mais que intensidade
🌟 **Escute** seu corpo sempre
🌟 **Celebre** pequenos progressos
🌟 **Busque** orientação profissional quando necessário`,
    completed: false,
  },
  {
    id: 6,
    title: "Quando procurar ajuda médica — sinais de alerta claros",
    content: `## Sinais de Alerta - Quando Buscar Ajuda Médica

### 🚨 EMERGÊNCIA - Procure Ajuda IMEDIATAMENTE

#### Sangramento Grave:
🆘 **Sangramento** que encharca um absorvente por hora
🆘 **Coágulos** maiores que uma moeda de R$ 1,00
🆘 **Sangue** vermelho vivo após 1 semana pós-parto
🆘 **Sangramento** que aumenta em vez de diminuir
🆘 **Sangramento** com odor muito forte

#### Sinais de Infecção Grave:
🆘 **Febre** acima de 38,5°C
🆘 **Calafrios** intensos
🆘 **Dor** abdominal severa
🆘 **Vômitos** persistentes
🆘 **Mal-estar** extremo

#### Problemas Cardiovasculares:
🆘 **Dor** no peito
🆘 **Falta** de ar intensa
🆘 **Dor** na panturrilha com inchaço
🆘 **Palpitações** com tontura
🆘 **Desmaio** ou quase desmaio

#### Problemas Neurológicos:
🆘 **Dor** de cabeça intensa e súbita
🆘 **Problemas** de visão (visão dupla, pontos luminosos)
🆘 **Convulsões**
🆘 **Confusão** mental severa
🆘 **Fraqueza** em um lado do corpo

### ⚠️ URGENTE - Procure Ajuda em 24h

#### Problemas na Cicatrização:
• **Vermelhidão** crescente ao redor da cicatriz
• **Inchaço** que piora
• **Secreção** com pus
• **Dor** que aumenta em vez de diminuir
• **Abertura** dos pontos

#### Problemas Urinários:
• **Dor** intensa ao urinar
• **Sangue** na urina
• **Incapacidade** de urinar
• **Urgência** urinária com dor
• **Febre** com sintomas urinários

#### Problemas nos Seios:
• **Vermelhidão** em formato de cunha
• **Calor** e dor intensa em uma área
• **Febre** com dor no seio
• **Secreção** com pus do mamilo
• **Nódulo** doloroso que não melhora

#### Problemas Emocionais Graves:
• **Pensamentos** de machucar a si mesma
• **Pensamentos** de machucar o bebê
• **Incapacidade** total de cuidar de si ou do bebê
• **Alucinações** ou delírios
• **Pânico** constante

### 📞 CONSULTA MÉDICA - Agende em Poucos Dias

#### Sangramento Anormal:
• **Sangramento** que para e volta após 2 semanas
• **Sangramento** com odor desagradável
• **Sangramento** que dura mais de 6 semanas
• **Ausência** total de sangramento nos primeiros dias

#### Dores Persistentes:
• **Dor** abdominal que não melhora
• **Dor** nas costas intensa
• **Dor** pélvica constante
• **Dor** durante relações sexuais (após liberação)
• **Dor** de cabeça frequente

#### Problemas Digestivos:
• **Constipação** severa (mais de 4 dias sem evacuar)
• **Hemorroidas** muito dolorosas
• **Dor** abdominal com distensão
• **Náuseas** persistentes
• **Perda** de apetite total

#### Mudanças de Humor:
• **Tristeza** profunda que não melhora
• **Ansiedade** que interfere no dia a dia
• **Irritabilidade** extrema
• **Falta** de interesse em tudo
• **Dificuldade** de concentração severa

### 🩺 ACOMPANHAMENTO REGULAR

#### Consultas Obrigatórias:
• **7-10 dias** pós-parto (revisão inicial)
• **6 semanas** pós-parto (liberação para atividades)
• **3 meses** (se houver problemas)
• **6 meses** (planejamento familiar)
• **Anual** (exames de rotina)

#### O que Será Avaliado:
• **Cicatrização** completa
• **Involução** uterina
• **Pressão arterial**
• **Peso** e estado nutricional
• **Estado** emocional

### 📋 Checklist de Sintomas - Quando Ligar

#### ✅ Ligue para o Médico SE:
□ **Febre** acima de 38°C
□ **Dor** que piora em vez de melhorar
□ **Sangramento** preocupante
□ **Sinais** de infecção
□ **Problemas** emocionais
□ **Dúvidas** sobre medicações
□ **Sintomas** novos ou estranhos

### 🏥 Onde Buscar Ajuda

#### Emergência (24h):
• **Pronto-socorro** da maternidade onde teve o bebê
• **UPA** (Unidade de Pronto Atendimento)
• **Hospital** de referência
• **SAMU** 192 (casos graves)

#### Consultas Programadas:
• **Obstetra** que acompanhou a gravidez
• **Ginecologista** de confiança
• **Posto** de saúde
• **Clínica** particular

#### Apoio Especializado:
• **Psicólogo** ou psiquiatra (saúde mental)
• **Fisioterapeuta** pélvica
• **Nutricionista** (amamentação/alimentação)
• **Consultora** em amamentação

### 📱 Informações para Ter Sempre à Mão

#### Lista de Contatos:
• **Obstetra:** nome e telefone
• **Pediatra:** nome e telefone
• **Hospital:** endereço e telefone
• **Plano** de saúde: número da carteirinha
• **Farmácia** 24h mais próxima

#### Informações Médicas:
• **Tipo** de parto
• **Data** do parto
• **Complicações** durante gravidez/parto
• **Medicações** em uso
• **Alergias** conhecidas

### 🆘 Como Descrever Sintomas

#### Seja Específica:
• **Quando** começou o sintoma
• **Intensidade** (escala de 1-10)
• **Localização** exata
• **O que** melhora ou piora
• **Sintomas** associados

#### Exemplo de Descrição:
*"Estou com dor abdominal do lado direito, intensidade 7/10, começou há 2 horas, piora quando me movo, e tenho febre de 38,2°C"*

### 💡 Dicas Importantes:

#### Lembre-se:
🩺 **Melhor** prevenir que remediar
🩺 **Não** hesite em buscar ajuda
🩺 **Você** conhece seu corpo
🩺 **Confiança** no profissional é importante
🩺 **Segunda** opinião é sempre válida

#### Nunca Ignore:
• **Intuição** de que algo não está certo
• **Sintomas** que te preocupam
• **Mudanças** súbitas no seu estado
• **Dor** intensa ou persistente
• **Sangramento** anormal

### 🌟 Mensagem Final:
**Sua saúde e bem-estar são prioridade. Não hesite em buscar ajuda médica sempre que tiver dúvidas ou preocupações. É melhor uma consulta desnecessária do que deixar passar algo importante.**`,
    completed: false,
  },
]

export function PostpartumRecoveryModule() {
  const [currentLesson, setCurrentLesson] = useState(1)
  const [completedLessons, setCompletedLessons] = useState<number[]>([])

  const markAsCompleted = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId])
    }
  }

  const currentLessonData = lessons.find((lesson) => lesson.id === currentLesson)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/members">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Voltar</span>
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-rose-100">
                  <Heart className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">Módulo 4 - Recuperação Pós-Parto</h1>
                  <p className="text-sm text-gray-500">6 aulas - Cuidados essenciais</p>
                </div>
              </div>
            </div>
            <Badge variant="secondary" className="flex items-center space-x-1">
              <CheckCircle className="w-4 h-4" />
              <span>{completedLessons.length}/6 concluídas</span>
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Lesson List */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>Aulas</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {lessons.map((lesson) => (
                  <Button
                    key={lesson.id}
                    variant={currentLesson === lesson.id ? "default" : "ghost"}
                    className={`w-full justify-start text-left h-auto p-3 ${
                      currentLesson === lesson.id ? "" : "hover:bg-gray-100"
                    }`}
                    style={currentLesson === lesson.id ? { backgroundColor: "#FF2D84" } : {}}
                    onClick={() => setCurrentLesson(lesson.id)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        {completedLessons.includes(lesson.id) ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <Play className="w-5 h-5" />
                        )}
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-sm line-clamp-2">{lesson.title}</p>
                        <p className="text-xs opacity-75">Aula {lesson.id}</p>
                      </div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Recovery Tips Card */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Activity className="w-5 h-5" />
                  <span>Dicas de Recuperação</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>Descanso é fundamental</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Heart className="w-4 h-4 text-pink-500" />
                  <span>Aceite ajuda oferecida</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  <span>Observe sinais de alerta</span>
                </div>
              </CardContent>
            </Card>

            {/* Support Card */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Suporte</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">Dúvidas sobre recuperação?</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent"
                  style={{ borderColor: "#FF2D84", color: "#FF2D84" }}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  suportealiviomamae@gmail.com
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{currentLessonData?.title}</CardTitle>
                  <Badge variant="outline">Aula {currentLesson}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Educational Disclaimer */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Aviso:</strong> Este conteúdo é educativo e não substitui acompanhamento profissional.
                  </p>
                </div>

                {/* Lesson Content */}
                <div className="prose max-w-none">
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
                    {currentLessonData?.content}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-6 border-t">
                  <div className="flex items-center space-x-4">
                    {currentLesson > 1 && (
                      <Button variant="outline" onClick={() => setCurrentLesson(currentLesson - 1)}>
                        Aula Anterior
                      </Button>
                    )}
                  </div>

                  <div className="flex items-center space-x-4">
                    {!completedLessons.includes(currentLesson) && (
                      <Button onClick={() => markAsCompleted(currentLesson)} style={{ backgroundColor: "#FF2D84" }}>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Marcar como Concluída
                      </Button>
                    )}

                    {currentLesson < lessons.length && (
                      <Button
                        variant="outline"
                        onClick={() => setCurrentLesson(currentLesson + 1)}
                        style={{ borderColor: "#FF2D84", color: "#FF2D84" }}
                      >
                        Próxima Aula
                      </Button>
                    )}

                    {currentLesson === lessons.length && (
                      <Link href="/members">
                        <Button style={{ backgroundColor: "#FF2D84" }}>Voltar ao Dashboard</Button>
                      </Link>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
