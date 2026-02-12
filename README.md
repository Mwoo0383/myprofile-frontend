# 🧑‍💻 MyProfile

개발자 개인 포트폴리오 웹 서비스입니다.  
프로젝트와 기술 스택을 관리하고 소개하기 위한 풀스택 애플리케이션입니다.

Next.js(App Router)와 NestJS 기반으로 구성되었으며,  
백엔드 API와 연동하여 프로젝트 정보를 동적으로 조회 및 관리합니다.

---

## 🚀 Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- React
- Fetch API (Server / Client 분리)

### Backend
- NestJS
- TypeORM
- MySQL
- REST API 설계

---

## 🗂️ 주요 기능

### 1️⃣ 프로젝트 목록 조회
- 전체 프로젝트 조회
- 최신순 정렬
- 기술 스택 포함 응답

### 2️⃣ 프로젝트 상세 조회
- 동적 라우팅 (`/projects/[id]`)
- 기간 포맷 처리
- 기술 스택 태그 UI 표시
- GitHub / 배포 링크 연결

### 3️⃣ 프로젝트 생성
- 제목, 설명, GitHub URL 입력
- 기술 스택 다중 입력
- project ↔ tech 관계 저장

### 4️⃣ 프로젝트 수정
- 기존 데이터 자동 바인딩
- 기존 기술 스택 자동 표시
- 기술 스택 추가 / 삭제 가능

### 5️⃣ 프로젝트 삭제
- 프로젝트 삭제 시
- 연관된 project_tech 자동 삭제 (CASCADE)

---

## 🧱 Database 설계

### 📌 관계 구조 (N:M)

Project ↔ ProjectTech ↔ Tech

- 하나의 프로젝트는 여러 기술을 가질 수 있음
- 하나의 기술은 여러 프로젝트에 사용될 수 있음
- 중간 테이블을 명시적으로 분리하여 확장 가능하도록 설계

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

## 🧠 설계 의도

- ManyToMany 대신 **중간 엔티티(ProjectTech) 직접 설계**
- 추후 version, 사용 기간 등 확장 가능
- DTO 기반 응답 가공 처리
- 프론트와 백엔드 모델 일관성 유지

---

## 📡 API 예시 응답

```json
{
  "id": 1,
  "title": "MyProfile",
  "description": "개발자 개인 포트폴리오 사이트...",
  "githubUrl": "https://github.com/...",
  "deployUrl": "https://myprofile.dev",
  "startDate": "2024-12-31T15:00:00.000Z",
  "endDate": null,
  "techs": [
    "TypeScript",
    "NestJS",
    "Next.js",
    "MySQL"
  ]
}
