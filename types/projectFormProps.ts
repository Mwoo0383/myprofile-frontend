type ProjectFormProps = {

    // 기술 스택 가져오기
    techOptions: Tech[];
    // 기존 값. 수정 시 있을 값
    initialData?: {
      title: string;
      description: string;
      githubUrl?: string;
      deployUrl?: string;
      startDate: string;
      endDate: string;
      techIds?: number[];
    };
    // 부모에서 전달한 저장 함수
    onSubmit: (data: any) => void;
    // 생성/수정 구분
    isEdit?: boolean;
};