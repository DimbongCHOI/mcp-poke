**일반 기능: Cursor 채팅으로 실행 !!**
**React 기반 웹 앱 개발 중 !! -> npm run full:dev**

# 🎮 포켓몬 AI 챗봇

포켓몬 API를 활용한 MCP(Model Context Protocol) 서버와 자연어 처리 챗봇입니다.

## ✨ 주요 기능

- 🔍 **포켓몬 정보 조회**: 이름이나 도감번호로 포켓몬의 상세 정보 확인
- ⚡ **타입별 포켓몬 검색**: 특정 타입의 포켓몬 목록 조회
- 🌟 **세대별 포켓몬 검색**: "1세대 드래곤 타입 포켓몬" 같은 복합 검색
- 🎯 **타입 상성 조회**: "불꽃은 풀에게 효과적인가?" 같은 질문
- 📊 **능력치 분석**: 포켓몬의 스탯 정보와 차트
- 🗣️ **자연어 대화**: 한국어로 자연스럽게 대화

---

## 🌐 **GitHub Pages 배포 (공개 URL)**

### 📋 **배포 단계**

#### 1️⃣ **GitHub 저장소 생성**
```bash
# GitHub에서 새 저장소 생성 (예: mcp-poke)
# 저장소 이름을 기억해두세요!
```

#### 2️⃣ **프로젝트 푸시**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/[사용자명]/mcp-poke.git
git push -u origin main
```

#### 3️⃣ **GitHub Pages 설정**
1. GitHub 저장소 → **Settings** 탭
2. 왼쪽 메뉴에서 **Pages** 클릭
3. **Source**: "GitHub Actions" 선택
4. 저장 후 자동으로 배포 시작!

#### 4️⃣ **배포 완료**
- 몇 분 후 다음 URL에서 확인 가능:
```
https://[사용자명].github.io/mcp-poke/
```

### 🔄 **업데이트 배포**
```bash
git add .
git commit -m "Update"
git push
```
→ 자동으로 GitHub Actions가 실행되어 재배포!

---

## 🚀 빠른 시작 가이드

### ⚙️ **필수 요구사항**
- **Node.js 18 이상** 설치 필요
  - 확인: `node --version`
  - 다운로드: [nodejs.org](https://nodejs.org/)

### 📦 **1단계: 프로젝트 다운로드**
```bash
git clone <repository-url>
cd mcp-poke
```

### 📥 **2단계: 패키지 설치**
```bash
npm install
```
⏱️ 처음 설치 시 2~3분 소요될 수 있습니다.

### 🎮 **3단계: 실행 방법 선택**


#### 💬 **콘솔 챗봇 실행**
```bash
npm start
```
터미널에서 직접 대화하며 포켓몬 정보 조회

---


---

## 🛠️ **개발 모드**

### 파일 변경 시 자동 재시작
```bash
npm run dev
```

### 테스트 실행
```bash
npm test
```

## 💬 사용 예시

### 포켓몬 정보 조회
```
🎮 포켓몬 챗봇> 피카츄 정보 보여줘
🎮 포켓몬 챗봇> 리자몽 능력치 알려줘
🎮 포켓몬 챗봇> 꼬부기 상세 정보
```

### 타입별 포켓몬 검색
```
🎮 포켓몬 챗봇> 전기 타입 포켓몬 알려줘
🎮 포켓몬 챗봇> 불꽃 타입은 어떤 포켓몬들이 있어?
🎮 포켓몬 챗봇> 물 타입 포켓몬들 보여줘
```

### 포켓몬 검색
```
🎮 포켓몬 챗봇> 불꽃으로 시작하는 포켓몬 찾아줘
🎮 포켓몬 챗봇> 전기 포켓몬 검색
🎮 포켓몬 챗봇> 어떤 포켓몬이 파이로 시작해?
```

### 기타 명령어
```
🎮 포켓몬 챗봇> 포켓몬 타입들 알려줘
🎮 포켓몬 챗봇> quit
```

## 🏗️ 프로젝트 구조

```
src/
├── server.js          # MCP 서버 (포켓몬 API 도구들)
├── chatbot.js         # 자연어 처리 챗봇
├── pokemon-api.js     # 포켓몬 API 클라이언트
├── config.js          # 설정 및 타입 매핑
├── index.js           # 메인 애플리케이션
└── test.js            # 테스트 스크립트
```

## 🛠️ MCP 도구들

### 1. `get_pokemon_info`
포켓몬의 상세 정보를 조회합니다.
- **매개변수**: `identifier` (포켓몬 이름 또는 ID)

### 2. `get_pokemon_by_type`
특정 타입의 포켓몬 목록을 조회합니다.
- **매개변수**: `type` (포켓몬 타입)

### 3. `get_pokemon_types`
모든 포켓몬 타입 목록을 조회합니다.

### 4. `search_pokemon`
포켓몬 이름으로 검색합니다.
- **매개변수**: `query` (검색어)

### 5. `get_pokemon_stats`
포켓몬의 능력치 정보를 조회합니다.
- **매개변수**: `identifier` (포켓몬 이름 또는 ID)

## 🎯 지원하는 포켓몬 타입

- 노말, 불꽃, 물, 풀, 전기, 얼음, 격투, 독
- 땅, 비행, 에스퍼, 벌레, 바위, 고스트, 드래곤, 악
- 강철, 페어리

## 🧪 테스트

```bash
npm test
```

테스트는 다음을 확인합니다:
- 포켓몬 API 연결 및 데이터 조회
- 한국어 포켓몬 이름 매핑
- 챗봇 의도 분석
- MCP 도구 호출

## 🔧 기술 스택

- **Node.js**: 런타임 환경
- **MCP SDK**: Model Context Protocol 구현
- **Axios**: HTTP 클라이언트
- **Pokemon API**: 포켓몬 데이터 소스
- **Readline**: 대화형 인터페이스

## 📝 라이선스

MIT License

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

💡 **팁**: 자연스럽게 대화하듯이 말씀해 주세요! 챗봇이 의도를 파악해서 적절한 정보를 제공해드립니다.
