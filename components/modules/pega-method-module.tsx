"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Baby, CheckCircle, Mail, BookOpen, Play, Target } from "lucide-react"
import Link from "next/link"

const lessons = [
  {
    id: 1,
    title: "P.E.G.A em 3 passos — posição da mãe, do bebê e selamento correto",
    content: `## Método P.E.G.A - Amamentação Sem Dor

### O que significa P.E.G.A?
• **P** - Posição da mãe
• **E** - Encaixe do bebê
• **G** - Garra (pega) correta
• **A** - Acompanhamento dos sinais

### PASSO 1: Posição da Mãe (P)

#### Posições Recomendadas:
**🪑 Sentada:**
• Costas bem apoiadas
• Pés apoiados no chão ou banquinho
• Braços apoiados em almofadas
• Ombros relaxados

**🛏️ Deitada de Lado:**
• Cabeça apoiada em travesseiro
• Travesseiro entre as pernas
• Braço de baixo esticado ou dobrado
• Corpo alinhado com o bebê

**🤱 Posição Invertida (Futebol Americano):**
• Bebê ao lado do corpo
• Cabeça do bebê na sua mão
• Corpo do bebê apoiado no seu braço
• Ideal para cesárea

### PASSO 2: Encaixe do Bebê (E)

#### Posicionamento Correto:
• **Barriga com barriga** - corpos alinhados
• **Nariz na altura do mamilo**
• **Cabeça ligeiramente inclinada para trás**
• **Corpo do bebê virado para você**

#### Sinais de Bom Encaixe:
✅ Bebê não precisa virar a cabeça
✅ Orelha, ombro e quadril alinhados
✅ Braços do bebê abraçam o seio
✅ Você se sente confortável

### PASSO 3: Garra/Pega Correta (G)

#### Como Estimular a Pega:
1. **Toque o lábio inferior** do bebê com o mamilo
2. **Espere a boca abrir bem**
3. **Aproxime rapidamente** o bebê ao seio
4. **Não leve o seio até o bebê**

#### Pega Ideal:
• **Boca bem aberta** (como um bocejo)
• **Lábios virados para fora**
• **Mais aréola visível acima** da boca
• **Queixo encostado no seio**

### PASSO 4: Acompanhamento (A)

#### Monitore Durante a Mamada:
👀 **Movimentos de sucção** rítmicos
👂 **Sons de deglutição** regulares
😌 **Bebê relaxado** e satisfeito
🤱 **Você sem dor** ou desconforto`,
    completed: false,
  },
  {
    id: 2,
    title: "Sinais de pega correta — boca aberta, queixo encostado, nariz livre",
    content: `## Identificando a Pega Correta

### Sinais Visuais da Pega Ideal:

#### 👄 Boca do Bebê:
✅ **Bem aberta** - como um bocejo grande
✅ **Lábios virados para fora** (como peixinho)
✅ **Língua visível** por baixo do seio
✅ **Bochecha redonda** durante a sucção

#### 👶 Posição da Cabeça:
✅ **Queixo encostado** firmemente no seio
✅ **Nariz livre** ou tocando levemente
✅ **Cabeça ligeiramente inclinada** para trás
✅ **Pescoço não torcido**

#### 🤱 Visão da Aréola:
✅ **Mais aréola visível acima** da boca
✅ **Menos aréola visível abaixo** da boca
✅ **Mamilo centralizado** na boca
✅ **Aréola não totalmente visível** (normal)

### Sinais Auditivos:

#### 🔊 Sons Positivos:
• **"Ah, ah, ah"** - respiração tranquila
• **"Glup, glup"** - deglutição do leite
• **Silêncio** entre as sugadas
• **Respiração regular** pelo nariz

#### 🚫 Sons de Alerta:
• **Estalos** ou "clicks"
• **Chiados** ou ruídos estranhos
• **Respiração ofegante**
• **Choro** durante a mamada

### Sinais de Conforto:

#### 😊 Para o Bebê:
• **Mãos relaxadas** (não em punho)
• **Corpo molinho** contra você
• **Olhos podem fechar** de prazer
• **Sucção rítmica** e eficiente

#### 🤱 Para a Mãe:
• **Sem dor** nos mamilos
• **Sensação de "puxada"** suave
• **Relaxamento** e bem-estar
• **Sensação de esvaziamento** do seio

### Checklist Rápido da Pega:

#### ✅ Verifique:
□ Boca bem aberta?
□ Queixo encostado?
□ Nariz livre?
□ Lábios para fora?
□ Você sente dor?
□ Bebê está sugando?
□ Há sons de deglutição?

### Quando a Pega NÃO está Correta:

#### 🚨 Sinais de Alerta:
• **Dor** nos mamilos
• **Mamilo** com formato estranho após mamada
• **Estalos** constantes
• **Bebê** inquieto ou chorando
• **Bochechas** fundas durante sucção
• **Mamadas** muito longas sem satisfação`,
    completed: false,
  },
  {
    id: 3,
    title: "Ajustes rápidos — o que fazer se houver dor",
    content: `## Ajustes Rápidos Durante a Mamada

### 🚨 Se Sentir Dor - PARE IMEDIATAMENTE

#### Passo 1: Interrompa a Sucção
• **Coloque o dedo mindinho** no canto da boca
• **Pressione suavemente** para quebrar o vácuo
• **NUNCA puxe** o bebê bruscamente
• **Aguarde** a boca abrir completamente

### Ajustes Rápidos por Tipo de Dor:

#### 💥 Dor no Mamilo:
**Causa:** Pega superficial
**Solução:**
1. Reposicione o bebê mais próximo
2. Certifique-se que a boca está bem aberta
3. Mais aréola deve entrar na boca
4. Queixo deve tocar o seio primeiro

#### 🔥 Dor Tipo "Queimação":
**Causa:** Mamilo muito para frente na boca
**Solução:**
1. Incline a cabeça do bebê para trás
2. Aproxime o corpo do bebê mais
3. Nariz deve ficar livre naturalmente
4. Reposicione se necessário

#### ⚡ Dor Tipo "Beliscão":
**Causa:** Lábios para dentro
**Solução:**
1. Com o dedo, puxe suavemente o lábio inferior
2. Certifique-se que está virado para fora
3. Verifique o lábio superior também
4. Reposicione se continuar

### Técnica de Reposicionamento Rápido:

#### 🔄 Método dos 3 Segundos:
1. **Segundo 1:** Quebrar o vácuo com o dedo
2. **Segundo 2:** Reposicionar nariz na altura do mamilo
3. **Segundo 3:** Aproximar quando a boca abrir

#### 🎯 Dica do "Sanduíche":
• **Comprima levemente** o seio como um sanduíche
• **Polegar acima**, dedos abaixo
• **Longe da aréola**
• **Facilita** a entrada na boca do bebê

### Ajustes por Posição:

#### 🪑 Se Estiver Sentada:
• **Aproxime** o bebê com almofada
• **Eleve** o bebê até a altura do seio
• **Não se curve** para frente
• **Mantenha** as costas retas

#### 🛏️ Se Estiver Deitada:
• **Use travesseiro** atrás das costas
• **Coloque travesseiro** entre as pernas
• **Alinhe** o corpo do bebê com o seu
• **Aproxime** barriga com barriga

### Sinais de que o Ajuste Funcionou:

#### ✅ Imediatamente:
• **Dor para** ou diminui muito
• **Sucção** fica mais rítmica
• **Bebê** relaxa o corpo
• **Você** consegue relaxar

#### ✅ Após alguns minutos:
• **Sons de deglutição** aparecem
• **Bebê** faz pausas naturais
• **Sensação** de esvaziamento do seio
• **Conforto** para ambos

### Quando Buscar Ajuda:

#### 🆘 Procure Suporte SE:
• **Dor persiste** após vários ajustes
• **Fissuras** ou feridas aparecem
• **Bebê** não ganha peso adequadamente
• **Você** se sente muito frustrada
• **Mamadas** demoram mais de 1 hora

### Lembre-se:
💡 **Amamentação não deve doer**
💡 **Ajustes são normais** no início
💡 **Prática** leva à perfeição
💡 **Cada bebê** é único`,
    completed: false,
  },
  {
    id: 4,
    title: "Cuidado com fissuras — prevenção e manejo inicial",
    content: `## Prevenção e Cuidado com Fissuras

### 🛡️ Prevenção - A Melhor Estratégia

#### Pega Correta Desde o Início:
• **Posicionamento adequado** sempre
• **Boca bem aberta** antes de aproximar
• **Interromper** se sentir dor
• **Reposicionar** quantas vezes necessário

#### Cuidados Diários:
• **Secar** os mamilos ao ar após mamadas
• **Aplicar** algumas gotas do próprio leite
• **Usar** sutiãs de algodão
• **Trocar** absorventes frequentemente

### 🔍 Identificando Fissuras Precocemente:

#### Sinais Iniciais:
• **Vermelhidão** no mamilo
• **Sensibilidade** aumentada
• **Pequenos cortes** ou rachaduras
• **Dor** que persiste após mamada

#### Graus de Fissura:
**Grau 1:** Vermelhidão e sensibilidade
**Grau 2:** Pequenas rachaduras superficiais
**Grau 3:** Feridas mais profundas
**Grau 4:** Sangramento e dor intensa

### 🩹 Tratamento Imediato:

#### Para Fissuras Leves (Grau 1-2):
1. **Corrija a pega** imediatamente
2. **Aplique leite materno** após mamadas
3. **Deixe secar** ao ar livre
4. **Use** lanolina pura se necessário
5. **Continue** amamentando normalmente

#### Para Fissuras Moderadas (Grau 3):
1. **Todos os cuidados** acima
2. **Considere** diferentes posições
3. **Inicie** pela mama menos afetada
4. **Limite** o tempo de mamada se necessário
5. **Procure** orientação profissional

### 🚨 Quando Parar Temporariamente:

#### Sinais de Alerta:
• **Sangramento** ativo
• **Dor** insuportável
• **Sinais de infecção** (pus, febre)
• **Fissuras** muito profundas

#### Alternativas Temporárias:
• **Ordenha manual** ou bomba
• **Oferecer** o leite ordenhado
• **Proteger** o mamilo para cicatrização
• **Retomar** assim que possível

### 🌿 Tratamentos Naturais Seguros:

#### Leite Materno:
• **Propriedades** cicatrizantes
• **Antibacteriano** natural
• **Aplicar** após cada mamada
• **Deixar** secar naturalmente

#### Lanolina Pura:
• **Hidratação** profunda
• **Proteção** contra ressecamento
• **Não precisa** remover antes da mamada
• **Aplicar** camada fina

#### Compressas Mornas:
• **Antes** da mamada para relaxar
• **Água filtrada** morna
• **2-3 minutos** apenas
• **Secar** bem após

### ❌ O que NÃO Fazer:

#### Evite:
• **Sabonetes** ou produtos perfumados
• **Álcool** ou produtos ressecantes
• **Pomadas** com medicamentos sem orientação
• **Absorventes** com plástico
• **Sutiãs** apertados ou sintéticos

### 🔄 Retorno Gradual:

#### Quando Retomar:
• **Fissura** cicatrizada
• **Dor** significativamente reduzida
• **Sem** sinais de infecção
• **Confiança** para tentar novamente

#### Como Retomar:
1. **Comece** com mamadas mais curtas
2. **Use** a posição mais confortável
3. **Aplique** lanolina antes se necessário
4. **Monitore** sinais de piora
5. **Aumente** gradualmente o tempo

### 🆘 Quando Buscar Ajuda Médica:

#### Procure Ajuda SE:
• **Febre** ou sinais de infecção
• **Pus** ou secreção estranha
• **Dor** que não melhora em 48h
• **Sangramento** persistente
• **Fissuras** que não cicatrizam

### Lembre-se:
💪 **Fissuras são tratáveis**
🤱 **Amamentação pode continuar**
⏰ **Cicatrização** leva alguns dias
🩺 **Ajuda profissional** está disponível`,
    completed: false,
  },
  {
    id: 5,
    title: "Mitos e verdades da amamentação",
    content: `## Mitos e Verdades sobre Amamentação

### 🚫 MITOS Comuns (NÃO são verdade):

#### "Leite fraco" ou "Pouco leite"
**MITO:** "Meu leite é fraco, não sustenta o bebê"
**VERDADE:** 
• **Todo leite materno** é nutritivo
• **Composição** muda conforme necessidade do bebê
• **Leite anterior** (mais aguado) mata a sede
• **Leite posterior** (mais cremoso) alimenta

#### "Precisa dar água para o bebê"
**MITO:** "Bebê precisa de água, principalmente no calor"
**VERDADE:**
• **Leite materno** é 88% água
• **Supre** todas as necessidades de hidratação
• **Água** pode causar diarreia em bebês pequenos
• **Até 6 meses:** só leite materno

#### "Amamentação deixa o seio caído"
**MITO:** "Amamentar estraga o formato do seio"
**VERDADE:**
• **Gravidez** causa as mudanças, não amamentação
• **Genética** e idade são fatores principais
• **Amamentação** pode até proteger contra câncer
• **Exercícios** ajudam na sustentação

#### "Não pode comer de tudo amamentando"
**MITO:** "Tem que fazer dieta restritiva"
**VERDADE:**
• **Alimentação** deve ser variada e saudável
• **Poucos alimentos** realmente causam problemas
• **Observe** reações individuais do bebê
• **Restrições** só se houver alergia comprovada

### ✅ VERDADES Importantes:

#### Amamentação Protege Contra Doenças
**VERDADE:** 
• **Reduz** infecções respiratórias
• **Previne** diarreias e alergias
• **Diminui** risco de obesidade infantil
• **Protege** contra leucemia

#### Cada Bebê Tem Seu Ritmo
**VERDADE:**
• **Intervalos** podem variar de 1-4 horas
• **Duração** das mamadas é individual
• **Crescimento** em surtos é normal
• **Padrões** mudam com a idade

#### Amamentação Queima Calorias
**VERDADE:**
• **500 calorias** extras por dia
• **Ajuda** na perda de peso pós-parto
• **Contração** do útero durante mamadas
• **Retorno** mais rápido ao peso anterior

### 🤔 Situações que Geram Dúvidas:

#### "Bebê chora muito, é fome?"
**ANÁLISE:**
• **Bebês choram** por várias razões
• **Fome** é apenas uma delas
• **Observe** outros sinais (sono, fralda, colo)
• **Crescimento** adequado indica alimentação suficiente

#### "Preciso dar fórmula para complementar?"
**ANÁLISE:**
• **Raramente** é necessário
• **Produção** se ajusta à demanda
• **Complemento** pode diminuir produção
• **Avalie** com profissional se necessário

#### "Leite empedrou, não posso amamentar?"
**ANÁLISE:**
• **Ingurgitamento** é comum no início
• **Amamentação** frequente resolve
• **Massagem** e calor ajudam
• **Ordenha** se bebê não conseguir pegar

### 📊 Dados Científicos:

#### Benefícios Comprovados:
• **Reduz** em 36% o risco de morte súbita
• **Diminui** em 64% infecções gastrointestinais
• **Reduz** em 27% o risco de asma
• **Protege** contra diabetes tipo 1 e 2

#### Para a Mãe:
• **Reduz** risco de câncer de mama e ovário
• **Diminui** risco de diabetes tipo 2
• **Protege** contra depressão pós-parto
• **Fortalece** vínculo mãe-bebê

### 🎯 Dicas para Lidar com Pressões:

#### Quando Alguém Disser:
**"Seu leite não está sustentando"**
• **Resposta:** "Leite materno é sempre adequado"
• **Argumento:** Mostrar crescimento do bebê
• **Ação:** Buscar apoio profissional se insegura

**"Precisa dar chá/água"**
• **Resposta:** "Leite materno hidrata completamente"
• **Argumento:** Recomendações da OMS
• **Ação:** Explicar riscos da água para bebês

### 🔬 Fontes Confiáveis:

#### Onde Buscar Informação:
• **Organização Mundial da Saúde (OMS)**
• **Ministério da Saúde**
• **Sociedade Brasileira de Pediatria**
• **Consultoras** em amamentação certificadas
• **Grupos** de apoio à amamentação

### Lembre-se:
🧠 **Conhecimento** é poder
👥 **Apoio** da família é importante
🩺 **Profissionais** qualificados orientam melhor
💪 **Confie** na sua capacidade`,
    completed: false,
  },
  {
    id: 6,
    title: "Plano das primeiras 48h — rotina segura para início",
    content: `## Plano das Primeiras 48 Horas

### 🕐 Cronograma Hora a Hora:

#### Primeiras 2 Horas (Pós-Parto):
**0-30 minutos:**
• **Contato pele a pele** imediato
• **Primeira mamada** na primeira hora
• **Bebê** pode apenas lamber o mamilo (normal)
• **Não force** se bebê não sugar ainda

**30-120 minutos:**
• **Continue** o contato pele a pele
• **Observe** sinais de fome do bebê
• **Ofereça** o seio quando bebê mostrar interesse
• **Peça ajuda** da equipe se necessário

#### Primeiras 6 Horas:
**A cada 2-3 horas:**
• **Ofereça** ambos os seios
• **Duração:** 10-20 minutos cada lado
• **Observe** sinais de saciedade
• **Troque** fraldas antes das mamadas

### 📋 Checklist das Primeiras 48h:

#### ✅ Dia 1 (0-24h):
□ **6-8 mamadas** no mínimo
□ **Xixi:** 1-2 fraldas molhadas
□ **Cocô:** mecônio (escuro, grudento)
□ **Peso:** perda até 7% é normal
□ **Mamadas:** podem ser longas e frequentes

#### ✅ Dia 2 (24-48h):
□ **8-12 mamadas** por dia
□ **Xixi:** 2-3 fraldas molhadas
□ **Cocô:** transição (esverdeado)
□ **Peso:** ainda pode estar perdendo
□ **Mamadas:** começam a ter padrão

### 🍼 Padrão de Mamadas:

#### Frequência Normal:
• **A cada 1-3 horas** durante o dia
• **Pode mamar** a cada hora em alguns momentos
• **Mamadas agrupadas** à noite são normais
• **Total:** 8-12 mamadas em 24h

#### Duração das Mamadas:
• **10-45 minutos** por mamada
• **Varia** muito entre bebês
• **Bebê** deve soltar espontaneamente
• **Não limite** o tempo inicialmente

### 🚨 Sinais de Alerta (Procure Ajuda):

#### Bebê:
• **Menos de 6 mamadas** em 24h
• **Muito sonolento** (não acorda para mamar)
• **Sem xixi** por mais de 6h
• **Perda de peso** maior que 10%
• **Icterícia** (amarelão) intensa

#### Mãe:
• **Dor intensa** nos mamilos
• **Fissuras** com sangramento
• **Febre** ou mal-estar
• **Seios** muito duros e doloridos
• **Sangramento** vaginal excessivo

### 💡 Dicas para o Sucesso:

#### Ambiente Ideal:
• **Local** calmo e confortável
• **Iluminação** suave
• **Temperatura** agradável
• **Apoio** de almofadas
• **Água** sempre por perto

#### Posicionamento:
• **Varie** as posições
• **Use** almofadas para apoio
• **Mantenha** bebê próximo
• **Barriga** com barriga
• **Cabeça** alinhada com o corpo

### 🤱 Cuidados com os Seios:

#### Após Cada Mamada:
• **Deixe** algumas gotas de leite secar
• **Exponha** ao ar por alguns minutos
• **Use** sutiã de algodão
• **Troque** absorventes quando molhados

#### Se Houver Desconforto:
• **Massagem** suave antes da mamada
• **Compressas mornas** por 2-3 minutos
• **Ordenha** manual se muito cheios
• **Varie** posições para esvaziar melhor

### 📞 Rede de Apoio:

#### Tenha os Contatos:
• **Pediatra** do bebê
• **Obstetra** ou enfermeira
• **Consultora** em amamentação
• **Banco de leite** da região
• **Grupo** de apoio local

#### Quando Ligar:
• **Dúvidas** sobre pega ou posição
• **Preocupações** com produção
• **Sinais** de alerta no bebê
• **Dor** persistente
• **Insegurança** ou ansiedade

### 🌙 Mamadas Noturnas:

#### Estratégias:
• **Mantenha** bebê próximo (berço acoplado)
• **Luz** mínima durante mamadas
• **Troque** fralda só se necessário
• **Volte** a dormir rapidamente
• **Reveze** com parceiro quando possível

### 📈 Sinais de Sucesso:

#### Você Está no Caminho Certo SE:
✅ **Bebê** mama regularmente
✅ **Faz** xixi e cocô
✅ **Ganha** peso após o 3º dia
✅ **Você** se sente confiante
✅ **Dor** diminui a cada dia

### Lembre-se:
🌱 **Primeiros dias** são de adaptação
👶 **Cada bebê** é único
🤱 **Você** está aprendendo também
💪 **Vai** ficar mais fácil`,
    completed: false,
  },
  {
    id: 7,
    title: "Checklist da pega correta — passo a passo prático",
    content: `## Checklist Completo da Pega Correta

### 📋 Antes de Começar:

#### ✅ Preparação:
□ **Ambiente** calmo e confortável
□ **Posição** confortável para você
□ **Almofadas** para apoio
□ **Água** por perto
□ **Celular** no silencioso
□ **Mãos** limpas

### 🎯 Checklist da Posição:

#### ✅ Sua Posição:
□ **Costas** bem apoiadas
□ **Ombros** relaxados
□ **Pés** apoiados no chão
□ **Braços** apoiados em almofadas
□ **Você** se sente confortável

#### ✅ Posição do Bebê:
□ **Corpo** virado para você
□ **Barriga** com barriga
□ **Cabeça** alinhada com o corpo
□ **Nariz** na altura do mamilo
□ **Braços** livres para abraçar o seio

### 🔍 Checklist da Pega:

#### ✅ Antes da Pega:
□ **Toque** o lábio inferior com o mamilo
□ **Espere** a boca abrir bem
□ **Boca** aberta como um bocejo
□ **Língua** para baixo e para frente
□ **Aproxime** rapidamente o bebê

#### ✅ Durante a Pega:
□ **Boca** bem aberta
□ **Lábios** virados para fora
□ **Queixo** encostado no seio
□ **Nariz** livre ou tocando levemente
□ **Mais aréola** visível acima da boca

### 👂 Checklist dos Sons:

#### ✅ Sons Positivos:
□ **Sucção** rítmica e profunda
□ **"Glup, glup"** - deglutição
□ **Respiração** tranquila pelo nariz
□ **Pausas** naturais entre sugadas
□ **Silêncio** entre as sugadas

#### ❌ Sons de Alerta:
□ **Estalos** ou "clicks"
□ **Chiados** ou ruídos estranhos
□ **Respiração** ofegante
□ **Choro** durante a mamada

### 👀 Checklist Visual:

#### ✅ Aparência do Bebê:
□ **Bochechas** redondas durante sucção
□ **Mãos** relaxadas (não em punho)
□ **Corpo** molinho contra você
□ **Olhos** podem estar fechados
□ **Expressão** tranquila

#### ✅ Aparência do Seio:
□ **Mamilo** centralizado na boca
□ **Aréola** parcialmente visível
□ **Seio** com formato normal
□ **Sem** compressão excessiva

### 🤱 Checklist de Conforto:

#### ✅ Para Você:
□ **Sem dor** nos mamilos
□ **Sensação** de "puxada" suave
□ **Relaxamento** progressivo
□ **Sensação** de esvaziamento
□ **Conforto** geral

#### ✅ Para o Bebê:
□ **Sucção** eficiente
□ **Deglutição** audível
□ **Satisfação** após mamada
□ **Sono** tranquilo depois
□ **Ganho** de peso adequado

### ⏰ Checklist Temporal:

#### ✅ Durante a Mamada:
□ **Primeiros minutos** sem dor
□ **Sucção** se torna rítmica
□ **Sons** de deglutição aparecem
□ **Bebê** relaxa progressivamente
□ **Você** consegue relaxar

#### ✅ Após a Mamada:
□ **Mamilo** com formato normal
□ **Bebê** satisfeito e sonolento
□ **Seio** mais macio
□ **Você** se sente bem
□ **Próxima mamada** em 1-3h

### 🚨 Checklist de Alerta:

#### ❌ Pare e Reposicione SE:
□ **Dor** nos mamilos
□ **Estalos** constantes
□ **Mamilo** achatado após mamada
□ **Bebê** inquieto
□ **Bochechas** fundas

### 🔄 Checklist de Reposicionamento:

#### ✅ Como Corrigir:
□ **Quebrar** o vácuo com o dedo
□ **Reposicionar** nariz na altura do mamilo
□ **Aguardar** boca abrir bem
□ **Aproximar** rapidamente
□ **Verificar** todos os pontos novamente

### 📊 Checklist de Progresso:

#### ✅ Sinais de Melhora:
□ **Dor** diminuindo a cada dia
□ **Pega** mais rápida e fácil
□ **Mamadas** mais eficientes
□ **Bebê** ganhando peso
□ **Confiança** aumentando

### 💡 Dicas Finais:

#### Lembre-se:
• **Use** este checklist nas primeiras semanas
• **Não precisa** ser perfeito imediatamente
• **Prática** leva à perfeição
• **Cada bebê** é único
• **Busque ajuda** se necessário

### 📱 Checklist Digital:

#### Salve no Celular:
□ Boca aberta?
□ Queixo encostado?
□ Nariz livre?
□ Sem dor?
□ Sons de deglutição?

**Use sempre que tiver dúvidas!**`,
    completed: false,
  },
]

export function PegaMethodModule() {
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
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-pink-100">
                  <Baby className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">Módulo 3 - Método P.E.G.A</h1>
                  <p className="text-sm text-gray-500">7 aulas - Amamentação sem dor</p>
                </div>
              </div>
            </div>
            <Badge variant="secondary" className="flex items-center space-x-1">
              <CheckCircle className="w-4 h-4" />
              <span>{completedLessons.length}/7 concluídas</span>
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

            {/* P.E.G.A Quick Reference */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Target className="w-5 h-5" />
                  <span>P.E.G.A</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center">
                    <span className="text-pink-600 font-bold text-xs">P</span>
                  </div>
                  <span>Posição da mãe</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center">
                    <span className="text-pink-600 font-bold text-xs">E</span>
                  </div>
                  <span>Encaixe do bebê</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center">
                    <span className="text-pink-600 font-bold text-xs">G</span>
                  </div>
                  <span>Garra (pega) correta</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center">
                    <span className="text-pink-600 font-bold text-xs">A</span>
                  </div>
                  <span>Acompanhamento</span>
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
                <p className="text-sm text-gray-600 mb-3">Dúvidas sobre amamentação?</p>
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
