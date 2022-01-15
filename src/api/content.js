import { getAuthor } from "./author";

export const getContents = (author) => {
    const result = [];

    for (let i = 0; i < 5; i++) {
        result.push(getContent(i));
    }

    return result;
};

export const getContent = (id) => ({
    id,
    description: `
    한해를 보내며...
    올 한해동안 받은 은혜에
    감사의 초를켭니다.
    마음으로
    용서못하고
    알게 모르게
    남에게
    섭섭하게
    한일들을
    참회에 촛불을 켭니다.
    소리없이 쌓이는
    하얀 눈처럼 행복이
    당신의 마음에 소복소복
    쌓이길 평화도 건강도
    함께하시길 기원합니다.
    `,
    title: "참회의 초를 켜며..",
    author: getAuthor(1),
    imgSrc: "https://images.unsplash.com/photo-1572203176799-40836603681d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
});
