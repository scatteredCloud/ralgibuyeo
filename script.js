// 랜덤 멘트 배열
const messages = [
    {
        image: "images/당신잘못이아니야.png",
        text: "고개들어요 문준우 당신 잘못이 아니야",
        link: "https://www.youtube.com/watch?v=P1liNCYi9w8&t=435s",
        audio: "audio/고개들어요문준우.mp3"
    },
    {
        image: "images/상처.png",
        text: "내가 누군가를 좋아한다는 사실이 그 누군가에겐 상처가 될 수도 있잖아요.",
        link: "https://www.youtube.com/watch?v=HML20e-UQwA",
        audio: "audio/그러니까 내가 누군가를 이제 좋아한다는 사실이 그 사람에게는 상처가 될 수 있잖아요.mp3"
    },
    {
        image: "images/불자고.png",
        text: "불편해? 불편하면 자세를 고쳐앉아. 보는 자세가 잘못된 거 아니에요.",
        link: "https://www.youtube.com/watch?v=AIdUWdzX9TA",
        audio: "audio/불편해_ 불편하면 자세를 고쳐 앉아 싯팔.mp3"
    },
    {
        image: "images/학벌역전세계.png",
        text: "나는 대학 한 번 가보는 게 꿈이에요. 아이헤브어드림",
        link: "https://www.youtube.com/watch?v=ey2rvCltiQg&t=18s",
        audio: "audio/아이헤브어드림.mp3"
    },
    {
        image: "images/지구버튼.png",
        text: "다 달에 가고 싶다해서 가면은 지구에 남아서 버튼 눌러줄 사람은 누가 눌러주냐고.",
        link: "https://www.youtube.com/watch?v=ey2rvCltiQg&t=18s",
        audio: "audio/달에가.mp3"
    },
    {
        image: "images/질리언.png",
        text: "미래 없는 인내심은 없어요. 뭔가를 보고 있으니까 인내심이 생기는건데 이 질리언은 뭘 보고 있는걸까",
        link: "https://www.youtube.com/watch?v=ey2rvCltiQg&t=18s",
        audio: "audio/질리언.mp3"
    },
    {
        image: "images/남탓.png",
        text: "남탓도 좀 하고, 남탓 할 수도 있지. 우린 남이니까. 우린 가족이 아니니까.",
        audio: "audio/남탓.mp3"
    }
  ];
  
  // 버튼 누를 때 실행되는 함수
  document.getElementById("to-larlo").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const chosen = messages[randomIndex];
  
    // 이미지 + 대사 + 링크 보여주기
    const display = document.getElementById("larlo-display");
    display.innerHTML = `
      <img src="${chosen.image}" width="800" style="border-radius: 20px;">
      <p style="font-weight: bold; font-size: 1.2rem; margin: 15px;">"${chosen.text}"</p>
      <a href="${chosen.link}" target="_blank" style="color: #3366cc; font-size: 1rem;">👉 관련 영상 보기</a>
    `;
  
    // 음성 재생 (src 업데이트 → 재생)
    const voice = document.getElementById("larlo-voice");
    voice.src = chosen.audio;
    voice.play().catch(e => {
      console.log("🔇 자동 재생 차단됨: 사용자가 먼저 상호작용해야 함");
    });
  
    // 화면 전환
    document.getElementById("section2").scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("back-to-top").addEventListener("click", () => {
    // 오디오 중단
    const voice = document.getElementById("larlo-voice");
    voice.pause();         // 재생 중지
    voice.currentTime = 0; // 처음으로 되감기
  
    // 화면 이동
    document.getElementById("section1").scrollIntoView({ behavior: "smooth" });
  });