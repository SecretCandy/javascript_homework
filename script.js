// 문제 1
const infos = [
    {
        이름: "철수",
        나이: 19,
        성별: "남"
    },
    {
        이름: "짱구",
        나이: 20,
        성별: "남"
    },
    {
        이름: "유리",
        나이: 21,
        성별: "여"
    },
];

console.log(infos);

// 문제 2
const infoContainer = document.querySelector(".infoContainer");
infos.forEach((info) => {
    let html템플릿 = `<div class="info">
                        <h2>이름: ${info.이름}</h2>
                        <h3>나이: ${info.나이}</h3>
                        <h3>성별: ${info.성별}</h3>
                    </div>`;
    infoContainer.insertAdjacentHTML("beforeend", html템플릿);
})

// 문제 3
const 여자 = infos.find((성별여) => {
    return 성별여.성별 === "여";
})
console.log(여자);

// 문제 4
const 남자 = infos.filter((성별남) => {
    return 성별남.성별 === "남";
})
console.log(남자);

// 문제 5
const newInfos = infos.map((info) => {
    return {
        이름: info.이름,
        나이: info.나이 + 10,
        성별: info.성별
    };
});
console.log(newInfos);
console.log(infos);

// 문제 6
const infosSort = [...infos];
const ageSort = infosSort.sort((a, b) => {
    return b.나이 - a.나이;
})
console.log(infos);
console.log(ageSort);

// 문제 7
const user = {
	이름: "병수",
	나이: 20,
	주소: "시골",
};
const {이름, 나이, 주소} = user;
console.log(이름);
console.log(나이);
console.log(주소);