class view {
  constructor() {}

  createVideoElement({ muted = true, src, srcObject }) {
    const video = document.createElement("video");
    video.mute = muted;
    video.src = src;
    if (src) {
      video.controls = true;
      video.loop = true;
    }
    return video;
  }
}
