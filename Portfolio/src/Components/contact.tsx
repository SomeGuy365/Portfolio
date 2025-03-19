export const Contact = () => {
  let timer2: number;
  const emailclick = () => {
    navigator.clipboard.writeText("ethanjdenton1@gmail.com");
    let element = document.getElementById("contact-email-hover");
    if (element) {
      if (timer2 !== null) {
        console.log("dissapear");
        element.style.opacity = "1";
      }
      timer2 = window.setTimeout(() => {
        element.style.opacity = "0";
      }, 2000);
    }
  };

  return (
    <div className="contact-cont">
      <div className="contact-links">
        <a href="https://github.com/SomeGuy365" target="_blank">
          <div className="contact-links-github">
            Github <br />
            <img
              src="\src\assets\Github-Logo.svg"
              alt="nu uh"
              width={50}
              height={50}
            />
          </div>
        </a>
        <a>
          <div className="contact-links-linkedin">
            LinkedIn <br />
            <img
              src="\src\assets\Linkedin_icon.svg"
              alt="nu uh"
              width={50}
              height={50}
            />
          </div>
        </a>
      </div>
      <div className="contact-email-hover" id="contact-email-hover">
        Copied &#10004;
      </div>
      <div className="contact-email" onClick={emailclick}>
        ethanjdenton1@gmail.com
      </div>
    </div>
  );
};
