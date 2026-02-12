# 🧑‍💻 MyProfile

개발자 개인 포트폴리오 웹 서비스입니다.  
프로젝트와 기술 스택을 체계적으로 관리하고 소개하기 위한 **풀스택 애플리케이션**입니다.

Next.js(App Router)와 NestJS 기반으로 구성되었으며,  
REST API를 통해 프로젝트 데이터를 동적으로 조회 및 관리합니다.

계속 develop 하는 중입니다..!

---

## 🚀 Tech Stack

### 🖥️ Frontend
- Next.js (App Router)
- TypeScript

### ⚙️ Backend
- NestJS
- TypeORM

### 🗄️ Database
- MySQL
- N:M 관계 설계 (Project ↔ Tech)

---

## 🏗️ Architecture

```
Frontend (Next.js - Vercel)
        │
        │ HTTPS
        ▼
Backend (NestJS - Render)
        │
        │ TypeORM
        ▼
Database (MySQL - Railway)
```

### 📌 구조 설명

- **Frontend**
  - Next.js App Router 기반
  - Server Component에서 데이터 사전 패칭
  - 관리자 전용 기능 분리

- **Backend**
  - NestJS REST API 서버
  - DTO를 통해 응답 구조 일관성 유지
  - CORS 및 환경변수 기반 설정

- **Database**
  - Project ↔ Tech N:M 관계
  - 중간 테이블(ProjectTech) 명시적 설계

---

## 🗂️ 주요 기능

### 1️⃣ 프로젝트 목록 조회
- 최신순 정렬
- 기술 스택 포함 응답
- 관리자 전용 생성 버튼 표시

### 2️⃣ 프로젝트 상세 조회
- 동적 라우팅 (`/projects/[id]`)
- 기간 포맷 처리
- 기술 스택 태그 UI 표시
- GitHub / 배포 링크 연결

### 3️⃣ 프로젝트 생성
- 제목, 설명, GitHub URL, 배포 URL 입력
- 시작일 / 종료일 설정
- 기술 스택 다중 선택
- Project ↔ Tech 관계 저장

### 4️⃣ 프로젝트 수정
- 기존 데이터 자동 바인딩
- 기존 기술 스택 자동 선택 상태 유지
- 기술 추가 / 제거 가능

### 5️⃣ 프로젝트 삭제
- 프로젝트 삭제 시 연관된 project_tech 자동 삭제 (CASCADE)

---

## 🧱 Database 설계

### 📌 관계 구조

```
Project 1 ─── N ProjectTech N ─── 1 Tech
```

### 🔹 project

| column | type |
|--------|------|
| project_id | bigint (PK) |
| title | varchar |
| description | text |
| githubUrl | varchar |
| deployUrl | varchar |
| startDate | date |
| endDate | date |

### 🔹 tech

| column | type |
|--------|------|
| tech_id | bigint (PK) |
| name | varchar (unique) |
| slug | varchar (unique) |

### 🔹 project_tech

| column | type |
|--------|------|
| prjTec_id | bigint (PK) |
| project_id | FK |
| tech_id | FK |

---

## 📡 API 설계

### 🔹 프로젝트 목록 조회
```
GET /projects
```

### 🔹 프로젝트 상세 조회
```
GET /projects/:id
```

### 🔹 프로젝트 생성
```
POST /projects
```

### 🔹 프로젝트 수정
```
PATCH /projects/:id
```

### 🔹 프로젝트 삭제
```
DELETE /projects/:id
```

---

## 🚀 Deployment

### 🖥️ Frontend
- Platform: **Vercel**
- 환경변수:
```
NEXT_PUBLIC_API_BASE_URL=
```

### ⚙️ Backend
- Platform: **Render**
- Build Command:
```
npm install && npm run build
```
- Start Command:
```
npm run start:prod
```

### 🗄️ Database
- Platform: **Railway (MySQL)**
- 환경변수 설정:
```
DATABASE_URL=
```

---

## 🧠 설계 의도

- ManyToMany 대신 중간 엔티티(ProjectTech)를 직접 설계하여 확장 가능성 확보
- DTO 기반 응답 구조 통일
- 프론트와 백엔드 모델 구조 일관성 유지
- 수정 페이지 상태 동기화(useEffect) 처리
- 배포 환경(CORS, 환경변수) 고려한 설계

---

## ✨ 프로젝트 특징

- 풀스택 구조 설계 및 배포까지 직접 구현
- 관계형 데이터 모델링 경험
- REST API 설계 및 프론트 연동 경험
- 실제 운영 가능한 배포 환경 구성
