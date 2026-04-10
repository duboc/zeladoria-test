# Arquitetura da Solução: Zeladoria Autônoma (Sentinel Insight v2.0)

Este documento descreve a arquitetura de referência na **Google Cloud Platform (GCP)** para a solução de Zeladoria Autônoma. O sistema foi projetado para realizar o monitoramento IoT em tempo real, detecção de anomalias utilizando Inteligência Artificial e a resolução autônoma de incidentes críticos (como vazamentos de água) em condomínios.

---

## 🏗️ Diagrama Lógico de Arquitetura

```mermaid
graph TD
    %% Dispositivos IoT
    Sensores[Sensores IoT (Fluxo/Pressão)] -->|MQTT/HTTP| PubSub[Cloud Pub/Sub]
    Valvulas[Válvulas Solenoides] <-->|Comandos| IoTGateway[IoT Gateway / Edge]
    IoTGateway <--> PubSub

    %% Processamento e IA
    PubSub --> Dataflow[Cloud Dataflow]
    Dataflow -->|Telemetria em Tempo Real| Firestore[(Firestore)]
    Dataflow -->|Dados Históricos| BigQuery[(BigQuery)]
    Dataflow <-->|Inferência de Anomalias| VertexAI[Vertex AI]

    %% Orquestração e RPA (Cérebro)
    Firestore -->|Triggers| CloudFunctions[Cloud Functions / RPA]
    CloudFunctions -->|Aciona SafeBlock| PubSub
    CloudFunctions -->|Integração Marketplace| SecretManager[Secret Manager]
    CloudFunctions -->|Notificações| FCM[Firebase Cloud Messaging]

    %% Frontend e Usuário
    Firestore <-->|WebSockets/Realtime| Frontend[Cloud Run - Dashboard React]
    FCM -->|Push Notification| AppMorador[App Gruvi Proativo]
```

---

## ☁️ Componentes GCP Utilizados

### 1. Ingestão e Mensageria (IoT Edge)
* **Cloud Pub/Sub:** Atua como o barramento de eventos principal. Recebe a telemetria de alta frequência (fluxo de água, pressão) dos mais de 142 sensores operacionais e roteia os comandos de volta para as válvulas solenoides.

### 2. Processamento de Dados (Stream)
* **Cloud Dataflow:** Processa o fluxo de dados do Pub/Sub em tempo real. Ele agrega os dados (ex: cálculo de média de fluxo por minuto) e prepara as informações para o painel de controle e para os modelos de IA.

### 3. Inteligência Artificial (Cérebro RPA)
* **Vertex AI:** Hospeda os modelos de *Machine Learning* responsáveis por detectar anomalias. Quando o Dataflow identifica um desvio padrão suspeito (ex: fluxo +300% acima da média), o modelo no Vertex AI classifica a severidade e decide se o "Protocolo de Emergência" deve ser acionado.

### 4. Orquestração e Lógica de Negócio (RPA)
* **Cloud Functions / Cloud Run (Backend):** Executa os *Smart Contracts* e a lógica de RPA. 
  * Aciona o bloqueio da válvula (Protocolo *SafeBlock*).
  * Comunica-se via API com o Marketplace (ex: Superlógica) para buscar e contratar encanadores disponíveis ("QuickFix").
* **Secret Manager:** Armazena de forma segura as chaves de API do Marketplace, credenciais financeiras (Conta Garantida) e tokens de notificação.

### 5. Armazenamento de Dados
* **Firestore:** Banco de dados NoSQL em tempo real. Armazena o estado atual dos sensores, status das válvulas e os logs do Cérebro RPA. O frontend em React "escuta" essas mudanças para atualizar a interface instantaneamente sem necessidade de *refresh*.
* **BigQuery:** *Data Warehouse* para armazenamento de longo prazo. Usado para gerar relatórios de economia (ex: R$ 12.400,00 economizados) e treinar/retreinar os modelos preditivos do Vertex AI.

### 6. Frontend e Interface do Usuário
* **Cloud Run:** Hospeda a aplicação web (Dashboard React/Vite com Tailwind CSS) em contêineres escaláveis, garantindo alta disponibilidade para os operadores do *Command Center*.
* **Cloud Armor & Identity-Aware Proxy (IAP):** Protege o acesso ao dashboard, garantindo que apenas administradores e sistemas nominais autenticados possam visualizar e operar o sistema.

### 7. Notificações Proativas
* **Firebase Cloud Messaging (FCM):** Envia notificações push em tempo real para os smartphones dos síndicos e moradores (App Gruvi), alertando sobre o corte preventivo e o tempo estimado de chegada do prestador de serviço.

---

## 🔄 Fluxo de Resolução Autônoma de Incidente

1. **[14:30:02] Ingestão:** Sensores enviam dados normais de fluxo para o **Pub/Sub**. O **Dataflow** processa e salva no **Firestore**.
2. **[14:31:15] Detecção:** Um cano rompe. O **Dataflow** detecta o pico, consulta o **Vertex AI** e confirma a anomalia crítica.
3. **[14:31:16] Ação Imediata:** Uma **Cloud Function** é disparada pelo Firestore, acionando o protocolo *SafeBlock*. Um comando é enviado via **Pub/Sub** para fechar a válvula solenoide 04.
4. **[14:31:20] Resolução:** A mesma Cloud Function acessa o **Secret Manager**, autentica-se na API do Marketplace e emite uma ordem de serviço de emergência.
5. **[14:31:26] Financeiro:** O *Smart Contract* provisiona os fundos (R$ 450,00) e registra a transação.
6. **[14:31:30] Comunicação:** O **FCM** dispara o alerta para o celular do morador avisando que o problema foi contido e a ajuda está a caminho.

---

## 🔒 Segurança e Governança
* **Criptografia:** AES-256 ativado em repouso (Cloud Storage/Firestore) e em trânsito (TLS 1.3).
* **Rede:** Utilização de VPCs privadas para comunicação entre os microserviços, sem exposição direta dos bancos de dados à internet.
* **Latência:** Arquitetura otimizada para manter a latência de ponta a ponta na casa dos ~14ms, essencial para bloqueios emergenciais de água.
