const Test = () => {
  const sendMessage = () => {
    const title = "궁금해 약";
    const body = "약을 복용할 시간입니다!";
    const icon = "/images/logo.png";
    const options = { body, icon };

    const notif = new Notification(title, options);
  };

  const btnClickHandler = async () => {
    const result = await Notification.requestPermission();
    if (result === "granted") {
      sendMessage();
    }
  };

  return <button onClick={btnClickHandler}>알림 보내기</button>;
};

export default Test;