const recordClick = function (recorderBtn) {
  this.recordingEnabled = false;
  return () => {
    this.recordingEnabled = !this.recordingEnabled;
    recorderBtn.style.color = this.recordingEnabled ? "red" : "white";
  };
};

const onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get("room");
  console.log("this is the room", room);

  /*   const recorderBtn = document.getElementById('record')
  recorderBtn.addEventListener('click', recordClick(recorderBtn)) */

  const view = new view(
    view.renderVideo({
      userId: "teste01",
      url: "https://media.giphy.com/media/9rgsR3HfDuBYhRvb0p/giphy.mp4",
    }),
    view.renderVideo({
      userId: "teste01",
      isCurrentId: true,
      url: "https://media.giphy.com/media/9rgsR3HfDuBYhRvb0p/giphy.mp4",
    }),
    view.renderVideo({
      userId: "teste02",
      url: "https://media.giphy.com/media/9rgsR3HfDuBYhRvb0p/giphy.mp4",
    })
  );
};

window.onload = onload;
